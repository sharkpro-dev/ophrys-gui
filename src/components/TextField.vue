<script setup lang="ts">

const props = defineProps({
  label: String,
  modelValue: String
})

const emit = defineEmits(['update:modelValue'])



</script>

<template>
    <div class="input-container">
        <label><slot></slot></label>
        <input type="text" :value="props.modelValue" @input="(e)=> $emit('update:modelValue', e?.target?.value)">
    </div>
</template>

<style scoped>


.input-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

label{
    color: #00000081;
}

input {
    border: 0;
    border-bottom: 2px solid #0000002e;
    line-height: 25px;
    height: 40px;
    font-size: 25px;
    font-family: 'Lato', sans-serif;
    width: 100%;

}

input:focus{
    outline: none;
    border-bottom: 2px solid #1E88E5;
}
</style>
