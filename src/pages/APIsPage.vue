<script setup lang="ts">

import {ref} from "vue";
import PageContainer from '../components/PageContainer.vue';
import PageTitle from '../components/PageTitle.vue';
import apisRestClient from '../rest/apis.rest-client';
import PageSubTitle from '../components/PageSubTitle.vue';
import Table from "../components/Table.vue";
import Button from "../components/Button.vue";
import Editor from "../components/Editor.vue";
import TextField from "../components/TextField.vue";

let subscriptions = ref([]) as any;
let stream = ref() as any;
let showSubscriptionEditor = ref(false);

subscriptions.value = await apisRestClient.getSubscriptions();

let subscriptionColumns = [
    { key: 'id', name: "ID", type: 'string'},
];

function showEditor() {
    showSubscriptionEditor.value = true;
}

function hideEditor() {
    showSubscriptionEditor.value = false;
}

async function subscribe(){
    await apisRestClient.subscribe(stream.value);
}

</script>

<template>
    <PageContainer>
        <PageTitle>APIs</PageTitle>

        <div class=toolbar>
            <PageSubTitle>Subscriptions</PageSubTitle>
            <Button @click="showEditor"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg> Subscription</Button>
        </div>
        <Table :rows="subscriptions" :columns="subscriptionColumns"></Table>
    </PageContainer>
    <transition name="slide">
        <Editor v-if="showSubscriptionEditor" @confirm="subscribe" @cancel="hideEditor" :title="'New Subscription'">
    
            <TextField v-model="stream">Stream</TextField>
        
        </Editor>
    </transition>
</template>

<style scoped>
.toolbar {
    display: flex;
    align-items: center;
    width: 100%;
}

button{
    margin-left: auto;
}

button svg {
    width: 30px;
    height: 30px;
}

.slide-leave-active,
.slide-enter-active {
  transition: 1s;
}
.slide-enter-from ,
.slide-leave-to {
  transform: translate(100%, 0);
}
</style>
