<script setup lang="ts">

import PageSubTitle from './PageSubTitle.vue';
import Button from './Button.vue';

defineProps<{ title: string }>()
const emits = defineEmits(['cancel', 'confirm'])

</script>

<template>
<div class="editor-container">
   <div class="title-container">
      <PageSubTitle>{{title}}</PageSubTitle>
   </div>
   <slot></slot>
   <Button @click="emits('confirm')">Confirmar</Button>
   <Button @click="emits('cancel')">Cancelar</Button>
</div>
</template>

<style scoped>

.editor-container{
   height: 100%;
   box-shadow: -7px 0px 6px rgb(0 0 0 / 10%);
   width: 25%;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   padding-left: 30px;
   padding-right: 30px;
}

Button:first-of-type {
   margin-top: auto;
}

Button {
   text-align: center;
   margin: 10px 30px 10px 30px;
}

.title-container{
   margin-bottom: 50px;
}

</style>
