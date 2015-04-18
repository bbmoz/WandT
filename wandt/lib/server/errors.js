Errors = {
  ServiceException: function (method, error, apiString, params) {
    this.name = 'ServiceException';
    this.method = method;
    this.errorMsg = error;
    this.apiString = apiString;
    this.params = params;
  }
};

Errors.ServiceException.prototype.toString = function () {
  return this.name + ' ==> ' + this.method + ' was called with ' + this.apiString + ' [' + this.params + ']. ' +
    'Error ==> ' + this.errorMsg;
};
