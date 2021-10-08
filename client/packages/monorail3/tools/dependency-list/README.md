# dependency-list

NOTE: This is currently built specifically to analyze `@mui/material`, but I'm hoping to generalize it in the future.

## Usage

1. Run `yarn install` inside this folder

2. Clone or copy the package you would like to analyze (for example `gh repo clone mui-org/material-ui to_analyze`)

   - It is recommended to clone the repo into the `to_analyze` folder, as the `.gitignore` is set up to ignore it

3. Run `yarn generate to_analyze/packages/mui-material/src` (or the path to the directory you would like to analyze)

4. Reports are generated in `dependency-list-output` folder
