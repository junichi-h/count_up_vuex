<template lang="pug">
    #app
        h1.md-headline.title {{msg}}
        counter

</template>

<script>
  import Counter from './components/organisms/counter';

  export default {
    name: 'app',
    components: {
      Counter
    },
    data: () => ({
      msg: 'vuex test'
    })
  }
</script>

<style lang="sass" scoped>
    #app
        font-family: 'Avenir', Helvetica, Arial, sans-serif
        position: relative
</style>
