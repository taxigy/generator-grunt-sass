'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function() {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the sensational ' + chalk.red('GruntSass') + ' generator!'
    ));

    var prompts = [];

    this.prompt(prompts, function(props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    app: function() {
      this.fs.copy(
        this.templatePath('_package.json'),
        this.destinationPath('package.json')
      );

      this.fs.copy(
        this.templatePath('_bower.json'),
        this.destinationPath('bower.json')
      );

      this.fs.copy(
        this.templatePath('Gruntfile.js'),
        this.destinationPath('Gruntfile.js')
      );

      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      );

      this.directory('src', 'src');
      this.directory('dist', 'dist');
    },

    projectfiles: function() {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );

      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );
    }
  },

  install: function() {
    this.installDependencies();
  }
});

