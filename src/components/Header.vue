<template>
    <div :class="[$style.myheader]">{{ message }}</div>
</template>

<script>
export default {
    props: {
        message: String
    }
}
</script>

<style module>
    .myheader {
        color: rgba(17, 16, 16, 0.849);
        text-align: center;
        margin-top: 30px;
        margin-bottom: 50px;
        font-weight: bold;
        font-size: 30px;
    }
</style>