/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    security: {
      csrf: {
        enable: false,
      },
      domainWhiteList: [ 'localhost' ], // 配置白名单
    },
  };
  config.cors = {
    // origin: '*',//允许所有跨域访问，注释掉则允许上面 白名单 访问
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1585560332154_4144';

  // add your middleware config here
  config.middleware = [ 'params' ];
  // mysql配置文件
  config.mysql = {
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'he123654',
      // 数据库名
      database: 'test',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };


  return {
    ...config,
    ...userConfig,
  };
};
