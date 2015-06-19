# generator-sui-react
A yeoman generator for Schibsted ReactJS components

## Previous steps
Assuming you have node and npm installed, make sure you also have yeoman installed by typing:
````
$ yo
````
If the system doesn't recognize the command, install it by typing (http://yeoman.io/):
````
$ npm install -g yo
````

## Installation
Type ```npm-login```in your CLI and log in as schibstedspain for accesing our private npm repository. Then, do:
```
$ npm install -g @schibstedspain/generator-sui-react
```

## Create your first package
Create a folder for your component in the desired path with:
```
$ mkdir sui-your-component-name // we use 'sui-' as a preffix for all the ReactJS components
```
Launch the generator by typing:
```
$ yo @schibstedspain/sui-react
```
You will be prompted about the component name and the github repository url (which you should be created already), and that's it! To test everything works, just type:
````
$ npm run dev
```
