/*
 * This file is part of Invenio.
 * Copyright (C) 2016-2019 CERN.
 *
 * Invenio is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

/**
  * @ngdoc service
  * @name InvenioFilesAPI
  * @namespace InvenioFilesAPI
  * @param {service} $http - Angular http requests service.
  * @param {service} Upload - The upload factory.
  * @description
  *     Call the files api
  */
function InvenioFilesAPI($http, Upload) {

  /**
    * Start upload
    * @memberof InvenioFilesAPI
    * @param {object} args - The upload parameters.
    * @param {boolean} multipartUpload - If the upload is multipart.
    */
  function upload(args, multipartUpload) {
    if (multipartUpload) {
      return Upload.upload(args);
    }
      return Upload.http(args);
  }

  /**
    * Make an $http request
    * @memberof InvenioFilesAPI
    * @param {object} args - The request parameters.
    */
  function request(args) {
    return $http(args);
  }

  ////////////

  return {
    request: request,
    upload: upload
  };
}

InvenioFilesAPI.$inject = [
  '$http',
  'Upload'
];

angular.module('invenioFiles.services')
  .service('InvenioFilesAPI', InvenioFilesAPI);
