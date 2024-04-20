<template>
    <div class="stars-background">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
    </div>
    <tradeHeader />

    <div class="container m-auto">
        <div class="first-section">
            <div class="leftside">
                <img src="../assets/img/biglogo.png" alt="">
                <img class="screenshot" src="../assets/img/desktop-ui-dark.png" alt="">
            </div>
            <div class="rightside">
                <div class="item">
                    <div class="icon">
                        Presale
                    </div>
                   

                   
                </div>

                <div class="item">
                    <div class="icon">
                        Q3 2024
                    </div>
                    <div class="text">
                        Launch BTC/USD, SOL/USD,
                        ETH/USD pairs
                    </div>
                   
                </div>

                <div class="item">
                    <div class="icon">
                        Q3 2024
                    </div>
                    <div class="text">
                        USDT dividends to
                        $TRADE holders
                    </div>
                   
                </div>

                <div class="item">
                    <div class="icon">
                        Q4 2024
                    </div>
                    <div class="text">
                        Launch FX pairs & altcoins
                    </div>
                  
                </div>
               
            </div>
        </div>
       
    </div>

    <div class="Tokenomics">Benefits from Holding $TRADE</div>
    <div class="container m-auto">
        <div class="first-section">
            <div class="leftside">
                <img src="../assets/img/biglogo.png" alt="">
            </div>
            <div class="rightside">
                <div class="item">
                    <!-- <div class="icon">
                        5%
                    </div> -->
                    <div class="text">
                        Earn a share of the
                        platform’s trading
                        fees
                    </div>

                 
                </div>

                <div class="item">
                    <!-- <div class="icon">
                        25%
                    </div> -->
                    <div class="text">
                        Discount on trading
                        fees for holding
                        certain thresholds of
                        $TRADE
                    </div>
                   
                </div>

                <div class="item">
                    <!-- <div class="icon">
                        30%
                    </div> -->
                    <div class="text">
                        Early access to new
                        $TRADE markets
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