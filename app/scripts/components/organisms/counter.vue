<template lang="pug">
    .container
        display(
            :count='$store.state.count'
            :onIncrement='COUNT_UP'
            :onDecrement='COUNT_DOWN'
            :onReset='RESET'
        )
</template>

<script>
  import { mapActions } from 'vuex'
  import Display from '../molecules/display';
  import { COUNT_UP, COUNT_DOWN, RESET } from '../../store/mutation-types';

  export default {
    name: "counter",
    components: {
      Display
    },
    methods: mapActions({
      COUNT_UP,
      COUNT_DOWN,
      RESET
    })
  }
</script>

<style scoped lang="sass">
    .container
        position: relative
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        width: 100%
        height: 100vh
</style>
