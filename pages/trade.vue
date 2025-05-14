<template>
    <tradeHeader />
    <div class="main-trade__container">
        <div class="main-trade__leftside">
            <div class="deal-block" v-if="dealSectionActionTab">
                <div class="deal-block__header">
                    <div class="deal-block__header_item" @click="changeToLong"
                        :class="{ 'active': this.dealSectionActionTab == 'long' }">
                        Long
                    </div>

                    <div class="deal-block__header_item" @click="changeToShort"
                        :class="{ 'active': this.dealSectionActionTab == 'short' }">
                        Short
                    </div>
                </div>
                <div class="deal-block__deal_type">
                    <div class="deal-block__deal_type_item" @click="this.dealType = 'market'"
                        :class="{ 'active': this.dealType == 'market' }">
                        Market
                    </div>
                    <div class="deal-block__deal_type_item" @click="this.dealType = 'limit'"
                        :class="{ 'active': this.dealType == 'limit' }">
                        Limit
                    </div>
                    <div class="deal-block__deal_type_item" @click="this.dealType = 'stop'"
                        :class="{ 'active': this.dealType == 'stop' }">
                        Stop
                    </div>

                </div>
                <div class="deal-amount__container">
                    <input type="text" value="50" max="20000">

                    <div class="deal-amount-title">
                        Collateral <span class="light-text">(50 - 20,0k)</span>
                    </div>
                    <a class="deal-amount-link" href='/onramp'>
                        Get Collateral
                    </a>
                    <div class="deal-amount-dropdown">

                    </div>
                </div>
                <div class="deal-amount-range__container">
                    <div class="da-range__header">
                        <div class="da-range__header_title">
                            Leverage <span>(2x-150x)</span>
                        </div>
                        <div class="da-range__input">
                            <input readonly v-model="dealLeverage" ype="text">
                        </div>
                    </div>
                    <input class="styled-slider slider-progress" v-model="dealLeverage" type="range" min="2" max="150"
                        step="2" />
                </div>
                <!-- <button class="deal-connect__button">Connect Wallet</button> -->
                <connectButtonLong />
            </div>
        </div>
        <div class="main-trade__rightside">
            <div class="main-trade-rightside__header">
                <div class="star">
                    <svg fill="gold" width="17" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                        class="svg-inline--fa fa-star FavoritePairsContainer_star__0Oxoz" role="img"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z">
                        </path>
                    </svg>
                </div>
                <div class="crypto-price" @click="this.activeToken = 'sol'">
                    <div class="leftside">
                        <img src="../assets/img/solana-icon.svg" alt="Solana Logo">
                        <span>SOL/USD</span>
                    </div>
                    <div class="rightside"
                        :class="{ 'green': this.solPrice > this.prevSolPrice, 'red': this.prevSolPrice >= this.solPrice }">
                        {{ solPrice }}
                    </div>
                </div>

                <div class="crypto-price" @click="this.activeToken = 'btc'">
                    <div class="leftside">
                        <img src="../assets/img/btc.35b3abfb.svg" alt="Bitcoin Logo">
                        <span>BTC/USD</span>
                    </div>
                    <div class="rightside"
                        :class="{ 'green': this.btcPrice > this.prevBtcPrice, 'red': this.prevBtcPrice >= this.btcPrice }">
                        {{ btcPrice }}
                    </div>
                </div>

              

                <div class="crypto-price" @click="this.activeToken = 'eth'">
                    <div class="leftside">
                        <img src="../assets/img/eth-icon.svg" alt="Solana Logo">
                        <span>ETH/USD</span>
                    </div>
                    <div class="rightside"
                        :class="{ 'green': this.ethPrice > this.prevEthPrice, 'red': this.prevEthPrice >= this.ethPrice }">
                        {{ ethPrice }}
                    </div>
                </div>
            </div>

            <div class="main-price-widget">
                <div class="main-crypto__price"
                    @click="this.showDropdown ? this.showDropdown = false : this.showDropdown = true;">
                    <img src="../assets/img/btc.35b3abfb.svg" v-if="this.activeToken == 'btc'" alt="Bitcoin Icon">
                    <img src="../assets/img/solana-icon.svg" v-if="this.activeToken == 'sol'" alt="Solana Icon">
                    <img src="../assets/img/eth-icon.svg" v-if="this.activeToken == 'eth'" alt="ETH Icon">
                    <div class="token-info" v-if="this.activeToken == 'sol'">
                        <div class="token-info__name">SOL/USD</div>
                        <div class="token-info__description">
                            Solana to US Dollar
                        </div>
                    </div>
                    <div class="token-info" v-if="this.activeToken == 'btc'">
                        <div class="token-info__name">BTC/USD</div>
                        <div class="token-info__description">
                            Bitcoin to US Dollar
                        </div>
                    </div>
                  
                    <div class="token-info" v-if="this.activeToken == 'eth'">
                        <div class="token-info__name">ETH/USD</div>
                        <div class="token-info__description">
                            Ethereum to US Dollar
                        </div>
                    </div>
                    <div class="arrow">
                        <svg width="20" height="20" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round"
                            stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="m16.843 10.211c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291 1.002-1.299 3.044-3.945 4.243-5.498z" />
                        </svg>
                    </div>

                    


                    <div class="main-crypto__price_dropdown" v-show="showDropdown">
                        <div class="token" @click="this.activeToken = 'sol'">
                            <img src="../assets/img/solana-icon.svg" alt="Bitcoin Icon">
                            <div class="token-info">
                                <div class="token-info__name">SOL/USD</div>
                                <div class="token-info__description">
                                    Solana to US Dollar
                                </div>
                            </div>
                        </div>
                        <div class="token" @click="this.activeToken = 'btc'">
                            <img src="../assets/img/btc.35b3abfb.svg" alt="Bitcoin Icon">
                            <div class="token-info">
                                <div class="token-info__name">BTC/USD</div>
                                <div class="token-info__description">
                                    Bitcoin to US Dollar
                                </div>
                            </div>
                        </div>
                      

                        <div class="token" @click="this.activeToken = 'eth'">
                            <img src="../assets/img/eth-icon.svg" alt="ETH Icon">
                            <div class="token-info">
                                <div class="token-info__name">ETH/USD</div>
                                <div class="token-info__description">
                                    Ethereum to US Dollar
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="token-price">
                    <div v-if="this.activeToken == 'btc'">{{ btcPrice }}</div>
                    <div v-if="this.activeToken == 'sol'">{{ solPrice }}</div>
                    <div v-if="this.activeToken == 'eth'">{{ ethPrice }}</div>
                </div>
            </div>

            <btcChart class="chart" v-if="this.activeToken == 'btc'" />
            <SolChart class="chart" v-if="this.activeToken == 'sol'" />
            <ethChart class="chart" v-if="this.activeToken == 'eth'" />
            <div class="order-list">
                <div class="order-list__header">
                    <div class="leftside">
                        <div class="tab" :class="{ 'active': this.activeHistoryTab == 'trades' }"
                            @click="this.activeHistoryTab = 'trades'">Trades (0)</div>
                        <div class="tab" :class="{ 'active': this.activeHistoryTab == 'orders' }"
                            @click="this.activeHistoryTab = 'orders'">Orders (0)</div>
                        <div class="tab" :class="{ 'active': this.activeHistoryTab == 'history' }"
                            @click="this.activeHistoryTab = 'history'">History</div>
                    </div>
                    <div class="rightside">
                        <div class="sort_btn">
                            All
                        </div>
                        <div class="icon">
                            <svg aria-hidden="true" focusable="false" data-prefix="fasl" data-icon="gear"
                                class="svg-inline--fa fa-gear IconButton_iconSm__9PdjF" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor"
                                    d="M195 108c-13.2 5.4-25.5 12.6-36.7 21.2l-13.3 10.2-16-5.1-52-16.6L46.9 170.2l40.3 36.7 12.4 11.3-2.2 16.6c-.9 6.9-1.4 14-1.4 21.2s.5 14.3 1.4 21.2l2.2 16.6L87.2 305.1 46.9 341.8l30.2 52.4 52-16.6 16-5.1 13.3 10.2c11.2 8.6 23.5 15.8 36.7 21.2l15.5 6.4 3.6 16.4L225.8 480h60.5l11.7-53.3 3.6-16.4L317 404c13.2-5.4 25.5-12.6 36.7-21.2l13.3-10.2 16 5.1 52 16.6 30.2-52.4-40.3-36.7-12.4-11.3 2.2-16.6c.9-6.9 1.4-14 1.4-21.2s-.5-14.3-1.4-21.2l-2.2-16.6 12.4-11.3 40.3-36.7-30.2-52.4-52 16.6-16 5.1-13.3-10.2c-11.2-8.6-23.5-15.8-36.7-21.2l-15.5-6.4-3.6-16.4L286.2 32H225.8L214.1 85.3l-3.6 16.4L195 108zM200 0H312l17.2 78.4c15.8 6.5 30.6 15.1 44 25.4l76.5-24.4 56 97-59.4 54.1c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l59.4 54.1-56 97-76.5-24.4c-13.4 10.3-28.2 18.9-44 25.4L312 512H200l-17.2-78.4c-15.8-6.5-30.6-15.1-44-25.4L62.3 432.5l-56-97 59.4-54.1C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L6.3 176.5l56-97 76.5 24.4c13.4-10.3 28.2-18.9 44-25.4L200 0zM312 256a56 56 0 1 0 -112 0 56 56 0 1 0 112 0zm-144 0a88 88 0 1 1 176 0 88 88 0 1 1 -176 0z">
                                </path>
                            </svg>
                        </div>
                        <div class="icon">
                            <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="down-from-line"
                                class="svg-inline--fa fa-down-from-line IconButton_iconSm__9PdjF" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M190.2 447.2c.5 .5 1.1 .8 1.8 .8s1.4-.3 1.8-.8L318.2 315.3c1.2-1.2 1.8-2.9 1.8-4.6c0-3.7-3-6.7-6.7-6.7H256c-8.8 0-16-7.2-16-16V168c0-4.4-3.6-8-8-8H152c-4.4 0-8 3.6-8 8V288c0 8.8-7.2 16-16 16H70.7c-3.7 0-6.7 3-6.7 6.7c0 1.7 .7 3.3 1.8 4.6L190.2 447.2zM192 480c-9.5 0-18.6-3.9-25.1-10.8L42.5 337.2C35.8 330 32 320.5 32 310.7C32 289.3 49.3 272 70.7 272H112V168c0-22.1 17.9-40 40-40h80c22.1 0 40 17.9 40 40V272h41.3c21.4 0 38.7 17.3 38.7 38.7c0 9.9-3.8 19.4-10.5 26.5L217.1 469.2c-6.5 6.9-15.6 10.8-25.1 10.8zM16 32H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H16C7.2 64 0 56.8 0 48s7.2-16 16-16z">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="order-list__body">
                    <span v-if="!showText">Wallet not connected</span>
                    <transactionConnectBtn @publicKeyReceived="handlePublicKeyReceived" />
                  </div>
            </div>
        </div>

    </div>
