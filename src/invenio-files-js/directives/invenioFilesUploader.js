/*
 * This file is part of Invenio.
 * Copyright (C) 2016-2019 CERN.
 *
 * Invenio is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

/**
  * @ngdoc directive
  * @name invenioFilesUplaoder
  * @description
  *    The invenio files uploader directive handler
  * @namespace invenioFilesUploader
  * @example
  *    Usage:
  *     <invenio-files-uploader
  *       method="PUT"
  *       endpoint="http://localhost:5000/files"
  *       extra-params='{"resumeChunkSize": 900000}'
  *     >
  *     </invenio-files-uploader>
  */
function invenioFilesUploader() {

  // Functions

  /**
    * Initialize uploader
    * @memberof invenioFilesUploader
    * @param {service} scope -  The scope of this element.
    * @param {service} element - Element that this direcive is assigned to.
    * @param {service} attrs - Attribute of this element.
    * @param {InvenioFilesCtrl} vm - Invenio uploader controller.
    */
  function link(scope, element, attrs, vm) {
    // Get the endpoints for schemas
    var endpoints = {
      initialization: attrs.initialization || undefined,
    };
    // Extra ``$http`` parameters
    var params = JSON.parse(attrs.extraParams || '{}');
    // Existing files to display
    var files = JSON.parse(attrs.files || '[]');
    // The endpoint links
    var links = JSON.parse(attrs.links || '[]');

    // Brodcast ready to initialization
    scope.$broadcast('invenio.uploader.init',
      params,
      endpoints,
      files,
      links
    );
  }

  ////////////

  return {
    restricted: 'AE',
    scope: false,
    controller: 'InvenioFilesCtrl',
    controllerAs: 'filesVM',
    link: link,
  };
}

angular.module('invenioFiles.directives')
  .directive('invenioFilesUploader', invenioFilesUploader);
