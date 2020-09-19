/*
 * This file is part of Invenio.
 * Copyright (C) 2016-2019 CERN.
 *
 * Invenio is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

/**
  * @ngdoc filter
  * @name bytesToHumanReadable
  * @namespace bytesToHumanReadable
  * @description
  *     Filter to dispaly bits in human readable format
  */
function bytesToHumanReadable() {

  function filter(size) {
    function round(num, precision) {
      return Math.round(
        num * Math.pow(10, precision)) / Math.pow(10, precision
      );
    }
    var limit = Math.pow(1024, 4);
    if (size > limit) {
      return round(size / limit, 1) + ' Tb';
    } else if (size > (limit/=1024)) {
      return round(size / limit, 1) + ' Gb';
    } else if (size > (limit/=1024)) {
      return round(size / limit, 1) + ' Mb';
    } else if (size > 1024) {
      return Math.round(size / 1024) +  ' Kb';
    }
    return size + ' B';
  }

  ////////////

  return filter;
}

angular.module('invenioFiles.filters')
  .filter('bytesToHumanReadable', bytesToHumanReadable);
