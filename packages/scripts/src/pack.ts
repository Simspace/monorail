import type { Workspace } from "@yarnpkg/core";

import { getPluginConfiguration } from "@yarnpkg/cli";
import { Configuration, Project, structUtils } from "@yarnpkg/core";
import { ppath } from "@yarnpkg/fslib";
import child_process from "child_process";
import fs from "fs/promises";
import { promisify } from "util";

const exec = promisify(child_process.exec);

function carry(key: string, root: any, target: any) {
  if (key in root) {
    target[key] = root[key];
  }
}

async function getPackageJson() {
  const content = await fs.readFile("./package.json", { encoding: "utf-8" });
  return JSON.parse(content);
}

const DEPENDENCY_TYPE = ["dependencies", "peerDependencies"];

const WORKSPACE_PROTOCOL = "workspace:";

async function writePackageJson(project: Project, workspace: Workspace) {
  const originalManifest = await getPackageJson();
  const rawManifest: any = {};

  carry("name", originalManifest, rawManifest);
  carry("version", originalManifest, rawManifest);
  carry("private", originalManifest, rawManifest);
  carry("license", originalManifest, rawManifest);
  carry("repository", originalManifest, rawManifest);
  carry("gitHead", originalManifest, rawManifest);
  carry("bin", originalManifest, rawManifest);
  carry("dependencies", originalManifest, rawManifest);
  carry("peerDependencies", originalManifest, rawManifest);
  carry("peerDependenciesMeta", originalManifest, rawManifest);
  carry("sideEffects", originalManifest, rawManifest);

  for (const dependencyType of DEPENDENCY_TYPE) {
    for (const descriptor of workspace.manifest.getForScope(dependencyType).values()) {
      const matchingWorkspace = project.tryWorkspaceByDescriptor(descriptor);
      const range             = structUtils.parseRange(descriptor.range);
      if (range.protocol !== WORKSPACE_PROTOCOL) {
        continue;
      }

      if (matchingWorkspace === null) {
        if (project.tryWorkspaceByIdent(descriptor) === null) {
          throw new Error(`Workspace not found: ${structUtils.prettyDescriptor(project.configuration, descriptor)}`);
        }
      } else {
        let versionToWrite: string;
        if (
          structUtils.areDescriptorsEqual(descriptor, matchingWorkspace.anchoredDescriptor) ||
          range.selector === "*"
        ) {
          versionToWrite = matchingWorkspace.manifest.version ?? "0.0.0";
        } else if (range.selector === "~" || range.selector === "^") {
          versionToWrite = `${range.selector}${matchingWorkspace.manifest.version ?? "0.0.0"}`;
        } else {
          versionToWrite = range.selector;
        }
        const identDescriptor =
          dependencyType === "dependencies" ? structUtils.makeDescriptor(descriptor, "unknown") : null;
        const finalDependencyType =
          identDescriptor !== null && workspace.manifest.ensureDependencyMeta(identDescriptor).optional
            ? "optionalDependencies"
            : dependencyType;

        rawManifest[finalDependencyType][structUtils.stringifyIdent(descriptor)] = versionToWrite;
      }
    }
  }

  const exports: any = {};
  exports["./*"]     = {
    browser: "./_esm/*.js",
    import: "./_mjs/*.mjs",
    require: "./_cjs/*.cjs",
  };
  exports["."] = {
    browser: "./_esm/index.js",
    import: "./_mjs/index.mjs",
    require: "./_cjs/index.cjs",
  };
  rawManifest.exports = exports;

  rawManifest.publishConfig = {
    access: "public",
  };

  const content = JSON.stringify(rawManifest, null, 2);

  await fs.writeFile("./dist/package.json", content);
}

function exists(path: string) {
  return fs.access(path).then(
    () => true,
    () => false,
  );
}

const cwd = ppath.cwd();

const yarnConfiguration = await Configuration.find(cwd, getPluginConfiguration());

const { project } = await Project.find(yarnConfiguration, cwd);

const workspace = project.getWorkspaceByCwd(cwd);

if (await exists("dist")) {
  await exec("rm -rf dist");
}
await fs.mkdir("dist");

if (await exists("./build/esm")) {
  await fs.mkdir("./dist/_esm");
  await exec("cp -r ./build/esm/* ./dist/_esm");
}
if (await exists("./build/mjs")) {
  await fs.mkdir("./dist/_mjs");
  await exec("cp -r ./build/mjs/* ./dist/_mjs");
}
if (await exists("./build/cjs")) {
  await fs.mkdir("./dist/_cjs");
  await exec("cp -r ./build/cjs/* ./dist/_cjs");
}
if (await exists("./build/dts")) {
  await exec("cp -r ./build/dts/* ./dist");
}

await exec("cp ../../LICENSE ./dist")

await writePackageJson(project, workspace);

console.log("Done!");
