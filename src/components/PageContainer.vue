<template>
<div class="container">
<slot></slot>

</div>
</template>

<style scoped>

.container {
    margin-right:50px;
    padding-left: 50px;
    display:flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    width:100%;
    height: 100%;
    transition: width 1s;
}

</style>
