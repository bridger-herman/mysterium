<template>
  <div class="frame">
    {{ this.$store.state.count }}

  </div> 
</template>

<script>
import api from '@/api'

export default {
  async created () {
    console.log(api.createPost({title: 'test', body: 'test'}));
    api.getPosts().then((post) => console.log(post));
  },
}
</script>

<style>

</style>