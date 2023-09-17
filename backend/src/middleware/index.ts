/*
 * @Author: harvey —— fxli@yuansuan.cn
 * @Date: 2023-09-17 16:58:30
 * @LastEditors: harvey fxli@yuansuan.cn
 * @LastEditTime: 2023-09-17 16:58:40
 * @Description:
 * Copyright (c) 2023 by harvey —— email: fxli@yuansuan.cn, All Rights Reserved.
 */
import { Express } from 'express'
import express from 'express'
import responseHeader from './responseHeader'

function initMiddleware(app: Express) {
  app.use(express.json())
  app.use(responseHeader)
}

export default initMiddleware
