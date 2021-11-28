<script setup lang="ts">
import {ref} from "vue";
import PageContainer from '../components/PageContainer.vue';
import PageTitle from '../components/PageTitle.vue';
import engineRestClient from '../rest/engine.rest-client';
import Worker from "../components/Worker.vue";
import PageSubTitle from "../components/PageSubTitle.vue";
import Table from "../components/Table.vue";

let workers = ref([]) as any;

workers.value = await engineRestClient.getWorkers();

let workerColumns = [
    { key: 'uuid', name: "ID", type: 'string'},
    { key: 'name', name: "Name", type: 'string'},
    { key: 'status', name: "Status", type: 'string'}
];

</script>

<template>

<PageContainer>
    <PageTitle>Engine</PageTitle>

    <PageSubTitle>Workers</PageSubTitle>


    <Table :rows="workers" :columns="workerColumns"></Table>
    
</PageContainer>

  
</template>

<style scoped>

PageTitle {
    width: 100%;
}

</style>
