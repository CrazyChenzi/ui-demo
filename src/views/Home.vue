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
      <Input style="width: 200px; margin-top: 20px" icon="spinner" v-model="inputValue" @focus="inputFocus" @blur="inputBlur" />
    </div>
    <div>
      <Select style="width: 200px; margin-top: 20px" :value.sync="value" :options="list" :defaultVNode="{value: 'value', text: 'name'}"></Select>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import Button from '@/components/Button/Button.vue';
import Select from '@/components/Select/Select.vue';
import Input from '@/components/Input/Input.vue';

@Component({
  components: {
    Button,
    Select,
    Input,
  },
})
export default class Home extends Vue {
  private loading: boolean = false;
  private loading1: boolean = false;
  private inputValue: number | string = '这是value值';
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
  private value: number = 1;
  public data() {
    return {
      msg: 'welcome ts',
    };
  }
  @Watch('value')
  private getValue(val: any) {
    // console.log(val);
  }
  private startLoading(e: any) {
    this.loading = true;
  }
  private startLoading1(e: any) {
    this.loading1 = true;
  }
  private inputFocus() {
    this.inputValue = '--';
    console.log('focus');
  }
  private inputBlur() {
    console.log(this.inputValue, 'blur');
  }
}
</script>
<style lang="sass" scoped>
.home 
  padding: 0 20px
Button
  margin-right: 5px
</style>

