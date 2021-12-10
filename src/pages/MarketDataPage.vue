<script setup lang="ts">
import { ref, onUnmounted } from "vue";
import PageContainer from '../components/PageContainer.vue';
import PageTitle from '../components/PageTitle.vue';
import marketDataRestClient from '../rest/market-data.rest-client';
import OphrysTicker from "../model/ophrys-ticker.model";
import OphrysDepth from "../model/ophrys-depth.model";
import Table from "../components/Table.vue";
import assetsService from "../services/assets.service";
import FinancialValue from "../components/FinancialValue.vue";
import SearchTextField from "../components/SearchTextField.vue";
import coins from "../assets/criptos.json";

let symbol = 'adausdt';

let depth = ref({} as OphrysDepth);
let ticker = ref({} as OphrysTicker);

let coinsData = Object.values(coins);

marketDataRestClient.getDepth(symbol).then(depthResponse => {
    depthResponse.asks = depthResponse.asks.filter( a => a[1] > 0)
    depthResponse.bids = depthResponse.bids.filter( b => b[1] > 0)
    depth.value = depthResponse;
});


let depthInterval = setInterval(() => {
    marketDataRestClient.getDepth(symbol).then(depthResponse => {
        depthResponse.asks = depthResponse.asks.filter( a => a[1] > 0)
        depthResponse.bids = depthResponse.bids.filter( b => b[1] > 0)
        depth.value = depthResponse;
    });
}, 2000)


marketDataRestClient.getTicker(symbol).then(tickerResponse => {
    ticker.value = tickerResponse;
});

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
        <PageTitle>Market Data</PageTitle>
        <div class="header">
            <img v-bind:src="logoUrl" />
            <div class="identifier">
                <SearchTextField :item-key="'key'" :limit="10" :item-presentation="'name'" :data-source="coinsData"  ></SearchTextField>
                <p class="name">{{ assetName }}</p>
                <p class="symbol">{{ ticker?.symbol }}</p>
            </div>
            <div class="sub-identifier">
                <FinancialValue class="last-price" :flash="true" :model-value="ticker?.last_price"></FinancialValue>
                <div
                    class="variation-container"
                    v-bind:class="{ 'decreasing': ticker?.price_change < 0, 'increasing': ticker?.price_change > 0 }"
                >
                    <FinancialValue class="variation" :model-value="ticker?.price_change"> </FinancialValue>
                    (<FinancialValue :model-value="ticker?.price_change_percent" :decimals="2" >  </FinancialValue>%)
                </div>
            </div>
            <div class="additional-data">
                <FinancialValue :flash="true" :label="'High price'" :model-value="ticker?.high_price"> </FinancialValue>
                <FinancialValue :flash="true" :label="'Low price'"  :model-value="ticker?.low_price"></FinancialValue>
                <FinancialValue :label="'N trades'" :decimals="0" :model-value="ticker?.number_of_trades"> </FinancialValue>
            </div>
            <div class="additional-data">

                <FinancialValue :label="'Opening price'" :model-value="ticker?.opening_price"> </FinancialValue>
                <FinancialValue :label="'Trade volume'" :model-value="ticker?.trade_volume" :decimals="2"> </FinancialValue>
                <FinancialValue :flash="true" :label="'VWAP'" :model-value="ticker?.vwap"> </FinancialValue>
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
    margin: auto 35px auto;
}
.identifier {
    display: flex;
    flex-direction: column;    
    align-items: flex-start;
    justify-content: center;
    margin-right: 50px;
}
.additional-data{
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 20px;
    margin-left: auto;
}
.additional-data p {
    white-space: nowrap;
    margin: 0
}

.header {
    display: flex;
    font-size: 25px;
    margin-left: 25px;
    margin-bottom: 55px;
    margin-top: 50px;
    width: 100%;

}

.sub-identifier {
    display: flex;
    align-items: center;
    line-height: 50px;
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
    font-weight: 300;
}

.name {
    font-size:45px;
    margin: 0;
    height: 55px;
    line-height: 55px;
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

FinancialValue {
    margin-right: 40px;
}
</style>
