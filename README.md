# Household
Angular application displaying household availabilities, appliances and load curves for single- and faimlyhouseholds.
Demo available on [github pages](https://nitoloz.github.io/household).

## Task
* Attached to this you will find a JSON file called ‘hous_test.json’. This file contains information about household’s electrical load simulations results. 
* The information in the file should be sufficient to create the list view of the result and a details view looks like the attached picture (stored in `./assets`). You have the option to create the list view as you like.
* You are allowed to use Angular or AngularJS framework with whatever libraries you like.
* Your solution should contain a README file explaining what libraries are included and why as well as an introduction on how to run the project.    

## Libraries
This application uses Angular 8.2.3 together with Angular Material 8.2.3 as a components framework for tables, accordeons and few other elements. Charting is done using ngx-charts 13.0.1. Data is read from the provided JSON file stored in the `./assets` folder. 


## Development

### Local start
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
