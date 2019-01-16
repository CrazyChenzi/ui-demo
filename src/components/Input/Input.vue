<template>
  <div class="b-input-wrapper">
    <input class="b-input" 
      :autocomplete="autocomplet" 
      :placeholder="placeholder" 
      :readonly="readonly"
      :value="currentValue"
      @focus="inputFocus" 
      @blur="inputBlur"
      @input="handleInput"
      @click="handleClick" />

    <Icon :name="icon" class="input-icon" v-if="icon"></Icon>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import Icon from '../Icon/Icon.vue';

@Component({
  components: {
    Icon,
  },
})

export default class Input extends Vue {
  @Prop({ type: String, default: '请输入' }) private placeholder!: string;
  @Prop({ type: String, default: 'off' }) private autocomplet!: string;
  @Prop({ type: Boolean, default: false }) private readonly!: boolean;
  @Prop({ type: [Number, String ], default: ''}) private value!: number | string;
  @Prop({ type: String, default: '' }) private icon!: string;

  private currentValue: number | string = this.value;

  @Watch('value')
  private getInputValue(val: number | string) {
    this.setCurrentValue(val);
  }
  private setCurrentValue(val: number | string) {
    if (val === this.currentValue) {
      return;
    }
    this.currentValue = val;
  }
  private handleInput(event: any) {
    const value = event.target.value;
    this.$emit('input', value);
    this.setCurrentValue(value);
  }
  private inputFocus(event: any) {
    this.$emit('focus', event);
  }
  private inputBlur(event: any) {
    this.$emit('blur', event);
  }
  private handleClick(event: any) {
    this.$emit('click', event);
  }
}
</script>
<style src="./Input.sass" lang="sass" scoped>

</style>
