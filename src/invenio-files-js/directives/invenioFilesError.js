/*
 * This file is part of Invenio.
 * Copyright (C) 2016-2019 CERN.
 *
 * Invenio is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

/**
  * @ngdoc directive
  * @name invenioFilesError
  * @description
  *    The invenio files error directive handler
  * @namespace invenioFilesError
  * @example
  *    Usage:
  *      <invenio-files-error
  *        template="/src/invenio-files-js/templates/error.html"
  *       ></invenio-files-error>
  */
function invenioFilesError() {

  /**
    * Initialize uploader
    * @memberof invenioFilesError
    * @param {service} scope -  The scope of this element.
    * @param {service} element - Element that this direcive is assigned to.
    * @param {service} attrs - Attribute of this element.
    * @param {InvenioFilesCtrl} vm - Invenio uploader controller.
    */
  function link(scope, element, attrs, vm) {
    scope.errorMessage = attrs.errorMessage || 'Error';
  }

  /**
    * Choose template for error messages
    * @memberof invenioFilesError
    * @param {service} element - Element that this direcive is assigned to.
    * @param {service} attrs - Attribute of this element.
    * @example
    *    Minimal template `template.html` usage
    *      {{ vm.invenioFilesError.data.message }}
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
    link: link,
  };
}

angular.module('invenioFiles.directives')
  .directive('invenioFilesError', invenioFilesError);
