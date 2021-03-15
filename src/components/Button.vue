<template>
  <button :class="[$style.button]" @click="$emit('clicked')"><slot>{{ textButton }}</slot></button>
</template>

<script>
export default {
    props: {
        textButton: String,
    }
    
}
</script>

<style module>
    .button {
        width: 200px;
        height: auto;
        line-height: 16px;
        font-size: 16px;
        color: wheat;
        padding: 6px;
        align-items: center;
        text-align: center;
        border: none;
        border-radius: 10rem;
        background-color: hsl(220, 90%, 56%);
    }
    .button:focus {
        outline: none;
    }
    .button:hover {
        background-color: hsl(240, 90%, 56%);
    }
</style>