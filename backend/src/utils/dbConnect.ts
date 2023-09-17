/*
 * @Author: harvey —— fxli@yuansuan.cn
 * @Date: 2023-09-17 17:01:32
 * @LastEditors: harvey fxli@yuansuan.cn
 * @LastEditTime: 2023-09-17 19:05:38
 * @Description:
 * Copyright (c) 2023 by harvey —— email: fxli@yuansuan.cn, All Rights Reserved.
 */
// 连接db

import mongoose from 'mongoose'
import config from '../../config'
import logger from './logger'

async function dbConnect() {
  const dbUri = config.dbUri
  const dbUser = config.dbUser
  const dbPassword = config.dbPassword
  const dbAuthSource = config.dbAuthSource

  try {
    const connection = await mongoose.connect(dbUri, {
      user: dbUser,
      pass: dbPassword,
      authSource: dbAuthSource,
    })

    console.log('connection: ', connection)

    logger.info('DB connected')

    return connection
  } catch (error) {
    console.log('error: ', error)
    logger.error('Could not connect to db')
    process.exit(1)
  }
}

export default dbConnect
