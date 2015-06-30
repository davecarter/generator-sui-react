# generator-sui-react
A yeoman generator for Schibsted User Interface (**sui**) ReactJS components. The purpose of this generator is intended for atomic or molecular components, never organisms. For more information about atomic design, read the following blog post: http://bradfrost.com/blog/post/atomic-web-design/. 

## Features
The generator provides a basic structure to start developing a component, including coding standard rules, naming conventions and a unit testing environment. 
* A basic structure for your component, prepared for npm publishing
* Automatic installation of all npm dependencies
* Linting rules for all ```js```, ```jsx```and ```css```files
* Support for ECMAScript 6
* Unit tests environment
* A local development environment with webpack
* Documentation folder
* Pre-commit rules for launching linting and tests before commiting changes in Github
* Common editor config rules

## Previous steps
You have to install yeoman (http://yeoman.io/) first:
````
$ npm install -g yo
````

## Installation
First of all, you must have acces to the Schibsted private npm repository. If you don't have access, ask for it to your domain expert or team leader. 
For loging in, just type ```npm-login```in your CLI and log in as schibstedspain for accesing our private npm repository. Then, do:
```
$ npm install -g @schibstedspain/generator-sui-react
```

## Create your first package
Create a folder for your component in the desired path with:
```
$ mkdir your-component-name
```
Launch the generator by typing:
```
$ yo @schibstedspain/sui-react
```
You will be prompted about the component name, the prefix you want to use and the Github repository url (which you should be created already), and that's it!
## Commands allowed
```
// Start webpack with hot reloading and open a browser window
$ npm run dev 

// Launch the tests suite once
$ npm test

// Run the test suite in TDD mode, watching for changes in background
$ npm run test:watch

// Run the linting tools
$ npm run lint

// Builds the component for production
$ npm run build 
```
