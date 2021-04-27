import qs from 'qs'
import base from '@/api/base'
import Request from '@/request'

const business = {
  /*
   * 业务层相关
   */
  getLogin(data) {
    return Request.get(`${base.gateWay}/v1/Passport/Index/getLogin`, { data })
  }
}

export default business
