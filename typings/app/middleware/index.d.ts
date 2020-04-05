// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportParams = require('../../../app/middleware/params');

declare module 'egg' {
  interface IMiddleware {
    params: typeof ExportParams;
  }
}
