<template>
    <div class="stars-background">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
    </div>
    <tradeHeader />
    <div class="container mx-auto mt-20">
        <div class="main-container__text scroll-animation uppercase">
            Presale
        </div>

        <div class="flex flex-col items-center mt-20">
            <div class="token-info bg-[#0D0D17] relative z-10">
                <div class="title">
                    <div class="logo">
                        <img src="../assets/img/transp_logo.png" alt="">
                    </div>
                    <div class="name">
                        solTrade Token
                    </div>
                </div>
                <div class="description">
                    <div class="adress bold">
                        Presale SOL Deposit Address:
                    </div>
                    <div class="text-sm">
                        8FAtw9FJREB4LUDPmVz9baVoyxtK1iDCqwYN49jdFWR9
                    </div>
                </div>
                <div class="description flex flex-row mb-0">
                    <div class="adress  mr-2">
                        Minimum per wallet:
                    </div>
                    <div class="adress">
                        1 SOL
                    </div>
                </div>
                <div class="description flex flex-row">
                    <div class="adress  mr-2">
                        Maximum per wallet:
                    </div>
                    <div class="adress">
                        25 SOL
                    </div>
                </div>

                <div class="description">

                    <div class="adress">
                        Ticker: <span class="bold">TRADE</span>
                    </div>
                    <div class="adress">
                        Supply: 250,000,000
                    </div>
                </div>
            </div>


            <div class="soltrade-ico">
                <img src="../assets/img/transp_logo.png" alt="">
            </div>


            <div class="token-info bg-[#0D0D17] relative z-10">
                <div class="title">
                    <div class="logo">
                        <img src="../assets/img/transp_logo.png" alt="">
                    </div>
                    <div class="name">
                        Fairlaunch Details
                    </div>
                </div>
              
              
                <div class="description flex flex-row">
                    <div class="adress  mr-2">
                        All presale deposits will be tracked and posted publicly on GitHub.
                    </div>
                </div>

                <div class="description flex flex-row">
                    <div class="adress  mr-2">
                        Do not dust Presale Deposit Address.
                    </div>
                </div>
                <div class="description flex flex-row mb-0">
                    <div class="adress  mr-2">
                        55% Presale
                    </div>
                </div>
                <div class="description flex flex-row mb-0">
                    <div class="adress  mr-2">
                        30% LP
                    </div>
                </div>
                <div class="description flex flex-row mb-0">
                    <div class="adress  mr-2">
                        10% CEX
                    </div>
                </div>
                <div class="description flex flex-row mb-0">
                    <div class="adress  mr-2">
                        5% Team
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
        tradeHeader
    }
}
</script>
<style scoped>
@import url(../assets/style/pages/presale.css);
</style>