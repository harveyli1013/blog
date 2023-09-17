/*
 * @Author: harvey —— fxli@yuansuan.cn
 * @Date: 2023-09-17 16:54:09
 * @LastEditors: harvey fxli@yuansuan.cn
 * @LastEditTime: 2023-09-17 16:54:20
 * @Description:
 * Copyright (c) 2023 by harvey —— email: fxli@yuansuan.cn, All Rights Reserved.
 */
// 如果执行过程有错误，则捕捉并赋值给返回数组的第一个元素
async function silentHandle<T, U = Error>(
  fn: Function,
  ...args: Array<unknown>
): Promise<[U, null] | [null, T]> {
  let result: [U, null] | [null, T]

  try {
    result = [null, await fn(...args)]
  } catch (e: any) {
    result = [e, null]
  }

  return result
}

export default silentHandle
