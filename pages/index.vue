<template>
    <div class="stars-background">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
    </div>
    <headerComponent />
    <div class="main-container">
        <div class="main-container__text scroll-animation">
            DECENTRALIZED LEVERAGED TRADING
        </div>
        <div class="main-container__subtitle fade-in scroll-animation">
            Crypto, forex, and commodities. No sign up required.
        </div>
        <div class="main-container__buttons scroll-animation">
            <orangeBtn text="Start Trading" path="/trade" />
            <transparentBtn text="Presale" path="/presale" />
        </div>
        <div class="powered-b scroll-animation mx-auto flex justify-center mt-10">
            <a href="https://pyth.network/">
                <img width="100" height="100" src="../assets/img/pyth_logo_lockup_dark.svg" alt="">
            </a>
        </div>
        <div class="main-container__main_img scroll-animation">
            <a href="/trade">
                <img src="../assets/img/desktop-ui-dark.png" alt="Main Image">
            </a>
        </div>


        <div class="benefits-container ">
            <div class="benefits-container__title scroll-animation">
                Leveraged Trading on <span class="color-word">Solana</span>
            </div>

            <div class="benefits-container__benefit_box scroll-animation">
                <div class="benefit-box__item fade-in">
                    <div class="benefit-item__top">
                        <div class="benefit-item_top__image">
                            <img src="../assets/img/benefit-items/Solana.svg" alt="Solana Icon">
                        </div>
                        <div class="benefit-item_top__title">
                            Solana Native
                        </div>
                    </div>
                    <div class="benefit-item_bottom">
                        Take advantage of Solana’s speeds
                        and low-cost execution.
                    </div>
                </div>

                <div class="benefit-box__item fade-in">
                    <div class="benefit-item__top">
                        <div class="benefit-item_top__image">
                            <img src="../assets/img/benefit-items/decentralized-svgrepo-com.svg" alt="Solana Icon">
                        </div>
                        <div class="benefit-item_top__title">
                            Decentralized
                        </div>
                    </div>
                    <div class="benefit-item_bottom">
                        Trade directly from your Phantom or
                        preferred browser wallet.
                    </div>
                </div>

                <div class="benefit-box__item fade-in">
                    <div class="benefit-item__top">
                        <div class="benefit-item_top__image">
                            <img src="../assets/img/benefit-items/access.svg" alt="Solana Icon">
                        </div>
                        <div class="benefit-item_top__title">
                            Access to Leverage
                        </div>
                    </div>
                    <div class="benefit-item_bottom">
                        SolTrade provides leveraged
                        exposure to crypto & FX pairs.
                    </div>
                </div>

                <div class="benefit-box__item fade-in">
                    <div class="benefit-item__top">
                        <div class="benefit-item_top__image">
                            <img src="../assets/img/benefit-items/tether.svg" alt="Solana Icon">
                        </div>
                        <div class="benefit-item_top__title">
                            Bet against Traders
                        </div>
                    </div>
                    <div class="benefit-item_bottom">
                        Deposit USDT to earn a share of the
                        trading fees & trader losses.
                    </div>
                </div>
            </div>

        </div>
    </div>

    <div class="swap-section scroll-animation" >
       
        <div class="swap-header">
                <img src="../assets/img/transp-full-logo.png" alt="solTrade Logo">
        </div>

        <div class="swap-container">



            <div class="token-info">
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
          
        </div>
     
        
    </div>

    <div class="community-container scroll-animation">
        <div class="cs-title fade-in">
            Join our Community
        </div>
        <div class="cs-buttons">
            <a class="button" href="https://t.me/joinsoltrade" target="_blank">
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="telegram"
                    class="svg-inline--fa fa-telegram " role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512">
                    <path fill="currentColor"
                        d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z">
                    </path>
                </svg>
                <div class="cs-titl">Telegram</div>
            </a>

            <a class="button" href="https://twitter.com/soltradeapp" target="_blank">
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter"
                    class="svg-inline--fa fa-twitter " role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path fill="currentColor"
                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                    </path>
                </svg>
                <div class="cs-titl">Twitter</div>
            </a>
        </div>
    </div>
   <footerComponent />
</template>
<script>
import headerComponent from '~/components/headerComponent.vue';
import orangeBtn from '~/components/orangeBtn.vue';
import transparentBtn from '~/components/transparentButton.vue'
import { onMounted, ref } from 'vue';

import footerComponent from '~/components/footerComponent.vue'
export default {
    components: {
        headerComponent,
        orangeBtn,
        transparentBtn,
        footerComponent,
    },

    mounted() {
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const elements = document.querySelectorAll('.scroll-animation')
      const windowHeight = window.innerHeight
      
      elements.forEach(element => {
        const positionFromTop = element.getBoundingClientRect().top
        const isElementVisible = positionFromTop - windowHeight <= 0
        
        if (isElementVisible) {
          element.classList.add('animate__animated', 'animate__fadeInUp')
        }
      })
    }
  }

   
}
</script>
<style scoped>
@import url(../assets/style/pages/index.css);

.scroll-animation {
    opacity: 0; 
    transition: opacity 1s ease;
  }
  
  .scroll-animation.animate__fadeInUp {
    opacity: 1;
  }
</style>