var generators = require('yeoman-generator');
var pascalCase = require('pascal-case');

module.exports = generators.NamedBase.extend();

module.exports = generators.Base.extend({
  prompting: function () {
    var done = this.async();

    this.prompt({
      type    : 'input',
      name    : 'name',
      message : 'What is your component name',
      default : this.appname // Default to current folder name
    }, function (answers) {
      this.component_name = 'rc-' + pascalCase(answers.name);
      this.pascal_name = pascalCase(answers.name);
      done();
    }.bind(this));
  },
  writing: function () {
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      { component_name: this.component_name,
        pascal_name: this.pascal_name }
    );

    this.fs.copyTpl(
      this.templatePath('_karma.conf.js'),
      this.destinationPath('karma.conf.js'),
      { component_name: this.pascal_name }
    );

    this.fs.copyTpl(
      this.templatePath('test/_test.js'),
      this.destinationPath('test/' + this.pascal_name + '_test.js'),
      { component_name: this.pascal_name }
    );

    this.fs.copyTpl(
      this.templatePath('src/_component.js'),
      this.destinationPath('src/' + this.pascal_name + '.js'),
      { component_name: this.pascal_name }
    );

    this.fs.copyTpl(
      this.templatePath('src/_component.scss'),
      this.destinationPath('src/' + this.pascal_name + '.scss')
    );

    this.fs.copyTpl(
      this.templatePath('docs/_index.html'),
      this.destinationPath('docs/index.html'),
      { component_name: this.pascal_name }
    );

    this.fs.copyTpl(
      this.templatePath('docs/_index.js'),
      this.destinationPath('docs/index.js'),
      { component_name: this.pascal_name }
    );

    this.fs.copyTpl(
      this.templatePath('_test.webpack.js'),
      this.destinationPath('test.webpack.js'));

    this.fs.copyTpl(
      this.templatePath('_webpack.config.js'),
      this.destinationPath('webpack.config.js'));

    this.fs.copyTpl(
      this.templatePath('_gitignore'),
      this.destinationPath('.gitignore'));
    
    this.fs.copyTpl(
      this.templatePath('_npmignore'),
      this.destinationPath('.npmignore'));

  },
  installing: function(){
    this.npmInstall();
  }
});