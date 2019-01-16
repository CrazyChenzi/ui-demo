<template>
  <div class="b-select" >
    <div :class="selectHeaderClasses">
      <Input placeholder="请选择" v-model="currentValue" readonly @blur="closeOptions" @click="handleOptions"/>
      <Icon name="angle-down" scale="0.8" class="b-select-icon-down"></Icon>
    </div>
    <div class="b-select-dropdown" v-show="showOptions">
      <ul class="b-select-dropdown-list">
        <li v-for="(item, index) in list" class="b-select-item" 
          :class="{'b-select-item-focus': index === currentIndex}"
          :key="index" 
          :value="item.value" 
          @click="handleClick(index, item)">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
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
  @Prop({ type: [String, Number, Array], default: '' }) private value!: string | number | object[];
  @Prop({ type: String, default: '请选择' }) private placeholder!: string;

  private showOptions: boolean = false;
  private currentIndex: number | string = '';
  private currentValue: number | string | object[] = '';
  private list: object[] = [
    {
      name: '上海',
      value: 1,
    },
    {
      name: '北京',
      value: 2,
    },
    {
      name: '西安',
      value: 3,
    },
  ];
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
    if (this.showOptions) {
      this.showOptions = false;
    }
  }
  private handleClick(index: number, item: any) {
    this.currentIndex = index;
    this.currentValue = item.name;
    this.handleOptions();
    this.$emit('click');
  }
}
</script>
<style src="./Setect.sass" lang="sass" scoped>

</style>

