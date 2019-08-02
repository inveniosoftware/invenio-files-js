/*
 * This file is part of Invenio.
 * Copyright (C) 2016-2019 CERN.
 *
 * Invenio is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

/**
  * @ngdoc directive
  * @name invenioFilesUploadZone
  * @description
  *    The invenio files upload directive handler
  * @namespace invenioSearch
  * @example
  *    Usage:
  *     <invenio-files-upload-zone
  *      template="/src/invenio-files-js/templates/upload.html"
  *     ></invenio-files-upload-zone>
  */
function invenioFilesUploadZone() {

  /**
    * Choose template for upload button
    * @memberof invenioFilesUploadZone
    * @param {service} element - Element that this direcive is assigned to.
    * @param {service} attrs - Attribute of this element.
    * @example
    *    Minimal template `template.html` usage
    *     <button  class="btn btn-primary"
    *       ngf-max-size="20GB" ngf-multiple="true"
    *       ngf-keep="'distinct'"
    *       ngf-select="vm.addFiles($files)"
    *     >
    *       Click to select
    *     </button>
    */
  function templateUrl(element, attrs) {
    return attrs.template;
  }

  ////////////

  return {
    restricted: 'AE',
    require: '^invenioFilesUploader',
    scope: false,
    templateUrl: templateUrl,
  };
}

angular.module('invenioFiles.directives')
  .directive('invenioFilesUploadZone', invenioFilesUploadZone);
