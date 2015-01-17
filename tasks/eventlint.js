/*
 * grunt-eventlint
 * https://github.com/mdcone/grunt-eventlint
 *
 * Copyright (c) 2015 Michael Dylan Cone
 * Licensed under the MIT license.
 */

'use strict';

var eventlint = require('eventlint');

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('eventlint', 'A grunt plugin for the eventlint node module', function () {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      extension: '\.js(x?)$',
      path: './',
      exclude: ''
    });

    eventlint.init({
      exclude: 'test2'
    });

    eventlint.lint('./lib','\.js(x?)$', function (obj) {
      var output = obj.file + ': ';
      if (obj.type === 'emit') {
        output += 'No listener found for emitted event: ';
      } else {
        output += 'Listener found for non-existing event: ';
      }

      output += obj.handle;

      grunt.debug.log(output);
    });


  });

};
