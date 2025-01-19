# IMDB Automation - Ella T

## Install the dependencies

```npm Install```

## How to run tests

- Run launch.json from visual code

## How to Debug tests 

- Run ```npx wdio``` command in terminal

## Reports - How create Allure report?
-  Set path in PATH to installed java sdk
-  Run tests ```npm run tests:e2e```
-  Create report ```npm run report:generate```
-  Open report ```npm run report:open```

## Overview:
- Used POM design pattern, Typescript, WDIO to automate scenarios

- Scenarios:
- Navigate to IMDB
- Search Godfather
- Click on the first result
- Write the title and description of the movie to the console
- Verify that the stars contain "Marlon Brando" and rating is higher than 8.0