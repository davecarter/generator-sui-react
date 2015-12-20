# generator-sui-react

[![NPM Version][npm-image]][npm-url]

A yeoman generator for Schibsted User Interface (**sui**) ReactJS components. The purpose of this generator is intended for creating atomic or molecular components, never organisms. For more information about atomic design, read the following blog post: http://bradfrost.com/blog/post/atomic-web-design/.

## Features
The generator provides a basic structure to start developing a component, including coding standard rules, naming conventions and a unit testing suite.
* A basic structure for your component, prepared for npm publishing
* Automatic installation of all npm dependencies
* Linting rules for all `js`, `jsx`, `s(c|a)ss` and `css` files
* Support for ECMAScript2015
* Unit testing suite
* A local development environment with webpack
* Documentation folder
* Pre-commit rules for launching linting and tests before commiting changes in Github
* Common editor config rules

## Previous steps
Make sure Node.js is installed on your computer.

Install it from [nodejs.org/download](http://nodejs.org/download)

You have to install yeoman (http://yeoman.io/) first:
````
$ npm install -g yo
````

## Installation
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

[npm-image]: https://img.shields.io/npm/v/@schibstedspain/generator-sui-react.svg?style=flat
[npm-url]: https://npmjs.com/@schibstedspain/generator-sui-react
