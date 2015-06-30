var generators = require('yeoman-generator');
var pascalCase = require('pascal-case');
var dasherize = require('underscore.string').dasherize;

module.exports = generators.NamedBase.extend();

module.exports = generators.Base.extend({
  prompting: function () {
    var done = this.async();

    this.prompt([{
      type    : 'input',
      name    : 'name',
      message : 'What is your component name ( ex.: "your-component-name" )',
      default : this.appname // Default to current folder name
    },
    {
      type    : 'input',
      name    : 'prefix',
      message : 'Set a prefix for your component',
      default : 'sui-'
    },
    {
      type    : 'input',
      name    : 'github_url',
      message : 'What is your component remote github repository url',
      required : true
    }], function (answers) {
      var prefix = answers.prefix.replace('-', '');
      this.component_name = answers.name.match( prefix + '-?' ) != null
                          ? dasherize(answers.name)
                          : dasherize(answers.prefix + '-' + answers.name);
      this.pascal_name = pascalCase(this.component_name.replace( answers.prefix, '' ));
      this.github_url = answers.github_url;
      done();
    }.bind(this));
  },
  writing: function () {
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      { 
        component_name: this.component_name,
        github_url: this.github_url
      }
    );

    this.fs.copyTpl(
      this.templatePath('_karma.conf.js'),
      this.destinationPath('karma.conf.js'));

    this.fs.copyTpl(
      this.templatePath('_webpack.config.js'),
      this.destinationPath('webpack.config.js'));

    this.fs.copyTpl(
      this.templatePath('_webpack.doc.config.js'),
      this.destinationPath('webpack.doc.config.js'));

    this.fs.copyTpl(
      this.templatePath('test/_test.js'),
      this.destinationPath('test/' + this.component_name + '-test.js'),
      { 
        component_name: this.component_name,
        pascal_name: this.pascal_name 
      }
    );

    this.fs.copyTpl(
      this.templatePath('src/component/_index.jsx'),
      this.destinationPath('src/' + this.component_name + '/index.jsx'),
      { 
        component_name: this.component_name,
        pascal_name: this.pascal_name 
      }
    );

    this.fs.copyTpl(
      this.templatePath('src/component/_component.scss'),
      this.destinationPath('src/' + this.component_name + '/' + this.component_name + '.scss'),
      { 
        component_name: this.component_name,
        pascal_name: this.pascal_name 
      }
    );

    this.fs.copyTpl(
      this.templatePath('src/_index.jsx'),
      this.destinationPath('src/index.jsx'),
      { 
        component_name: this.component_name,
        pascal_name: this.pascal_name 
      }
    );

    this.fs.copyTpl(
      this.templatePath('src/_index.scss'),
      this.destinationPath('src/index.scss'),
      { component_name: this.component_name }
    );

    this.fs.copyTpl(
      this.templatePath('docs/_index.html'),
      this.destinationPath('docs/index.html'),
      { component_name: this.component_name }
    );

    this.fs.copyTpl(
      this.templatePath('docs/_index.jsx'),
      this.destinationPath('docs/index.jsx'),
      { 
        component_name: this.component_name,
        pascal_name: this.pascal_name 
      }
    );

    this.fs.copyTpl(
      this.templatePath('_gitignore'),
      this.destinationPath('.gitignore'));
    
    this.fs.copyTpl(
      this.templatePath('_npmignore'),
      this.destinationPath('.npmignore'));

  },
  installing: function(){
    this.spawnCommand('git', ['init']).on('close', function(){
      this.spawnCommand('git', ['remote', 'add', 'origin', this.github_url]);
    }.bind(this));
    this.npmInstall();
  }
});
