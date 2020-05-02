// import Mock from 'mockjs'
// import { param2Obj } from '../src/utils'

// import user from './user'

// const mocks = [
//   ...user
// ]

// export function mockXHR () {
//   Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
//   Mock.XHR.prototype.send = function () {
//     if (this.custom.xhr) {
//       this.custom.xhr.withCredentials = this.withCredentials || false

//       if (this.responseType) {
//         this.custom.xhr.responseType = this.responseType
//       }
//     }
//     this.proxy_send(...arguments)
//   }

//   function XHR2ExpressReqWrap (respond) {
//     return function (options) {
//       let result = null
//       if (respond instanceof Function) {
//         const { body, type, url } = options
//         result = respond({
//           method: type,
//           body: JSON.parse(body),
//           query: param2Obj(url)
//         })
//       } else {
//         result = respond
//       }
//       return Mock.mock(result)
//     }
//   }

//   for (const i of mocks) {
//     Mock.mock(new RegExp(i.url), i.type || 'get', XHR2ExpressReqWrap(i.response))
//   }
// }

// export default mocks

import Mock from 'mockjs'
import user from './user'

export default Mock.mock('user/login', user)

// import Mock from 'mockjs'

// export default Mock.mock('user/login', {
//   'list|1-5': [{
//     'id|+1': 1,
//     'email': '@EMAIL',
//     'regexp3': /\d{5,10}/
//   }]
// })
