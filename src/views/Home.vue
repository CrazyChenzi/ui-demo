<template>
  <div class="home">
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="primary" :loading="loading" @click="startLoading">
      <span v-if="!loading">Click me</span>
      <span v-else>Loading...</span>
    </Button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Button from '@/components/Button/Button.vue';

@Component({
  components: {
    Button,
  },
})
export default class Home extends Vue {
  private loading: boolean = false;
  public data() {
    return {
      msg: 'welcome ts',
    };
  }
  private startLoading(e: any) {
    this.loading = true;
    console.log(e, '这是loading点击事件');
  }
}
</script>
<style lang="sass" scoped>
.home 
  padding: 0 20px
Button
  margin-right: 5px
</style>

