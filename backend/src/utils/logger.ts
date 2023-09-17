/*
 * @Author: harvey —— fxli@yuansuan.cn
 * @Date: 2023-09-17 16:40:40
 * @LastEditors: harvey fxli@yuansuan.cn
 * @LastEditTime: 2023-09-17 16:40:49
 * @Description: 
 * Copyright (c) 2023 by harvey —— email: fxli@yuansuan.cn, All Rights Reserved.
 */
// logger.ts

import pino from 'pino'
import dayjs from 'dayjs'

const log = pino({
  transport: { // pino 7.x的写法有所不同
    target: 'pino-pretty',
  },
  base: {
    pid: false,
  },
  timestamp: () => `,"time":"${dayjs().format()}"`,
})

export default log
