import config, {timeoutDef} from '../Config/AppSetting';
import _ from 'lodash';
import { Platform } from 'react-native';

  _fetch(opts) {
    opts = _.extend({
      method: 'GET',
      url: null,
      body: null,
      callback: null
    }, opts);

    var reqOpts = {
      method: opts.method,
      headers: {
        'X-Parse-Application-Id': this._applicationId,
        'X-Parse-REST-API-Key': this._restAPIKey
      }
    };
    if (this._sessionToken) {
      reqOpts.headers['X-Parse-Session-Token'] = this._sessionToken;
    }

    if (this._masterKey) {
      reqOpts.headers['X-Parse-Master-Key'] = this.masterKey;
    }

    if (opts.method === 'POST' || opts.method === 'PUT') {
      reqOpts.headers['Accept'] = 'application/json';
      reqOpts.headers['Content-Type'] = 'application/json';
    }

    if (opts.body) {
      reqOpts.body = JSON.stringify(opts.body);
    }

    if (opts.timeout) {
      return this._timeoutPromise(opts.timeout, fetch(this.API_BASE_URL + opts.url, reqOpts));
    }

    return fetch(this.API_BASE_URL + opts.url, reqOpts);
  }

  _timeoutPromise(milisecond, promise) {
    return new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        reject(new Error("promise timeout"))
      }, milisecond);
      promise.then(
        (res) => {
          clearTimeout(timeoutId);
          resolve(res);
        },
        (err) => {
          clearTimeout(timeoutId);
          reject(err);
        }
      );
    })
  }
};
