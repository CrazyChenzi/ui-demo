<template>
  <div class="b-select">
    <input :placeholder="placeholder" :class="selectHeaderClasses" 
    @click="openOptions" 
    @blur="toggleHeaderFocus" 
    @focus="toggleHeaderFocus" />
    <Icon name="angle-down" scale="0.8" class="b-select-icon-down"></Icon>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Icon from '../Icon/Icon.vue';
import Options from './Options.vue';

@Component({
  components: {
    Icon,
    Options,
  },
})
export default class Select extends Vue {
  @Prop({ type: [String, Number, Array] }) private value!: string | number | number[];
  @Prop({ type: String, default: '请选择' }) private placeholder!: string;
  private showOptions: boolean = false;
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
  private openOptions() {
    this.showOptions = !this.showOptions;
  }
}
</script>
<style src="./Setect.sass" lang="sass" scoped>

</style>

