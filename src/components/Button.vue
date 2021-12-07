<script setup lang="ts">
const emits = defineEmits(['click'])
</script>

<template>
    <button @click="emits('click')">
        <slot></slot>
    </button>
</template>

<style scoped>

button {
    display: flex;
    align-items: center;
    background-color: #1f88e5;
    color: #ffffff;
    border: 0;
    font-size: 21px;
    line-height: 37px;
    min-width: 150px;
    border-radius: 20px;
    cursor: pointer;
    padding: 0 30px 0 30px;
    -webkit-box-shadow: 5px 5px 6px rgb(0 0 0 / 10%);
    box-shadow: 5px 5px 6px rgb(0 0 0 / 10%);
    font-family: 'Lato', sans-serif;
    justify-content: center;
}


button:hover {
    background-color: #3b98e9;
}
</style>
