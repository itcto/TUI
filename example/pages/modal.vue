<template>
  <div>
    <t-modal :show.sync="show" :top="100" animation="t-top-to-center-bounce" @modal-open="onOpen" @modal-close="onClose">
      <h3 slot="header">
        登录
      </h3>
      <div slot="body">
        <t-form>
          <t-form-item label="Username:">
            <t-input placeholder="name" type="text"/>
          </t-form-item>
          <t-form-item label="Password:">
            <t-input placeholder="password" type="password"/>
          </t-form-item>
        </t-form>
      </div>
      <div slot="footer" style="text-align: right">
        <t-button size="sm" type="primary" @click="show2 = !show2">登录</t-button>
      </div>
    </t-modal>

    <t-modal :show.sync="show2" size="sm" :top="150" animation="t-top-to-center-bounce" @modal-open="onOpen" @modal-close="onClose">
      <h3 slot="header">
        登录
      </h3>
      <div slot="body">
        Hello Modal 2
      </div>
      <div slot="footer" style="text-align: right">
        <t-button size="sm" type="primary" @click="show2 = !show2">登录</t-button>
      </div>
    </t-modal>

    <guide title="开关" des="用于输入的表单开关组件"/>
    <div class="demo-block">
      <div class="subtitle">Switch</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="12">
            <t-button @click="showModal">show Modal {{ count }}</t-button> {{ show }} {{ show2 }}
          </t-col>
        </t-row>
      </div>
      <radio-group/>
    </div>
  </div>
</template>

<script>
import RadioGroup from '../documents/radio/radioGroup.md'

export default {
  components: {
    RadioGroup
  },

  data () {
    return {
      show: false,
      show2: false,
      count: 0
    }
  },
  methods: {
    showModal () {
      this.show = !this.show
      this.count++

      // setTimeout(() => {
      //   this.show = false
      // }, 3000)
    },
    onOpen () {
      this.$TMessage.show({
        title: '打开 Modal',
        type: 'info'
      })
    },

    onClose () {
      console.log('close')
      this.$TMessage.show({
        title: '关闭 Modal',
        type: 'info'
      })
    }
  }
}
</script>

<style></style>
