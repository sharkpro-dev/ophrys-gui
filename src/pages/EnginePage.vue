<script setup lang="ts">
import {ref} from "vue";
import PageContainer from '../components/PageContainer.vue';
import PageTitle from '../components/PageTitle.vue';
import engineRestClient from '../rest/engine.rest-client';
import PageSubTitle from "../components/PageSubTitle.vue";
import Table from "../components/Table.vue";
import Button from "../components/Button.vue";

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


    <div class=toolbar>
        <PageSubTitle>Workers</PageSubTitle>
        <Button> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg> Worker</Button>
    </div>




    <Table :rows="workers" :columns="workerColumns"></Table>
    
</PageContainer>

  
</template>

<style scoped>

PageTitle {
    width: 100%;
}
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
