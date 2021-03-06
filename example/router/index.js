import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'document',
      component: r => require.ensure([], () => r(require('../pages/layout.vue')))
    },
    {
      path: '/layout',
      name: 'layout',
      component: r => require.ensure([], () => r(require('../pages/layout.vue')))
    },
    {
      path: '/button',
      name: 'button',
      component: r => require.ensure([], () => r(require('../pages/button.vue')))
    },
    {
      path: '/dialog',
      name: 'dialog',
      component: r => require.ensure([], () => r(require('../pages/dialog.vue')))
    },
    {
      path: '/input',
      name: 'input',
      component: r => require.ensure([], () => r(require('../pages/input.vue')))
    },
    {
      path: '/input-number',
      name: 'input-number',
      component: r => require.ensure([], () => r(require('../pages/input-number.vue')))
    },
    {
      path: '/checkbox',
      name: 'checkbox',
      component: r => require.ensure([], () => r(require('../pages/checkbox.vue')))
    },
    {
      path: '/radio',
      name: 'radio',
      component: r => require.ensure([], () => r(require('../pages/radio.vue')))
    },
    {
      path: '/switch',
      name: 'switch',
      component: r => require.ensure([], () => r(require('../pages/switch.vue')))
    },
    {
      path: '/select',
      name: 'select',
      component: r => require.ensure([], () => r(require('../pages/select.vue')))
    },
    {
      path: '/cascader',
      name: 'cascader',
      component: r => require.ensure([], () => r(require('../pages/cascader.vue')))
    },
    {
      path: '/datepicker',
      name: 'datepicker',
      component: r => require.ensure([], () => r(require('../pages/datepicker.vue')))
    },
    {
      path: '/timepicker',
      name: 'timepicker',
      component: r => require.ensure([], () => r(require('../pages/timepicker.vue')))
    },
    {
      path: '/form',
      name: 'form',
      component: r => require.ensure([], () => r(require('../pages/form.vue')))
    },
    {
      path: '/table',
      name: 'table',
      component: r => require.ensure([], () => r(require('../pages/table.vue')))
    },
    {
      path: '/tag',
      name: 'tag',
      component: r => require.ensure([], () => r(require('../pages/tag.vue')))
    },
    {
      path: '/progress',
      name: 'progress',
      component: r => require.ensure([], () => r(require('../pages/progress.vue')))
    },
    {
      path: '/tree',
      name: 'tree',
      component: r => require.ensure([], () => r(require('../pages/tree.vue')))
    },
    {
      path: '/pagination',
      name: 'pagination',
      component: r => require.ensure([], () => r(require('../pages/pagination.vue')))
    },
    {
      path: '/badge',
      name: 'badge',
      component: r => require.ensure([], () => r(require('../pages/badge.vue')))
    },
    {
      path: '/alert',
      name: 'Alert',
      component: r => require.ensure([], () => r(require('../pages/alert.vue')))
    },
    {
      path: '/loading',
      name: 'Loading',
      component: r => require.ensure([], () => r(require('../pages/loading.vue')))
    },
    {
      path: '/message',
      name: 'message',
      component: r => require.ensure([], () => r(require('../pages/message.vue')))
    },
    {
      path: '/notify',
      name: 'notify',
      component: r => require.ensure([], () => r(require('../pages/notify.vue')))
    },
    {
      path: '/menu',
      name: 'menu',
      component: r => require.ensure([], () => r(require('../pages/menu.vue')))
    },
    {
      path: '/dropdown',
      name: 'dropdown',
      component: r => require.ensure([], () => r(require('../pages/dropdown.vue')))
    },
    {
      path: '/tabs',
      name: 'tabs',
      component: r => require.ensure([], () => r(require('../pages/tabs.vue')))
    },
    {
      path: '/breadcrumb',
      name: 'breadcrumb',
      component: r => require.ensure([], () => r(require('../pages/breadcrumb.vue')))
    },
    {
      path: '/step',
      name: 'step',
      component: r => require.ensure([], () => r(require('../pages/step.vue')))
    },
    {
      path: '/modal',
      name: 'modal',
      component: r => require.ensure([], () => r(require('../pages/modal.vue')))
    }
  ]
})
