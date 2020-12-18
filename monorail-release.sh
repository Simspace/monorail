#!/bin/bash

##################################################################################
#                                                                                #
#      __       __                                                   __  __      #
#     /  \     /  |                                                 /  |/  |     #
#     $$  \   /$$ |  ______   _______    ______    ______   ______  $$/ $$ |     #
#     $$$  \ /$$$ | /      \ /       \  /      \  /      \ /      \ /  |$$ |     #
#     $$$$  /$$$$ |/$$$$$$  |$$$$$$$  |/$$$$$$  |/$$$$$$  |$$$$$$  |$$ |$$ |     #
#     $$ $$ $$/$$ |$$ |  $$ |$$ |  $$ |$$ |  $$ |$$ |  $$/ /    $$ |$$ |$$ |     #
#     $$ |$$$/ $$ |$$ \__$$ |$$ |  $$ |$$ \__$$ |$$ |     /$$$$$$$ |$$ |$$ |     #
#     $$ | $/  $$ |$$    $$/ $$ |  $$ |$$    $$/ $$ |     $$    $$ |$$ |$$ |     #
#     $$/      $$/  $$$$$$/  $$/   $$/  $$$$$$/  $$/       $$$$$$$/ $$/ $$/      #
#                                                                                #
#                                                                                #
#              This script should theoretically release 🚝 Monorail              #
#                                                                                #
##################################################################################

# if any of the following fails, the script fails
# set -e

start () {
	echo -e "\n\nThis utility will cut a release of the 🚝 Monorail package via the steps outlined here: \nhttps://wiki.simspace.com/display/DES/Monorail+Release+Instructions\n"
    read -p "Proceed? (Y/N): " resp
	# TODO - make this shit better
	if [ "$resp" = 'y' -o "$resp" = 'Y' ] ; then
		echo -e "Release initiated\n"
	else
		echo -e "\nRelease cancelled by user\n"
		exit 1
	fi
}

input_version () {
	current_version=`sed -n '/version.* /s/^.*[^0-9]\([0-9]*\.[0-9]*\.[0-9]*\).*$/\1/p' package.json`
	echo "The current version of 🚝 Monorail:" $current_version
    read -p "Enter new Monorail version number: " version_number
    read -p "Enter new Monorail release name: " release_name
    echo -e "\n\nCutting release for: \"Monorail Release v$version_number  - '$release_name'\"\n"
}

# Portal Repo: checkout `dev` branch and pull
update_portal_dev () {
	# (git checkout dev) || (echo -e "\nCommand 'git checkout dev' failed" && exit 1)
	git checkout dev
	git reset --hard origin/dev
	git pull
}

# Portal Repo: bump package.json monorail version number and post a PR
bump_version () {
	sed -i '' 's/"version": ".*",/"version": "'$version_number'",/g' package.json
	git status
}

version_bump_pr () {
	git checkout -b ux/bump-monorail-version-v$version_number
	git commit -am "Bump Monorail Version Number to v$version_number"
	git push --set-upstream origin ux/bump-monorail-version-v$version_number

	

	# Automatically create PR for ux/bump-monorail-version-v$version_number
	echo -e "\n\nIn order to automate the creation of a PR, this script will install 'hub', GitHub's extension to command-line git"
	echo "Create PR automatically (including installing 'hub')? (y/n)"
    read resp
	# TODO - make this shit better
	if [ "$resp" = 'y' -o "$resp" = 'Y' ] ; then
		# TODO: Don't install hub if already installed
		brew install hub
		hub pull-request --browse -m "Bump Monorail Version Number to v$version_number" -r "Simspace/ux"
		echo "PR complete"
	else
		# Manually create PR for ux/bump-monorail-version-v$version_number
		echo "Manually create PR for ux/bump-monorail-version-v$version_number"
		echo "I created a PR (y/n)"
		read resp
		# TODO - make this shit better
		if [ "$resp" = 'y' -o "$resp" = 'Y' ] ; then
			echo "Version bump PR complete"
		else
			echo "Version bump PR cancelled by user"
			exit 1
		fi
	fi
}


