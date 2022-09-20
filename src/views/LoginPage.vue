<template>
  <a-row type="flex" class="space-align-container">
    <a-col :span="8" class="h-100"></a-col>
    <a-col :span="8" class="h-100 space-align-block" style="padding-top: 150px">
      <a-form :layout="formLayout" :form="form">
        <a-form-item label="帳號" :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
          <a-input placeholder="帳號"/>
        </a-form-item>
        <a-form-item label="密碼" :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
          <a-input type="password" placeholder="密碼"
                   v-decorator="['password', { rules: [{ required: true, message: '請輸入密碼' }] }]"/>
        </a-form-item>
        <a-form-item :wrapper-col="buttonItemLayout.wrapperCol">
          <a-button type="primary" v-on:click="submit()">
            送出
          </a-button>
        </a-form-item>
      </a-form>
    </a-col>
    <a-col :span="8" class="h-100"></a-col>
  </a-row>
</template>

<script>
import {defineComponent, reactive} from 'vue';

export default {
  name: "LoginPage",
  data() {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, {name: 'horizontal_login'})
    }
  },
  methods: {
    submit() {
      this.form.validateFields();
      alert('submit');
    }
  },
  computed: {
    formItemLayout() {
      const {formLayout} = this;
      return formLayout === 'horizontal'
          ? {
            labelCol: {span: 4},
            wrapperCol: {span: 14},
          }
          : {};
    },
    buttonItemLayout() {
      const {formLayout} = this;
      return formLayout === 'horizontal' ? {
        wrapperCol: {span: 14, offset: 4},
      } : {};
    }
  },
  mounted() {
  },
}
</script>

<style scoped>
.flex-container {
  display: flex;
  align-items: center;
  background-color: #42b983;
}

.h-100 {
  min-height: 100vh;
}
</style>