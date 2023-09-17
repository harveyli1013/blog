/*
 * @Author: harvey —— fxli@yuansuan.cn
 * @Date: 2023-09-17 16:50:44
 * @LastEditors: harvey fxli@yuansuan.cn
 * @LastEditTime: 2023-09-17 16:52:26
 * @Description:
 * Copyright (c) 2023 by harvey —— email: fxli@yuansuan.cn, All Rights Reserved.
 */
import { Response } from 'express'
import { Code, codeType, CodeMessage } from '../constants/code'
import logger from './logger'

interface ResOption {
  type?: codeType
  status?: number
  message?: any
}

// 默认成功响应
function commonRes(res: Response, data: unknown, options?: ResOption) {
  options = Object.assign({ type: Code[3000] }, options || {}) // 默认success

  const { type, status, message } = options
  let resStatus = status

  if (resStatus === undefined) {
    // 根据状态设置状态码
    resStatus = type === Code[3000] ? 200 : 409
  }

  // 响应参数
  const sendRes: { code: number; data: unknown; message?: unknow } = {
    code: Code[type as codeType],
    data,
  }
  // 响应描述
  message && (sendRes.message = message)

  return res.status(resStatus).send(sendRes)
}

// 错误响应
commonRes.error = function (
  res: Response,
  data: unknown,
  message?: unknown,
  status?: number
) {
  logger.error(message || CodeMessage['error'])
  this(res, data, {
    type: 'error',
    message: message || CodeMessage['error'],
    status: status || 409,
  })
}

// 无权限响应
commonRes.denied = function (res: Response, data: unknown) {
  this(res, data, {
    type: 'denied',
    message: CodeMessage['denied'],
    status: 401,
  })
}

export default commonRes