</template>
<script>
import tradeHeader from '../components/tradeHeader.vue';
import { connectWebSocket } from '../services/websocketService.js';
import btcChart from '~/components/btcChart.vue'
import solChart from '~/components/solChart.vue'
import transactionConnectBtn from '~/components/transactionConnectBtn.vue';
import ethChart from '~/components/ethChart.vue'
// import connectButton from '~/components/connectButton.vue'
import connectButtonLong from '~~/components/connectButtonLong.vue';
import { defineComponent, ref } from 'vue'


export default {
    components: {
        tradeHeader,
        btcChart,
        // connectButton,
        connectButtonLong,
        transactionConnectBtn
    },

    data() {
        return {
            dealSectionActionTab: 'long',
            dealType: 'market',
            dealLeverage: 0,
            btcPrice: null,
            solPrice: null,
            ethPrice: null,
            showDropdown: false,
            activeHistoryTab: 'orders',

            prevBtcPrice: null,
            prevSolPrice: null,
            prevEthPrice: null,
            activeToken: 'sol'
        }
    },

    methods: {
        changeToLong() {
            this.dealSectionActionTab = 'long'
        },

        changeToShort() {
            this.dealSectionActionTab = 'short'
        },

        updateBTCPrice(price) {
            this.prevBtcPrice = this.btcPrice
            this.btcPrice = parseFloat(price).toFixed(2);
        },
        updateSOLPrice(price) {
            this.prevSolPrice = this.solPrice
            this.solPrice = parseFloat(price).toFixed(2);;
        },
        updateETHPrice(price) {
            this.prevEthPrice = this.ethPrice
            this.ethPrice = parseFloat(price).toFixed(2);;
        },

        calculateChangeAndPercentage(oldValue, newValue) {
            const change = newValue - oldValue;
            const percentageChange = (change / oldValue) * 100;
            return percentageChange.toFixed(4)
        }
    },

    mounted() {
        for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
            e.style.setProperty('--value', e.value);
            e.style.setProperty('--min', e.min == '' ? '0' : e.min);
            e.style.setProperty('--max', e.max == '' ? '100' : e.max);
            e.addEventListener('input', () => e.style.setProperty('--value', e.value));
        }

        connectWebSocket(this.updateBTCPrice, this.updateSOLPrice, this.updateETHPrice);

    },

    setup() {
    const showText = ref(true)

    const handlePublicKeyReceived = () => {
      showText.value = false
    }

    return {
      showText,
      handlePublicKeyReceived
    }
  }


}
</script>
<style scoped>
@import url(../assets/style/pages/trade.css)
</style>