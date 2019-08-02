/*
 * This file is part of Invenio.
 * Copyright (C) 2016-2019 CERN.
 *
 * Invenio is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

angular.module('invenioFiles.controllers', []);
angular.module('invenioFiles.directives', []);
angular.module('invenioFiles.factories', []);
angular.module('invenioFiles.filters', []);
angular.module('invenioFiles.services', []);

// Setup everyhting
angular.module('invenioFiles', [
  'ngFileUpload',
  'invenioFiles.services',
  'invenioFiles.factories',
  'invenioFiles.filters',
  'invenioFiles.controllers',
  'invenioFiles.directives',
]);
