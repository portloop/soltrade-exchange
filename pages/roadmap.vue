<template>
    <tradeHeader />

    <div class="container">
        <div class="first-section">
            <div class="leftside">
                <img src="../assets/img/SOLtrade.png" alt="">
            </div>
            <div class="rightside">
                <div class="item">
                    <div class="icon">
                        -
                    </div>
                    <div class="text">
                        Exit stealth mode
                    </div>

                    <div class="arrow">
                        <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591-1.299-1.002-3.945-3.044-5.498-4.243z"/></svg>
                    </div>
                </div>

                <div class="item">
                    <div class="icon">
                        Q3
                    </div>
                    <div class="text">
                        Launch BTC/USD, SOL/USD,
                        ETH/USD pairs
                    </div>
                    <div class="arrow">
                        <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591-1.299-1.002-3.945-3.044-5.498-4.243z"/></svg>
                    </div>
                </div>

                <div class="item">
                    <div class="icon">
                        Q4
                    </div>
                    <div class="text">
                        Launch FX pairs & altcoins
                    </div>
                    <div class="arrow">
                        <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591-1.299-1.002-3.945-3.044-5.498-4.243z"/></svg>
                    </div>
                </div>
                <div class="item">
                    <div class="icon">
                        Q5
                    </div>
                    <div class="text">
                        USDT dividends to TRADE Q4 holders
                    </div>
                    <div class="arrow">
                        <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591-1.299-1.002-3.945-3.044-5.498-4.243z"/></svg>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
</template>
<script>
import tradeHeader from '../components/tradeHeader.vue'
export default {
    components: {
        tradeHeader,
    }
}
</script>
<style scoped>
    @import url(../assets/style/pages/roadmap.css)
</style>