for f in ./packages/* ;
  do if [ -d "$f" ]; then
    cd "$f"

    if [[ $(node -p "require('./package.json').private") == true ]]; then
      cd ../../
      continue
    fi

    {
      echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}"
    } >> dist/.npmrc

    echo ".npmrc" >> dist/.npmignore
    echo "Created the following .npmrc:"
    cat dist/.npmrc

    # Extract a few values from package.json
    NPM_PACKAGE_NAME=$(node -p "require('./package.json').name")
    NPM_PACKAGE_VERSION=$(node -p "require('./package.json').version")
    REPO_PACKAGE_VERSION=$(node ../../scripts/get-latest-published-version.js $NPM_PACKAGE_NAME)

    if [[ ${REPO_PACKAGE_VERSION} != *"${NPM_PACKAGE_VERSION}"* ]]; then
      cd dist && npm publish
      echo "Successfully published version ${NPM_PACKAGE_VERSION} of ${NPM_PACKAGE_NAME} to the public NPM registry"
    else
      echo "Version ${NPM_PACKAGE_VERSION} of ${NPM_PACKAGE_NAME} has already been published, so no new version has been published."
    fi

    cd ../../
  fi
done
