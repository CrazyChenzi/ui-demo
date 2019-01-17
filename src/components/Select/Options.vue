<template>
  <li :class="isFocused" ref="selItem" :value="value" @click="handleClick"><slot></slot></li>
</template>
<script lang="ts">
import { Component, Vue, Prop, Inject } from 'vue-property-decorator';
import Icon from '../Icon/Icon.vue';

@Component({
  components: {
    Icon,
  },
})
export default class Select extends Vue {
  @Inject() private select!: any;
  @Prop({ type: [String, Number], default: '' }) private value!: string | number;

  private valueArr: string[] = [];

  private get isFocused() {
    return [
      'b-select-item',
      {
        'b-select-item-focus': this.itemSelected,
      },
    ];
  }
  private get itemSelected() {
    return this.isEqual(this.value);
  }
  private isEqual(value: string | number) {
    // if (value === this.valueArr[0].target.value) {
    //   return true;
    // }
    return false;
  }
  private handleClick(event: any) {
    console.log(this.select, event.target.innerHTML);
    this.select.handleOptions();
    this.$emit('click');
  }
}
</script>