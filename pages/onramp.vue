<template>
    <tradeHeader :class="{ scrolled: scrolled }" />
    <div class="container">
        <div class="navigation s">
            <div class="nav-item " :class="{ 'active': this.activeTab == 'buySolana' }"
                @click="scrollToSection('buySolana'), this.activeTab = 'buySolana'">
                0. Buy Solana
            </div>

            <div class="nav-item"  :class="{ 'active': this.activeTab == 'downloadWallet' }"
            @click="scrollToSection('downloadWallet'), this.activeTab = 'downloadWallet'">
                1. Download a Wallet
            </div>
            <div class="nav-item"  :class="{ 'active': this.activeTab == 'phantomWallet' }"
            @click="scrollToSection('phantomWallet'), this.activeTab = 'phantomWallet'">
                2. Send Solana to Browser Wallet
            </div>

            <div class="nav-item"  :class="{ 'active': this.activeTab == 'connect' }"
            @click="scrollToSection('connect'), this.activeTab = 'connect'">
                3. Connect to solTrade
            </div>
        </div>

        <div class="navigation f">
            <div class="nav-item " :class="{ 'active': this.activeTab == 'buySolana' }"
                @click="scrollToSection('buySolana'), this.activeTab = 'buySolana'">
                Buy
            </div>

            <div class="nav-item"  :class="{ 'active': this.activeTab == 'downloadWallet' }"
            @click="scrollToSection('downloadWallet'), this.activeTab = 'downloadWallet'">
                Wallet
            </div>
            <div class="nav-item"  :class="{ 'active': this.activeTab == 'phantomWallet' }"
            @click="scrollToSection('phantomWallet'), this.activeTab = 'phantomWallet'">
                Send
            </div>

            <div class="nav-item"  :class="{ 'active': this.activeTab == 'connect' }"
            @click="scrollToSection('connect'), this.activeTab = 'connect'">
                Connect
            </div>
        </div>

        <div class="text-box" id="buySolana">
            <div class="title xl">
                Buy crypto
            </div>
            <div class="description">
                Buy Solana <img class="solana-item" src="../assets/img/solana-icon.svg" alt="Solana Logo"> on a centralized exchange like
                Coinbase, Kraken, or Binance.
            </div>
            <div class="markets-icons">
                <img src="../assets/img/coinbase.png" alt="Coinbase Icon">
                <img src="../assets/img/kraken.png" alt="Kraken Icon">
                <img src="../assets/img/binance.webp" alt="Binance Icon">
            </div>

        </div>

        <div class="text-box" id="downloadWallet">
            <div class="title xl">
                Download a Wallet
            </div>
            <div class="description">
                <p>A digital browser wallet allows you to self-custody your own tokens. Make sure to back up your seed
                    phrase & private key! </p>
                <a href="https://phantom.app">Click here to download Phantom Browser Wallet</a>
                <div class="recomended-block">
                    <img src="../assets/img/phantom.svg" alt="Phantom icon">
                    <span>Recommended</span>
                </div>
                <a href="https://solana.com/ecosystem/explore?categories=wallet">Click here to view other choices on
                    Solana.com </a>
            </div>
        </div>

        <div class="text-box" id="phantomWallet">
            <div class="title xl">
                Send Solana to Browser Wallet
            </div>
            <div class="twice-block">
                <div class="tb-item">
                    <div class="tb-title">
                        Click receive SOL
                    </div>
                    <img src="../assets/img/sendSol.png" alt="">
                </div>

                <div class="tb-item">
                    <div class="tb-title">
                        Send SOL to your
                        address
                    </div>
                    <img src="../assets/img/reseivesol.png" alt="">
                </div>
            </div>
        </div>

        <div class="text-box" id="connect" >
            <div class="title xl">
                Connect to solTrade
            </div>
            <div class="twice-block horizontal">
                <div class="tb-item">
                    <div class="tb-title">
                        Click "Connect Wallet"
                    </div>
                    <img src="../assets/img/connectWallet.png" alt="">
                </div>

                <div class="tb-item">
                    <div class="tb-title">
                        Approve connection
                    </div>
                    <img width="250px" height="230px" src="../assets/img/aproveConnect.png" alt="">
                </div>
            </div>
        </div>

        <div class="text-box hidden">
            asd
        </div>
    </div>
</template>
<script>
import tradeHeader from '~/components/tradeHeader.vue'
export default {
    components: {
        tradeHeader
    },
    data() {
        return {
            scrolled: false,
            activeSection: null,
            activeTab: 'buySolana',
        }
    },

    methods: {
        scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
    }

}
</script>
<style scoped>
@import url(../assets/style/pages/onramp.css);
</style>