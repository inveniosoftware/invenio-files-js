/*
 * This file is part of Invenio.
 * Copyright (C) 2016-2019 CERN.
 *
 * Invenio is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License as
 * published by the Free Software Foundation; either version 2 of the
 * License, or (at your option) any later version.
 *
 * Invenio is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Invenio; if not, write to the Free Software Foundation, Inc.,
 * 59 Temple Place, Suite 330, Boston, MA 02111-1307, USA.
 *
 * In applying this license, CERN does not
 * waive the privileges and immunities granted to it by virtue of its status
 * as an Intergovernmental Organization or submit itself to any jurisdiction.
 */

var gulp = require('gulp');
var del = require('del');
var fs = require('fs');
var KarmaServer = require('karma').Server;
var path = require('path');
var plugins = require('gulp-load-plugins')();

/**
 * File patterns
 **/

// Root directory
var rootDirectory = path.resolve('./');

// Source directory for build process
var sourceDirectory = path.join(rootDirectory, './src');

var sourceFiles = [
  // Make sure module files are handled first
  path.join(sourceDirectory, '/*.js'),

  // Then add all JavaScript files
  path.join(sourceDirectory, '/**/*.js'),
];

var templates = [path.join(sourceDirectory, '/**/templates/**/*.html')];

// Get licenses
var licences = {
  javascript: fs.readFileSync(path.join(rootDirectory, '.license'), 'utf8')
};

var lintFiles = [
  'gulpfile.js',
  // Karma configuration
  'karma-*.conf.js'
].concat(sourceFiles);

/**
 * Clean tasks
 */

// Clean build directory if exists
gulp.task('clean.build', function() {
  return del(['build']);
});

/**
 * Build
 */

// build the javascript files
gulp.task('build.src', function() {
  return gulp
    .src(sourceFiles)
    .pipe(plugins.plumber())
    .pipe(plugins.concat('invenio-files-js.js'))
    .pipe(plugins.stripComments())
    .pipe(plugins.header(licences.javascript))
    .pipe(gulp.dest('./dist/'))
    .pipe(plugins.uglify())
    .pipe(plugins.rename('invenio-files-js.min.js'))
    .pipe(plugins.header(licences.javascript))
    .pipe(gulp.dest('./dist'));
});

// move the templates to dist
gulp.task('build.templates', function() {
  return gulp
    .src(templates)
    .pipe(plugins.flatten())
    .pipe(gulp.dest('./dist/templates'));
});

// run all the build tasks
gulp.task(
  'build',
  gulp.series('clean.build', 'build.src', 'build.templates', function(done) {
    done();
  })
);

/**
 * Tests
 */

// check jshint
gulp.task('test.jshint', function() {
  return gulp
    .src(lintFiles)
    .pipe(plugins.plumber())
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('jshint-stylish'))
    .pipe(plugins.jshint.reporter('fail'));
});

// test sources
gulp.task('test.src', function(done) {
  new KarmaServer(
    {
      configFile: __dirname + '/karma-src.conf.js',
      singleRun: true
    },
    done
  ).start();
});

// coveralls
gulp.task('coveralls', function() {
  return gulp.src('coverage/**/lcov.info').pipe(plugins.coveralls());
});

// Run test once and exit
gulp.task(
  'test',
  gulp.series('test.jshint', 'test.src', function(done) {
    done();
  })
);

/**
 * Demo
 */

// run the demo
gulp.task('demo.run', function() {
  gulp.src(rootDirectory).pipe(
    plugins.webserver({
      livereload: true,
      open: '/examples/index.html'
    })
  );
});

// run build and then the demo
gulp.task(
  'demo',
  gulp.series('build', 'demo.run', function(done) {
    done();
  })
);

/**
 * Watch
 */

gulp.task('watch', function() {
  // Watch JavaScript files
  gulp.watch(sourceFiles, ['test']);
});

/**
 * Default tasks
 */

gulp.task(
  'default',
  gulp.series('test', 'watch', function(done) {
    done();
  })
);
