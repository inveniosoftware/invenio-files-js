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
