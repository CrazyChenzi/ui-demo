<template>
  <div>
    <input type="hidden">
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Icon from '../Icon/Icon.vue';

@Component({
  components: {
    Icon,
  },
})
export default class Select extends Vue {

}
</script>
