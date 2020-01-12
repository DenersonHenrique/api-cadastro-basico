const StringUtils = require("../../domain/utils/stringUtils");

'use strict';

class ErroException {
    /** Constructor */
  constructor(message){ 
    this.message = message || StringUtils.httpStatusCodeMessage.error_exception_message_default;
  } 
}

module.exports = ErroException;