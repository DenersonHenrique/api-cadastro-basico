// const StringUtils = require("../../domain/utils/stringUtils");

'use strict';

class NotFoundException {
    /** Constructor */
  constructor(message){ 
    this.message = message || 'Not Found';
  } 
}

module.exports = NotFoundException;