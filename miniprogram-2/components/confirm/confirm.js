Component({
  properties: {
    placeholder: {
      type: String,
      value: ""
    },
    visible: {
      type: Boolean,
      value: true
    },
    value:{
      type:String,
      value:''
    }
  },
  data: {
    _value: ""
  }, 
  methods: {
    watchValue(event) {
      this.data._value = event.detail.value
    },
    confirm() {
      this.triggerEvent('confirm', this.data._value)
      this.data._value = ''
    },
    cancel() {
      this.triggerEvent('cancel', this.data._value)
      this.data._value = ''
    }
  }
})
