var generators = require('yeoman-generator');

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
      this.appName = answers.name;
      this.log(this.appName);
      done();
    }.bind(this));
  },
  writing: function () {
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      { appName: this.appName }
    );
  },
  installing: function(){
    this.npmInstall();
  }
});