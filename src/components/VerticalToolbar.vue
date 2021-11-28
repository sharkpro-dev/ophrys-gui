<script setup lang="ts">
import { RouterLink } from 'vue-router';

let appVersion = window.__APP_VERSION__;

defineProps({
    upHere: {
        type: Boolean,
        value: false
    }   
})

</script>

<template>

<nav @mouseover="upHere = true" @mouseleave="upHere = false">
    <router-link to="/">
        <div class="logo" >
            <img alt="Vue logo" src="../assets/logo.svg"  v-bind:class="{ effect: upHere }" /> <p class="ophrys"  v-bind:class="{ displayed: upHere }">Ophrys</p>
        </div>
    </router-link>
    <ul>
        <li>
            <router-link to="/engine">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <p  v-bind:class="{ displayed: upHere }">
                    Engine
                </p>
            </router-link>
        </li>
        <li>
            <router-link to="/market-data">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                <p v-bind:class="{ displayed: upHere }">
                    Market Data
                </p>
            </router-link>
        </li>
        <li>
            <router-link to="/apis">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                <p  v-bind:class="{ displayed: upHere }">
                    APIs
                </p>
            </router-link>            
        </li>
    </ul>
    <p v-bind:class="{ displayed: upHere }">v{{ appVersion }}</p>
</nav>
  
</template>

<style scoped>
img {
    height: 55px;
    width: 55px;
    padding: 10px 15px 10px 15px;
    transition: transform 1s;
}

img.effect {
    transform:rotate(90deg); 
}

nav {
    display: flex;
    flex-direction: column;
    background-color: #1E88E5;
    -webkit-box-shadow: 7px 0 6px rgb(0 0 0 / 10%);
    box-shadow: 7px 0 6px rgb(0 0 0 / 10%);
    width:80px;
    transition: width 0.25s;
    font-size: 18px;
    height: 100%;
}

nav:hover {
    width: 200px;
    transition: width 1s;

}

a{
    cursor: pointer;
    display:flex;
    min-width: 200px;
    flex-direction: row;
    color: #ffffff;
    text-decoration: none;
}

li {
    margin-bottom: 10px;
    transition: background-color 0.5s;

}

li:hover{
    background-color: #00000017
}

ul {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    padding: 10px 0;
    margin:0;
}


svg {
    height: 35px;
    width: 35px;
    padding: 10px 15px 10px 22px;
}

.logo {
    font-family: 'Moul', cursive;
    display:flex;
    flex-direction: row;
    cursor: default;
}


p{
    visibility: hidden;
    opacity: 0;
    transition: none;
    cursor: pointer;
    color: #ffffff;
}
p.displayed {
    visibility: visible;
    transition: visibility 0.5s 0.35s, opacity 0.5s 0.35s linear;
    opacity: 1;
}

p:last-of-type {
  margin-top: auto;
}

</style>
