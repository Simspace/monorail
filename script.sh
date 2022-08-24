for f in ./packages/* ;
	do if [ -d "$f" ]; then
		echo $f
		cd "$f"

		if [[ $(node -p "require('./package.json').private") == true ]]; then
			cd ../../
			continue
		fi

		# Extract a few values from package.json
		NPM_PACKAGE_NAME=$(node -p "require('./package.json').name")
		NPM_PACKAGE_VERSION=$(node -p "require('./package.json').version")
		REPO_PACKAGE_VERSION=$(node ../../scripts/get-latest-published-version.js $NPM_PACKAGE_NAME)
		{
			echo "@monorail:registry=${CI_API_V4_URL}/projects/${CI_PROJECT_ID}/packages/npm/"
			echo "${CI_API_V4_URL#http*:}/projects/${CI_PROJECT_ID}/packages/npm/:_authToken=${CI_JOB_TOKEN}"
		} >> dist/.npmrc

		echo ".npmrc" >> dist/.npmignore
		echo "Created the following .npmrc:"
		cat dist/.npmrc

		if [[ ${REPO_PACKAGE_VERSION} != *"${NPM_PACKAGE_VERSION}"* ]]; then
			# cd dist && npm publish
			echo "Successfully published version ${NPM_PACKAGE_VERSION} of ${NPM_PACKAGE_NAME} to GitLab's NPM registry: ${CI_PROJECT_URL}/-/packages"
		else
			echo "Version ${NPM_PACKAGE_VERSION} of ${NPM_PACKAGE_NAME} has already been published, so no new version has been published."
		fi

		cd ../../
	fi
done