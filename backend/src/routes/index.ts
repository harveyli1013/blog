/*
 * @Author: harvey —— fxli@yuansuan.cn
 * @Date: 2023-09-17 16:31:32
 * @LastEditors: harvey fxli@yuansuan.cn
 * @LastEditTime: 2023-10-03 15:40:47
 * @Description:
 * Copyright (c) 2023 by harvey —— email: fxli@yuansuan.cn, All Rights Reserved.
 */
// src/routes/index.ts

import { Express, Request, Response, Router } from 'express'
import commonRes from '../utils/commonRes'
import silentHandle from '../utils/silentHandle'

// 路由配置接口
interface RouterConf {
  path: string
  router: Router
  meta?: any
}

// 路由配置
const routerConf: Array<RouterConf> = []
const getInfo = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5 ? resolve('info...') : reject('error...')
    }, 500)
  })
}

function routes(app: Express) {
  // 根目录
  app.get('/', async (req: Request, res: Response) => {
    const [e, result] = await silentHandle(getInfo)
    e ? commonRes.error(res, null) : commonRes(res, { result })
  })

  routerConf.forEach((conf) => app.use(conf.path, conf.router))
}

export default routes
