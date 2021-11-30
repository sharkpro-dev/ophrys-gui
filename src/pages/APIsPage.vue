<script setup lang="ts">

import {ref} from "vue";
import PageContainer from '../components/PageContainer.vue';
import PageTitle from '../components/PageTitle.vue';
import apisRestClient from '../rest/apis.rest-client';
import PageSubTitle from '../components/PageSubTitle.vue';
import Table from "../components/Table.vue";
import Button from "../components/Button.vue";

let subscriptions = ref([]) as any;

subscriptions.value = await apisRestClient.getSubscriptions();
console.log(subscriptions.value )
let subscriptionColumns = [
    { key: 'id', name: "ID", type: 'string'},
];

</script>

<template>

    <PageContainer>
        <PageTitle>APIs</PageTitle>

        <div class=toolbar>
            <PageSubTitle>Subscriptions</PageSubTitle>
            <Button> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg> Subscription</Button>

        </div>


        <Table :rows="subscriptions" :columns="subscriptionColumns"></Table>
    
    </PageContainer>

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

</style>
