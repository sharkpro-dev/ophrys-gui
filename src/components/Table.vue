<script setup lang="ts">

import { PropType } from 'vue';


defineProps({
    rows: {
        type: Object as PropType<any>,
        value: []
    },
    columns: {
        type: Object as PropType<{name: string, key: any,type: any}[]>,
        value: []
    }  
})

</script>

<template>
    <div class=container>
        <div class=header>
            <p v-for="column in columns">{{column.name}}</p>
        </div>
        <hr>
        <div  v-for="row in rows" class=row>
            <p v-for="column in columns">{{row[column.key]}}</p>
        </div>
    </div>
</template>


<style scoped>
hr {
    width: -webkit-fill-available;
    margin: 10px;
    height: 1px;
    border-width: 0;
    color: rgb(0 0 0 / 15%);
    background-color: rgb(0 0 0 / 15%);
}
.container {
    display: flex;
    flex-direction: column;
    line-height: 5px;
    width: -webkit-fill-available;
}

.header {
    font-weight: bold;
    color: black;
}

.header, .row {
    display: flex;
    width: 100%;
    justify-content: space-between;
}

.row:hover {
    background-color: rgb(0 0 0 / 10%);
}

p {
    width: 100%;
}

</style>
