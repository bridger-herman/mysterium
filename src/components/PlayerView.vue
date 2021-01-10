<template>
  <div class="frame">
    {{ this.$store.state.count }}
    <button v-on:click="clicked">Click me</button>
  </div> 
</template>

<script>
import api from '@/api'

export default {
  // async created () {
  //   console.log(api.createPost({title: 'test', body: 'test'}));
  //   api.getPosts().then((post) => console.log(post));
  // },
  methods: {
    async clicked() {
      await api.createPost({title: 'test', body: 'test'});
      api.getPosts().then((post) => console.log(post));
    }
  }
}
</script>

<style>

</style>