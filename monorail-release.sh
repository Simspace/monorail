#!/bin/bash
#
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
#                This script should allegedly release Monorail...                #
#                                                                                #
##################################################################################
                                                                      

# Portal Repo: checkout `dev`
bump_version () {
    echo "This utility will bump the Monorail version number in the portal repo"
	echo "Proceed? (y/n)"
    read resp
	# TODO - make this shit better
	if [ "$resp" = 'y' -o "$resp" = 'Y' ] ; then
		git checkout dev
        git pull
		echo "Pull complete"
	else
		echo "Pull cancelled by user"
		return 1
	fi
}

input_version () {
    echo "Enter the new Monorail version number: "
    read version
    echo "Version: v$version"
}

# Portal Repo: bump package.json monorail version number and post a PR
replace_version () {
	sed -i '' 's/"version": ".*",/"version": "'$version'",/g' package.json
	git checkout -b ux/bump-monorail-version-number-v$version
	git commit -am "Bump Monorail Version Number to v$version"
	# TODO: uncomment for release
	# git push --set-upstream origin ux/bump-monorail-version-number-v$version
	# END TODO

	# TODO: remove (here for dev convinience)
	git checkout dev
	git branch -D ux/bump-monorail-version-number-v$version
	# END TODO
}


copy_to_monorail () {
	# Portal Repo: once PR is merged, checkout and pull dev
	git checkout dev
	git pull

	# Check if monorial repo is at the same base directory as the portal repo
	echo "This utility will only work if your monorail repo is at the same base directory as the portal repo"
	cd ../../../../monorail/
	pwd
	echo "Is the directory listed above the monorail repo? (y/n)"
    read resp
	# TODO - make this shit better
	if [ "$resp" = 'y' -o "$resp" = 'Y' ] ; then
	# Monorail Repo: checkout new branch named [initials]/update-release-week-[##]
		git checkout dev
        git pull
		echo "Pull complete"
	else
		echo "Pull cancelled by user"
		return 1
	fi
	# Monorail Repo: pull master
	
}


# Portal Repo: Copy CONTENTS of portal/client/packages/monorail
# Monorail Repo: delete contents of monorail repo folder (except for the .git folder)
# Monorail Repo: paste in contents of portal/client/packages/monorail
# Monorail Repo: yarn build
# Monorail Repo: commit and push "Update Monorail Week [##] Release - '[Release Name]'"
# Monorail Repo: Create a PR for [initials]/update-release-week-[##]
# Monorail Repo: In PR description add the release notes (https://docs.google.com/document/d/11Exi783CqAl7zqgnz8g7wbE41c7k4h0Gd2Y7ITzUPWg/edit?usp=sharing)
# Monorail Repo: In GitHub, under releases, Click draft a release and add the release notes
# Monorail Repo: npm publish

bump_version
input_version
replace_version
copy_to_monorail

TIME=`date +"%Y-%m-%d_%T"`


# TODO: remove (here for dev convinience)
# git stash
# git checkout sj/monorail-release-script

# Terminate our shell script with success message
exit 0
