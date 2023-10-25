/*
 * @Author: harvey —— fxli@yuansuan.cn
 * @Date: 2023-09-17 16:28:20
 * @LastEditors: harvey fxli@yuansuan.cn
 * @LastEditTime: 2023-09-17 17:02:12
 * @Description:
 * Copyright (c) 2023 by harvey —— email: fxli@yuansuan.cn, All Rights Reserved.
 */

import express from 'express'
import routes from './routes' // 路由
import logger from './utils/logger'
import config from '../config'
import initMiddleware from './middleware'
import dbConnect from './utils/dbConnect'
const PORT = config.port

const app = express()

initMiddleware(app)

// 启动
app.listen(PORT, async () => {
  logger.info(`App is running at http://localhost:${PORT}`)
  await dbConnect()
  routes(app)
})
