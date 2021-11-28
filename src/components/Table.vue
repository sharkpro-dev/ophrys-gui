<script setup lang="ts">

import { PropType } from 'vue';


defineProps({
    rows: {
        type: Object as PropType<any>,
        value: []
    },
    columns: {
        type: Object as PropType<{name: string, key: string,type: any}[]>,
        value: []
    }  
})

</script>

<template>

    <div class=container>

        <div class=header>
            <p v-for="column in columns">{{column.name}}</p>
        </div>
        
        <div  v-for="row in rows" class=row>
            <p v-for="column in columns">{{row[column.key]}}</p>
        </div>

    </div>

</template>


<style scoped>

.container {
    display: flex;
    flex-direction: column;
    width: -webkit-fill-available;
    padding: 0 09 0 100px;
}

.header {
    font-weight: bold;
    margin-bottom:20px;
}

.header, .row {
    display: flex;
    width: 100%;
    justify-content: space-between;
}

.row {
    margin-bottom:10px;
}

.row:hover {
    background-color: rgb(0 0 0 / 10%);
}

p {
    width: 100%;
}

</style>
