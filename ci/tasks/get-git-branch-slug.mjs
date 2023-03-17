import fs from 'node:fs'
import { stdout } from 'node:process'

const metadata = JSON.parse(fs.readFileSync("./.git/resource/metadata.json").toString("utf-8"))

const headName = metadata.filter(({ name }) => name === "head_name")[0]?.value

if (headName === undefined) {
	throw new Error("head_name not found")
}

const slug = headName.replace("/", "-")

stdout.write(slug)