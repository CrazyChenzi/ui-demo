<template>
  <input :placeholder="placeholder" :class="selectHeaderClasses" />
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Icon from '../Icon/Icon.vue';

@Component({
  components: {
    Icon,
  },
})
export default class Input extends Vue {

}
</script>
