<template>
  <div class="container">
    <div class="head" style="margin-bottom: 1.5rem">

    </div>
    <IndexBanner></IndexBanner>
  </div>
</template>


<script>
import { getIconlist, getTypelist, getSmBanner, getIndexNav, ERR_OK } from '@/api/data'
import IndexBanner from '@/components/indexbanner/IndexBanner'
export default {
  name: 'App',
  components: {
    IndexBanner
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="stylus">
.container
  width 10rem
  height 100%
</style>
