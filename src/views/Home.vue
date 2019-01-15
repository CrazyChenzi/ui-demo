<template>
  <div class="home">
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="primary" :loading.sync="loading" loadingTime="5000" @click="startLoading">
      <span v-if="!loading">Click me</span>
      <span v-else>Loading...</span>
    </Button>
    <Button :loading="loading1" @click="startLoading1">
      <span v-if="!loading1">Click me</span>
      <span v-else>Loading...</span>
    </Button>
    <Button icon="spinner">Icon</Button>
    <div>
      <Select></Select>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Button from '@/components/Button/Button.vue';
import Select from '@/components/Select/Select.vue';

@Component({
  components: {
    Button,
    Select,
  },
})
export default class Home extends Vue {
  private loading: boolean = false;
  private loading1: boolean = false;
  public data() {
    return {
      msg: 'welcome ts',
    };
  }
  private startLoading(e: any) {
    this.loading = true;
  }
  private startLoading1(e: any) {
    this.loading1 = true;
  }
}
</script>
<style lang="sass" scoped>
.home 
  padding: 0 20px
Button
  margin-right: 5px
</style>