copy_to_monorail () {
	# Portal Repo: once PR is merged, checkout and pull dev
	git checkout dev
	git pull

	# TODO: change this to not replicate bump_version
	sed -i '' 's/"version": ".*",/"version": "'$version_number'",/g' package.json

	# Check if monorial repo is at the same base directory as the portal repo
	echo -e "\n\nThis utility will only work if your monorail repo is at the same base directory as the portal repo\n"
	# TODO: Remove `cd`
	cd ../../../../monorail/
	pwd
	echo -e "\nIs the directory listed above the Monorail repo? (y/n)"
    read resp
	# TODO - make this shit better
	if [ "$resp" = 'y' -o "$resp" = 'Y' ] ; then
		# Monorail Repo: pull master
		git checkout master
        git pull
		# Monorail Repo: checkout new branch named [initials]/update-release-week-[##]
		git checkout -b ux/monorail-release-v$version_number
		# Monorail Repo: delete contents of monorail repo folder (except for the .git folder)
		find ../monorail -mindepth 1 -name .git -prune -o -exec rm -rf {} +
		# Portal Repo: Copy CONTENTS of portal/client/packages/monorail # Monorail Repo: paste in contents of portal/client/packages/monorail
		cp -a ../portal/client/packages/monorail/. ../monorail/
		echo "Copy complete"
	else
		echo "Copy cancelled by user"
		exit 1
	fi
}

build_and_push () {
	# Monorail Repo: yarn build
	yarn build

	# Monorail Repo: commit and push "Update Monorail Week [##] Release - '[Release Name]'"
	git add .
	git commit -m"Monorail Release v$version_number  - '$release_name'"
	git push --set-upstream origin ux/monorail-release-v$version_number

	# Automatically create PR for ux/bump-monorail-version-v$version_number
	echo -e "\n\nIn order to automate the creation of a PR, this script will install 'hub', GitHub's extension to command-line git"
	echo "Create PR automatically (including installing 'hub')? (y/n)"
    read resp
	# TODO - make this shit better
	if [ "$resp" = 'y' -o "$resp" = 'Y' ] ; then
		# TODO: Don't install hub if already installed
		brew install hub
		hub pull-request --browse -m "Monorail Release v$version_number  - '$release_name'" -r "Simspace/ux"
		echo "PR complete"
	else
		# Monorail Repo: Manually create PR for ux/bump-monorail-version-v$version_number
		echo "Manually create PR for ux/monorail-release-v$version_number"
		echo "I created a PR (y/n)"
		read resp
		# TODO - make this shit better
		if [ "$resp" = 'y' -o "$resp" = 'Y' ] ; then
			echo "Monorail update PR complete"
		else
			echo "Monorail update PR cancelled by user"
			exit 1
		fi
	fi
}

github_release () {
	# Monorail Repo: In PR description add the release notes (https://docs.google.com/document/d/11Exi783CqAl7zqgnz8g7wbE41c7k4h0Gd2Y7ITzUPWg/edit?usp=sharing)
	echo -e "\n\nIn PR description add the release notes: \n\nhttps://docs.google.com/document/d/11Exi783CqAl7zqgnz8g7wbE41c7k4h0Gd2Y7ITzUPWg/edit?usp=sharing\n"
	echo "PR Merged? (y/n)"
    read resp
	# TODO - make this shit better
	if [ "$resp" = 'y' -o "$resp" = 'Y' ] ; then
		# Monorail Repo: In GitHub, under releases, Click draft a release and add the release notes
		hub release create -od -m "Monorail Release v$version_number  - '$release_name'" v$version_number
		echo "GitHub release complete"
	else
		echo "GitHub release cancelled by user"
		exit 1
	fi

	echo "In GitHub, under releases, Click draft a release and add the release notes"
}

npm_publish () {
	# Monorail Repo: npm publish
	echo -e "\n\nTo publish to npm you must be a collaborator on https://www.npmjs.com/package/@simspace/monorail"
	echo "Are you? (y/n)"
    read resp
	# TODO - make this shit better
	if [ "$resp" = 'y' -o "$resp" = 'Y' ] ; then
		npm publish
		echo "npm publish complete"
	else
		echo "npm publish cancelled by user"
		exit 1
	fi
}

start
input_version
update_portal_dev
bump_version
version_bump_pr
copy_to_monorail
build_and_push
github_release
npm_publish

time=`date +"%Y-%m-%d_%T"`

echo "SUCCESS!"
echo "Monorail Release v$version_number  - '$release_name'"
echo "Release complete: $time"

# Terminate our shell script with success message
exit 0
