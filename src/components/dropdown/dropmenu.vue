<script>
import PositionHelper from '../../mixins/positionHelper'
import Emitter from '../../mixins/emitter'
import Vue from 'vue'
let DropMenu

export default {
  name: 't-dropmenu',

  mixins: [PositionHelper, Emitter],

  data () {
    return {
      arrowRight: false,
      arrowTop: false,
      dropComponent: {}
    }
  },

  props: {
    parent: {},
    isOpen: false,
    initial: false
  },

  created () {
    this.$on('fresh-position', this.setListPosition)
  },

  updated () {
    if (DropMenu !== undefined) {
      DropMenu.$forceUpdate()
      this.$emit('fresh-position')
    }
  },

  render (h) {
    return h()
  },

  methods: {
    onMouseEnter () {
      this.$emit('mouseenter')
    },
    onMouseLeave () {
      this.$emit('mouseleave')
    },
    onItemClick (cmd) {
      this.$emit('command', cmd)
    },
    createList () {
      const _this = this
      const dropmenu = new Vue({
        created () {
          this.$on('item-click', _this.onItemClick)
        },

        render (h) {
          return h('ul', {
            class: 't-dropdown__menu',
            on: {
              'mouseleave': _this.onMouseLeave,
              'mouseenter': _this.onMouseEnter
            }
          }, [h('div', {
            class: [
              't-select__arrow-up',
              _this.arrowRight ? 't-select__arrow-up--right' : '',
              _this.arrowTop ? 't-select__arrow-up--top' : ''
            ]
          }), _this.$slots.default])
        },
        methods: {
          remove () {
            this.$destroy()
            document.body.removeChild(this.$el)

            //  remove position fixer
            window.removeEventListener('resize', _this.setListPosition)
            document.removeEventListener('scroll', _this.setListPosition, true)
          },
          show () {
            this.$el.style.transformOrigin = _this.arrowTop ? 'bottom' : 'top'
            this.$el.style.transform = 'rotateX(0)'
            this.$el.style.opacity = 1
          },
          hide () {
            this.$el.style.transformOrigin = _this.arrowTop ? 'bottom' : 'top'
            this.$el.style.opacity = 0
            this.$el.style.transform = 'rotateX(90deg)'
          }
        }
      })

      const component = dropmenu.$mount()
      component.$options.name = 't-dropdown-menu'
      DropMenu = component
      this.list = component.$el
      component.hide()
      document.body.appendChild(component.$el)

      setTimeout(function () {
        component.show()
      })

      this.setListPosition()

      //  add position fixer
      window.addEventListener('resize', this.setListPosition)
      document.addEventListener('scroll', this.setListPosition, true)
    },
    setListPosition () {
      const parent = this.parent

      if (parent.isOpen) {
        let parentViewLeft = this.getElementViewLeft(parent.$el)
        let parentViewTop = this.getElementViewTop(parent.$el)

        let parentOffsetHeight = parent.$el.offsetHeight
        let parentOffsetWidth = parent.$el.offsetWidth
        let windowViewHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight

        let listLeft = parentViewLeft
        let listTop = null

        let listWidth = this.list.offsetWidth
        let listHeight = this.list.offsetHeight

        if (listWidth + parentViewLeft >= document.body.offsetWidth) {
          listLeft -= listWidth - parentOffsetWidth
          this.arrowRight = true
        } else {
          this.arrowRight = false
        }

        if (parentViewTop + listHeight + parentOffsetHeight + 5 > windowViewHeight) {
          this.arrowTop = true
          listTop = parentViewTop - listHeight - 5
        } else {
          this.arrowTop = false
          listTop = parentViewTop + parentOffsetHeight + 5
        }

        this.list.style.left = `${listLeft}px`
        this.list.style.top = `${listTop}px`
      }
    }
  },

  watch: {
    initial () {
      console.log('initial')
      this.createList()
    },
    isOpen (val) {
      val ? DropMenu.show() : DropMenu.hide()
    }
  }
}
</script>

<style scoped>

</style>