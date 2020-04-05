'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async addName(name) {
    let user = `你好，${name}`;
    const dig = await this.app.mysql.get('Student', { Sno: name });
    user = user + JSON.stringify(dig);
    console.log(user);

    return user;
  }
  async getName(type) {
    const ltype = `${type.id}+ ${type.log}`;
    return ltype;
  }
}

module.exports = UserService;
