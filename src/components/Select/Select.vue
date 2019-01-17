<template>
  <div class="b-select" @mouseleave="hasMouseHoverHead = false" @mouseenter="hasMouseHoverHead = true">
    <div :class="selectHeaderClasses">
      <Input placeholder="请选择" :value="currentText" readonly @blur="closeOptions" @click="handleOptions"/>
      <Icon name="angle-down" scale="0.8" class="b-select-icon-down"></Icon>
    </div>
    <div class="b-select-dropdown" v-show="showOptions">
      <ul class="b-select-dropdown-list">
        <li v-for="(item, index) in options" class="b-select-item" 
          :class="{'b-select-item-focus': index === currentIndex}"
          :key="index" 
          :value="item[`${defaultVNode.value}`]" 
          @click="handleClick(index, item)">
          {{ item[`${defaultVNode.text}`] }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Provide, Watch } from 'vue-property-decorator';
import Icon from '../Icon/Icon.vue';
import Options from './Options.vue';
import Input from '../Input/Input.vue';

@Component({
  components: {
    Icon,
    Options,
    Input,
  },
})
export default class Select extends Vue {
  @Provide() private select = this;
  @Prop({ type: [String, Number, Array], default: '' }) private value!: string | number | object[];
  @Prop({ type: String, default: '请选择' }) private placeholder!: string;
  @Prop({ type: [Array], default: [] }) private options!: object[];
  @Prop({ type: Object, default: {value: 'value', text: 'text'} }) private defaultVNode!: any;

  private showOptions: boolean = false;
  private currentIndex: number | string = '';
  private currentText: number | string | object[] = '';
  private hasMouseHoverHead: boolean = false;
  public toggleHeaderFocus() {
    console.log('type');
  }
  private get selectHeaderClasses() {
    return [
      'b-select-selection',
      {
        [`b-select-selection-visible `]: this.showOptions,
      },
    ];
  }
  private handleOptions() {
    this.showOptions = !this.showOptions;
  }
  private closeOptions() {
    if (this.showOptions && !this.hasMouseHoverHead) {
      this.showOptions = false;
    }
  }
  private handleClick(index: number, item: any) {
    this.currentIndex = index;
    this.currentText = item[`${this.defaultVNode.text}`];
    this.handleOptions();
    this.$emit('click', item);
    this.$emit('update:value', item[`${this.defaultVNode.value}`]);
  }
  private created() {
    if (this.value) {
      this.options.filter((item: any, index: number) => {
        if (item[`${this.defaultVNode.value}`] === this.value) {
          this.currentIndex = index;
          this.currentText = item[`${this.defaultVNode.text}`];
        }
      });
    }
  }
}
</script>
<style src="./Setect.sass" lang="sass" scoped>

</style>

