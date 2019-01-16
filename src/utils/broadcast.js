export const install = function (Vue) {
  let broadcast = function (key, ...args) {
    this.$root.$vmEvent.$emit(key, key, args)
  }
  let dispatch = function (key, args) {
    if (this[key]) {
      return this[key](...args)
    }
  }
  let delegate = (vm, events) => {
    let vmEvent = vm.$root.$vmEvent
    let proxy = dispatch.bind(vm)
    events.forEach(it => vmEvent.$on(it, proxy))
    return () => {
      events.forEach(it => vmEvent.$off(it, proxy))
      delete vm.$unbindEvent
    }
  }
  Vue.mixin({
    beforeCreate () {
      let {events, methods, vmEvent} = this.$options
      if (!vmEvent) {
        if (!this.$root.$vmEvent) {
          this.$root.$vmEvent = new Vue({vmEvent: true})
        }
        this.$broadcast = broadcast
      }
      if (events) {
        if (!Array.isArray(events)) { // object
          methods || (methods = this.$options.methods = {})
          Object.assign(methods, events)
          events = Object.keys(events)
        }
        this.$unbindEvent = delegate(this, events)
      }
    },
    beforeDestroy () {
      if (this.$unbindEvent) {
        this.$unbindEvent()
      }
    }
  })
}