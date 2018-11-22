<template lang="pug">
    .container
        .textWrapper
            text-filed(:count='count')
        .buttonContainer
            Button(label='increment' :onClickFunc='onIncrement')
            Button(label='reset' :onClickFunc='onReset')
</template>

<script>
  import Button from '../atoms/button';
  import TextFiled from '../atoms/text-filed';
  export default {
    name: 'display',
    props: {
      count: Number,
      onIncrement: Function,
      onReset: Function
    },
    components: {
      Button,
      TextFiled
    }
  }
</script>

<style scoped lang="sass">
    .container
        position: relative
    .textWrapper
        margin:
            bottom: 20px

    .buttonContainer
        button
            display: block
            margin:
                bottom: 20px
            &:last-child
                margin:
                    bottom: 0
</style>
