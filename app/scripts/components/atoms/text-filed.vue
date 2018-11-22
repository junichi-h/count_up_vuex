<template lang="pug">
    p {{count}}
</template>

<script>
  export default {
    name: 'text-filed',
    props: {
      count: Number
    }
  }
</script>

<style scoped lang="sass">
    .text
        font-size: 20px
</style>
