<script setup lang="ts">

import { ref, computed } from 'vue';

let showList = ref(false);
let textFieldText = ref("")

const props = defineProps({
  dataSource: Object,
  itemKey: String,
  itemPresentation: String,
  modelValue: String,
  limit: Number
})

const emit = defineEmits(['update:modelValue'])

const filteredDataSet = computed(() => {
    console.log(textFieldText.value)
    return props.dataSource?.filter( (o:any) => o[props?.itemPresentation as string].toUpperCase().includes(textFieldText.value.toUpperCase()) )
});

function handleOptionClick(e: Event, item: any) {
    textFieldText.value = item[props?.itemPresentation as string];
    emit('update:modelValue', item[props?.itemKey as string])
     console.log(props.modelValue)
}

</script>

<template>
    <div class="input-container">
        <input @focusin="showList=true" @focusout="showList=false" type="text" :value="textFieldText" @input="textFieldText = $event?.target?.value" >
        <transition name="slide-fade">
            <div class="options-container" v-if="showList">
                <option v-for="item in filteredDataSet?.slice(0,props.limit)"  @click="(e) => handleOptionClick(e, item)">{{item[props?.itemPresentation as string]}}</option>
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
    line-height: 25px;
    height: 55px;
    font-family: 'Lato', sans-serif;
    width: 100%;
    max-width: 300px;
    cursor: pointer;
    padding:0;
    font-size: 45px;
    border: 2px solid transparent;

}

input:hover {
    border-bottom: 2px inset #0000002e;
}

input:focus{
    outline: none;
    border-bottom: 2px solid #1E88E5;
}

.options-container{
    background-color: #ffffff;
    position: absolute; 
    top:59px;
    width: 100%;
    box-shadow: 3px 6px 8px 5px rgb(0 0 0 / 10%);
}


option {
    text-align: initial;
    padding: 5px 0 5px 5px;
    cursor: pointer;
}

option:hover {
    background-color: #0000002e;
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
