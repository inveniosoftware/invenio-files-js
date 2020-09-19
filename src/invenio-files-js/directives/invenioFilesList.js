/*
 * This file is part of Invenio.
 * Copyright (C) 2016-2019 CERN.
 *
 * Invenio is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

/**
  * @ngdoc directive
  * @name invenioFilesList
  * @description
  *    The invenio files list directive handler
  * @namespace invenioFilesList
  * @example
  *    Usage:
  *    <invenio-files-list
  *      template="/src/invenio-files-js/templates/list.html"
  *    ></invenio-files-list>
  */
function invenioFilesList() {

  /**
    * Choose template for error messages
    * @memberof invenioFilesError
    * @param {service} element - Element that this direcive is assigned to.
    * @param {service} attrs - Attribute of this element.
    * @example
    *    Minimal template `template.html` usage
    *   <div class="sel-file" ng-repeat="f in vm.files | filter:fileSearch">
    *    {{ f.name }}
    *    </div>
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
  .directive('invenioFilesList', invenioFilesList);
