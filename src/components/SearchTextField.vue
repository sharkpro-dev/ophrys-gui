<script setup lang="ts">

import { ref } from 'vue';

let showList = ref(true);

const props = defineProps({
  dataSource: Object,
  itemKey: String,
  itemPresentation: String,
  modelValue: String,
  limit: Number
})

const emit = defineEmits(['update:modelValue'])



</script>

<template>
    <div class="input-container">
        <input @focusin="showList=true" @focusout="showList=false" type="text" :value="props.modelValue">
        <transition name="slide-fade">
            <div class="options-container" v-if="showList">
                <option v-for="item in props.dataSource?.slice(0,props.limit)"  @click="(e)=> $emit('update:modelValue', item[props?.itemKey as string])" >{{item[props?.itemPresentation as string]}}</option>
            </div>
        </transition>
    </div>
</template>

<style scoped>

.input-container{
    position: relative;
}


input {
    border: 0;
    border-bottom: 2px solid #0000002e;
    line-height: 25px;
    height: 40px;
    font-size: 25px;
    font-family: 'Lato', sans-serif;
    width: 100%;
    cursor: pointer;
    padding:0;
}

input:hover {
    border-bottom: 2px solid #0000002e;
}

input:focus{
    outline: none;
    border-bottom: 2px solid #1E88E5;
}

.options-container{
    background-color: #ffffff;
    position: absolute;
    top:42px;
    width: 100%;
    box-shadow: 3px 6px 8px 5px rgb(0 0 0 / 10%);
}


option {
    text-align: initial;
    padding: 5px 0 5px 5px;

}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
