/**
 * @file aliyun arms report method of es6
 * @since 1.0.8
 * @author whzcorcd <whzcorcd@gmail.com>
 *
 * 阿里前端监控
 * 配置文档 https://www.npmjs.com/package/alife-logger
 *
 * 使用示例：import arms from 'arms'
 *         const logger = arms('huh7k89btk@39bb266d318880a', true, true)
 *         logger && logger.api(url, true, time, res.data.Flag, res.data.FlagString)
 * 示例解析：arms(应用 pid, 是否关闭 API 自动上报, 是否启用 SPA 分析)
 *         api(请求地址，请求成功与否，请求耗时，请求状态码，请求返回 Msg)
 */
import BrowerLogger from 'alife-logger'

const __bl = (pid, disableHook = false, enableSPA = true) => {
  if (process.env.NODE_ENV === 'production') {
    try {
      return BrowerLogger.singleton({
        pid: pid,
        appType: 'web',
        imgUrl: 'https://arms-retcode.aliyuncs.com/r.png?',
        sendResource: true,
        enableLinkTrace: true,
        behavior: true,
        disableHook: disableHook,
        useFmp: true,
        enableSPA: enableSPA
      })
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('init logger fail', e)
      return false
    }
  } else {
    return false
  }
}

export default __bl
