<template>
  <button :class="btnClass" @click.prevent="$emit('click', $event)">
    <Icon :name="icon" class="btn-icon" v-if="icon"></Icon>
    <Icon name="spinner" pulse class="btn-icon" v-if="loading"></Icon>
    <slot></slot>
  </button>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import Icon from '../Icon/Icon.vue';

@Component({
  components: {
    Icon,
  },
})
export default class Button extends Vue {
  @Prop({ type: String, default: 'default' }) private type!: string;
  @Prop({ type: Boolean, default: false }) private loading!: boolean;
  @Prop({ type: [Number, String] }) private loadingTime!: any;
  @Prop({ type: String, default: '' }) private icon!: string;
  @Watch('loading')
  private getLoadingTime(val: number) {
    if (val && this.loadingTime) {
      setTimeout(() => {
        this.$emit('update:loading', !val);
      }, this.loadingTime);
    }
  }
  private get btnClass() {
    return [
      'btn',
      `${'btn-' + this.type}`,
      {
        [`${'btn-' + this.type + '-loading btn-loading'}`]: this.loading,
      },
    ];
  }
}
</script>
<style src="./Button.sass" lang="sass" scoped>
</style>

