<template>
  <div class="login-page">
    <el-form
      ref="loginForm"
      class="login-form"
      :model="loginForm"
      :rules="loginRules">
      <el-form-item prop="username">
        <div class="label">
          <label for="">姓名：</label>
        </div>
        <div class="control">
          <el-input
            ref="username"
            v-model="loginForm.username"
            placeholder="请输入账号">
          </el-input>
        </div>
      </el-form-item>
      <el-form-item prop="password">
        <div class="label">
          <label for="">密码：</label>
        </div>
        <div class="control">
          <el-input
            type="password"
            ref="password"
            v-model="loginForm.password"
            placeholder="请输入密码">
          </el-input>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          :loading="loading"
          @click="onLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { validUsername, validPassword } from '@/utils/validate'

export default {
  name: 'Login',
  data () {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (!validPassword(value)) {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'liqingyun',
        password: '123456'
      },
      loading: false,
      loginRules: {
        username: [{
          required: true,
          trigger: 'blur',
          validator: validateUsername
        }],
        password: [{
          required: true,
          trigger: 'blur',
          validator: validatePassword
        }]
      }
    }
  },
  created () {
    let token = this.$store.state.user.token
    if (token) {
      this.$router.push({
        path: '/admin'
      })
    }
  },
  methods: {
    onLogin () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm)
            .then(() => {
              this.$router.push({
                path: '/admin'
              })
              this.loading = false
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .login-page {
    position: relative;
    height: 100%;
    background: #304156;
    color: #ffffff;
  }

  .login-form {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 400px;
    transform: translate(-50%, -50%);
  }
</style>
