<script setup lang="ts">
import { ref, onUnmounted } from "vue";
import PageContainer from '../components/PageContainer.vue';
import PageTitle from '../components/PageTitle.vue';
import marketDataRestClient from '../rest/market-data.rest-client';
import OphrysTicker from "../model/ophrys-ticker.model";
import OphrysDepth from "../model/ophrys-depth.model";
import Table from "../components/Table.vue";
import assetsService from "../services/assets.service";

let symbol = 'usdtdai';

let depth = ref({} as OphrysDepth);
let ticker = ref({} as OphrysTicker);

let depthInterval = setInterval(() => {
    marketDataRestClient.getDepth(symbol).then(depthResponse => {
        depth.value = depthResponse;
    });
}, 2000)

let tickerInterval = setInterval(() => {
    marketDataRestClient.getTicker(symbol).then(tickerResponse => {
        ticker.value = tickerResponse;
    });
}, 2000)

let bidColumns = [
    { key: 1, name: "Qtty.", type: 'string' },
    { key: 0, name: "Price", type: 'string' }
];

let askColumns = [
    { key: 0, name: "Price", type: 'string' },
    { key: 1, name: "Qtty.", type: 'string' }
];

onUnmounted(() => {
    clearInterval(depthInterval)
    clearInterval(tickerInterval)
})

let logoUrl = assetsService.getCoinLogoUrl(symbol)
let assetName = assetsService.getCoinName(symbol)
</script>

<template>
    <PageContainer>
        <PageTitle>MarketData</PageTitle>
        <div class="header">
            <img v-bind:src="logoUrl" />
            <div class="identifier">
                <p class="name">{{ assetName }}</p>
                <p class="symbol">{{ ticker?.symbol }}</p>
            </div>
            <div class="sub-identifier">
                <p class="last-price">{{ ticker?.last_price.toPrecision(4) }}</p>
                <div
                    class="variation-container"
                    v-bind:class="{ 'decreasing': ticker?.price_change < 0, 'increasing': ticker?.price_change > 0 }"
                >
                    <p class="variation">{{ ticker?.price_change.toPrecision(4) }}</p>
                    <p>({{ ticker?.price_change_percent.toPrecision(3) }}%)</p>
                </div>
            </div>
        </div>
        <div class="depth">
            <Table class="bid" :rows="depth.bids" :columns="bidColumns"></Table>
            <Table class="ask" :rows="depth.asks" :columns="askColumns"></Table>
        </div>
    </PageContainer>
</template>

<style scoped>
img {
    height: auto;
    margin: auto 25px auto auto;
}
.identifier {
    display: flex;
    flex-direction: column;    
    align-items: flex-start;
    justify-content: center;
    margin-right: 50px;
}
.header {
    display: flex;
    font-size: 25px;
    margin-left: 25px;
}

.sub-identifier {
    display: flex;
    align-items: baseline;
    line-height: 0;
    margin:0;
    margin-right: 50px;
}

.depth {
    display: flex;
    width: 800px;
}

.symbol {
    font-size:25px;
    margin: 0;
    height: 40px;
    line-height: 40px;
    font-weight: 600;
}

.name {
    font-size:45px;
    margin: 0;
    height: 50px;
    line-height: 50px;
}

.last-price {
    font-size: 60px;
    font-weight: bold;
    margin-right: 20px;
}

.variation-container {
    display: flex;
    align-items: baseline;
}

.variation {
    font-size: 30px;
}

.decreasing {
    color: #f05350;
}

.increasing {
    color: #26a69a;
}

.bid {
    color: #26a69a;
}
.ask {
    color: #f05350;
}
</style>
