'use strict';

module.exports = options => {
  return async function params(ctx, next) {
    console.log(options);
    ctx.params = {
      ...ctx.query,
      ...ctx.request.body,
    };
    await next();
  };

};
