/*
 * This file is part of Invenio.
 * Copyright (C) 2016-2019 CERN.
 *
 * Invenio is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */
'use strict';

describe('Unit: testing dependencies', function() {

  var module;
  var dependencies;
  dependencies = [];

  var hasModule = function(module) {
    return dependencies.indexOf(module) >= 0;
  };

  beforeEach(function() {
    // Get module
    module = angular.module('invenioFiles');
    dependencies = module.requires;
  });

  it('should load directives module', function() {
    expect(hasModule('invenioFiles.directives')).to.be.ok;
  });

  it('should load controllers module', function() {
    expect(hasModule('invenioFiles.controllers')).to.be.ok;
  });

  it('should load services module', function() {
    expect(hasModule('invenioFiles.services')).to.be.ok;
  });

  it('should load filters module', function() {
    expect(hasModule('invenioFiles.filters')).to.be.ok;
  });

  it('should load factories module', function() {
    expect(hasModule('invenioFiles.factories')).to.be.ok;
  });

});
