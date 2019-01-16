<template>
  <li :class="isFocused" :value="value" @click="handleClick"><slot></slot></li>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Icon from '../Icon/Icon.vue';

@Component({
  components: {
    Icon,
  },
})
export default class Select extends Vue {
  @Prop({ type: [String, Number], default: '' }) private value!: string | number;

  private get isFocused() {
    return [
      'b-select-item',
    ];
  }
  private handleClick(event: any) {
    this.$emit('click');
  }
}
</script>