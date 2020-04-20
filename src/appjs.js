const initAxiosInterceptors = (axios) => {
  function findButtonElement (ele) {
    if (ele.tagName === 'BUTTON' && ele.getAttribute('dl') === null) {
      return ele
    } else if (ele.parentElement) {
      return findButtonElement(ele.parentElement)
    } else {
      return null
    }
  }

  function initAxiosInterceptors (axios) {
    axios.interceptors.request.use(function (config) {
      if (window && window.event) {
        var btn = findButtonElement(window.event.target)
        if (btn && btn.className && btn.className.indexOf('is-loading') < 0) {
          btn.className = btn.className + ' is-loading'
          setTimeout(() => {
            if (config.targetButton) {
              var loading = document.createElement('i')
              loading.setAttribute('name', 'loading')
              loading.className = 'el-icon-loading'
              btn.insertBefore(loading, btn.children.length > 0 ? btn.children[0] : null)
            }
          }, 1000)
          config.targetButton = btn
        }
      }
      return config
    }, function (error) {
      return Promise.reject(error)
    })

    axios.interceptors.response.use(function (response) {
      if (response.config.targetButton) {
        response.config.targetButton.className = response.config.targetButton.className.replace(' is-loading', '')
        let btn = response.config.targetButton
        setTimeout(() => {
          let loading = document.getElementsByName('loading')
          if (loading && loading.length > 0) {
            btn.removeChild(loading[0])
          }
        }, 0)
        response.config.targetButton = null
        delete response.config.targetButton
      }
      return response
    }, function (error) {
      if (error.config.targetButton) {
        error.config.targetButton.className = error.config.targetButton.className.replace(' is-loading', '')
        let btn = error.config.targetButton
        setTimeout(() => {
          let loading = document.getElementsByName('loading')
          if (loading && loading.length > 0) {
            btn.removeChild(loading[0])
          }
        }, 0)
        error.config.targetButton = null
        delete error.config.targetButton
      }
      return Promise.reject(error)
    })
  }
  initAxiosInterceptors(axios)
}

var AppJs = function () {
  function get (options) {
    this.$ajax.get(options.url, { params: options.params }).then((res) => {
      options.success.call(this, res)
    }).catch((err) => {
      options.error && options.error.call(this, err)
      window.handleException.call(this, err)
    })
  }

  function post (options) {
    this.$ajax.post(options.url, options.params).then((res) => {
      options.success.call(this, res)
    }).catch((err) => {
      options.error && options.error.call(this, err)
      window.handleException.call(this, err)
    })
  }

  function formatTime (date) {
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()
    var hour = date.getHours()
    var minute = date.getMinutes()
    var second = date.getSeconds()

    return [year, month, day].map(window.formatNumber).join('/') + ' ' + [hour, minute, second].map(window.formatNumber).join(':')
  }

  function jsonDateFormat (jsonDate, ctype) {
    try {
      var date = new Date(parseInt(jsonDate.replace('/Date(', '').replace(')/', ''), 10))
      var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
      var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
      var hours = date.getHours()
      var minutes = date.getMinutes()
      var seconds = date.getSeconds()
      if (ctype === 2) {
        return date.getFullYear() + '-' + month + '-' + day
      }
      return date.getFullYear() + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds
    } catch (ex) {
      return ''
    }
  }

  return {
    get: get,
    post: post,
    formatTime: formatTime,
    jsonDateFormat: jsonDateFormat
  }
}

module.exports.install = function (Vue, axios) {
  Vue.prototype.$app = new AppJs()
  initAxiosInterceptors(axios)
}
