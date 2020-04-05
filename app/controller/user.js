'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async info() {
    const { ctx } = this;
    ctx.body = {
      name: `hello ${ctx.params.id}`,
    };

  }
  async addName() {
    const { ctx } = this;
    const userInfo = await ctx.service.user.addName(201215121);
    ctx.body = userInfo;

  }
  async getName() {
    const { ctx } = this;
    const query = ctx.query;
    console.log(query);
    const type = await ctx.service.user.getName(query);
    ctx.body = type;
  }
  async test() {
    const { ctx } = this;
    const content = ctx.request.body;
    ctx.body = content;
  }
}


module.exports = UserController;
