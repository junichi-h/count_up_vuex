<template lang="pug">
    button.button(type='button' @click='onClick') {{label}}
</template>

<script>
  export default {
    name: 'Button',
    props: {
      label: String,
      onClickFunc: Function
    },
    methods: {
      /*onClick: function(event) {
        console.log(event);
        event.preventDefault();
        this.onClick();
        console.log('click');
      }*/
      onClick: function(event) {
        event.preventDefault();
        this.onClickFunc();
      }
    }
  }
</script>

<style scoped lang="sass">
    .button
        outline: none
        width: 130px
        height: 40px
        text-align: center
        border: 2px solid #1ecd97
            radius: 40px
        color: #1ecd97
        letter-spacing: 1px
        text-shadow: 0
        font-size: 12px
        cursor: pointer
        transition:
            property: color, background-color, letter-spacing
            duration: 0.25s
            timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94)
        &:hover
            color: #fff
            background:
                color: #1ecd97
        &:active
            letter-spacing: 2px
</style>
