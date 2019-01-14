<template>
  <button :class="btnClass" @click.prevent="$emit('click', $event)">
    <slot></slot>
  </button>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
  @Prop({ type: String, default: 'default' }) private type!: string;
  @Prop({ type: Boolean, default: false }) private loading!: boolean;
  public data() {
    return {};
  }
  private get btnClass() {
    return [
      'btn',
      `${'btn-' + this.type}`,
    ];
  }
  private mounted(): void {
    console.log(this.loading);
  }
}
</script>
<style src="./Button.sass" lang="sass" scoped>
</style>

