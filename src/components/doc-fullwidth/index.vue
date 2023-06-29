<template>
  <div class="clearfix">
    <HeaderThree />
    <DocArea/>
  </div>
</template>

<script>
import HeaderThree from '../common/Headers/HeaderThree.vue';
import DocArea from './doc-area.vue';

export default {
  name:'DocFullWidthMain',
  components: { HeaderThree, DocArea },
}
</script>