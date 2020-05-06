<template>
  <div>
    <div class="">
      <el-card shadow="never">
        <div slot="header" class="thead">
          <h2>{{ $t('system.changePassword') }}</h2>
        </div>
        <div class="tbody">
          <el-form
            ref="form"
            :model="form"
            :rules="rules"
            label-width="120px">
            <el-form-item
              prop="password"
              :label="$t('system.password') + '：'">
              <el-input
                type="password"
                ref="password"
                v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item
              prop="newPassword"
              :label="$t('system.newPassword') + '：'">
              <el-input
                type="password"
                ref="newPassword"
                v-model="form.newPassword"></el-input>
            </el-form-item>
            <el-form-item
              prop="confirmPassword"
              :label="$t('system.confirmPassword') + '：'">
              <el-input
                type="password"
                ref="confirmPassword"
                v-model="form.confirmPassword"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                type="primary"
                :loading="loading"
                @click="onSubmit('numberValidateForm')">{{ $t('system.confirmModification') }}</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { validPassword } from '@/utils/validate'
import { password } from '@/api/system'

export default {
  name: 'Password',
  components: {},
  data () {
    const validatePassword = (rule, value, callback) => {
      if (!validPassword(value)) {
        callback(new Error(this.$i18n.t('login.passwordPlaceholder')))
      } else {
        callback()
      }
    }
    return {
      form: {
        password: '',
        newPassword: '',
        confirmPassword: ''
      },
      loading: false,
      rules: {
        password: [{
          required: true,
          trigger: 'blur',
          validator: validatePassword
        }],
        newPassword: [{
          required: true,
          trigger: 'blur',
          validator: validatePassword
        }],
        confirmPassword: [{
          required: true,
          trigger: 'blur',
          validator: validatePassword
        }]
      }
    }
  },
  methods: {
    onSubmit () {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.loading = true
          return new Promise((resolve, reject) => {
            password({
              ...this.form
            })
              .then(res => {
                const { data } = res
                this.$message({
                  type: 'success',
                  message: data
                })
                resolve()
                this.loading = false
              })
              .catch(error => {
                reject(error)
              })
          })
        } else {
          this.$message({
            type: 'error',
            message: this.$i18n.t('common.error')
          })
          return false
        }
      })
    }
  }
}
</script>
