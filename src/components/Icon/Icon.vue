<template>
  <Icon :name="name" :scale="scale" :inverse="inverse" :pulse="pulse" :flip="flip" :label="label"></Icon>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
// 仅引入用到的图标以减小打包体积
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon.vue';

@Component({
  components: {
    Icon,
  },
})
export default class BIcon extends Vue {
  @Prop({ type: String }) private name!: string;
  @Prop({ type: [String, Number], default: 0.7 }) private scale!: string | number;
  @Prop({ type: Boolean, default: false }) private spin!: boolean;
  @Prop({ type: Boolean, default: false }) private inverse!: boolean;
  @Prop({ type: Boolean, default: false }) private pulse!: boolean;
  @Prop({ type: String, default: null }) private flip!: string;
  @Prop({ type: String, default: '' }) private label!: string;
}
</script>

