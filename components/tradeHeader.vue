<template>
    <header>
        <div class="header-container">
            <div class="header-container__leftside">
                <a href="/" class="header-container__logo">
                    <img src="../assets/img/weblogo transparent.png" alt="Logo Image">
                </a>
                <a href="/" class="header-container__logo_mobile">
                    <img src="../assets/img/mobile-logo.png" alt="Logo Image">
                </a>
                <div class="header-container__menu">
                    <a href="/trade" class="header-container__menu_item active"> 
                        Trade
                    </a>
                    <a href="/" class="header-container__menu_item"> 
                        Portfolio
                    </a>
                    <a href="/earn" class="header-container__menu_item"> 
                        Earn
                    </a>
                    <a href="/stats" class="header-container__menu_item"> 
                        Stats
                    </a>
                    <a href="/more" class="header-container__menu_item"> 
                        More
                    </a>
                    <a href="/buy" class="header-container__menu_item"> 
                        Buy Crypto
                    </a>
                </div>
            </div>
            <div class="header-container__rightside">
                <div class="network-dropdown">
                    <div class="network-dropdown__name">
                        <div class="logo">
                            <svg width="20" height="20" viewBox="0 0 715 560" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_402_2)">
                                <path d="M116.06 427.411C120.372 423.099 126.301 420.584 132.589 420.584H702.83C713.25 420.584 718.46 433.16 711.094 440.526L598.447 553.173C594.135 557.485 588.207 560 581.918 560H11.6779C1.25762 560 -3.95252 547.424 3.41354 540.058L116.06 427.411Z" fill="url(#paint0_linear_402_2)"/>
                                <path d="M116.06 6.82708C120.552 2.51524 126.481 0 132.589 0H702.83C713.25 0 718.46 12.5762 711.094 19.9423L598.447 132.589C594.135 136.901 588.207 139.416 581.918 139.416H11.6779C1.25762 139.416 -3.95252 126.84 3.41354 119.474L116.06 6.82708Z" fill="url(#paint1_linear_402_2)"/>
                                <path d="M598.447 215.772C594.135 211.46 588.207 208.944 581.918 208.944H11.6779C1.25762 208.944 -3.95252 221.521 3.41354 228.887L116.06 341.534C120.372 345.845 126.301 348.361 132.589 348.361H702.83C713.25 348.361 718.46 335.784 711.094 328.418L598.447 215.772Z" fill="url(#paint2_linear_402_2)"/>
                                </g>
                                <defs>
                                <linearGradient id="paint0_linear_402_2" x1="648.355" y1="-67.2922" x2="253.703" y2="688.625" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#00FFA3"/>
                                <stop offset="1" stop-color="#DC1FFF"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear_402_2" x1="475.792" y1="-157.385" x2="81.1398" y2="598.533" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#00FFA3"/>
                                <stop offset="1" stop-color="#DC1FFF"/>
                                </linearGradient>
                                <linearGradient id="paint2_linear_402_2" x1="561.524" y1="-112.625" x2="166.872" y2="643.292" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#00FFA3"/>
                                <stop offset="1" stop-color="#DC1FFF"/>
                                </linearGradient>
                                <clipPath id="clip0_402_2">
                                <rect width="714.508" height="560" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>
                                
                        </div>
                        <span class="name">Solana</span>
                        <div class="arrow">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class="svg-inline--fa fa-caret-down NetworkDropdownToggle_arrow__3HcBw" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"></path></svg>
                        </div>
                        
                    </div>
        <connectBtn />

                </div>
                <!-- <div class="connect-wallet__button">
                    <span>Connect Wallet</span>
                    <div class="icon">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="power-off" class="svg-inline--fa fa-power-off Navbar_connectButtonIcon__3sKLF" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"></path></svg>
                    </div>
                </div> -->
                <div class="settings-button">
                    <svg aria-hidden="true" focusable="false" data-prefix="fasl" data-icon="gear" class="svg-inline--fa fa-gear IconButton_iconMd__DoW9i" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path  d="M195 108c-13.2 5.4-25.5 12.6-36.7 21.2l-13.3 10.2-16-5.1-52-16.6L46.9 170.2l40.3 36.7 12.4 11.3-2.2 16.6c-.9 6.9-1.4 14-1.4 21.2s.5 14.3 1.4 21.2l2.2 16.6L87.2 305.1 46.9 341.8l30.2 52.4 52-16.6 16-5.1 13.3 10.2c11.2 8.6 23.5 15.8 36.7 21.2l15.5 6.4 3.6 16.4L225.8 480h60.5l11.7-53.3 3.6-16.4L317 404c13.2-5.4 25.5-12.6 36.7-21.2l13.3-10.2 16 5.1 52 16.6 30.2-52.4-40.3-36.7-12.4-11.3 2.2-16.6c.9-6.9 1.4-14 1.4-21.2s-.5-14.3-1.4-21.2l-2.2-16.6 12.4-11.3 40.3-36.7-30.2-52.4-52 16.6-16 5.1-13.3-10.2c-11.2-8.6-23.5-15.8-36.7-21.2l-15.5-6.4-3.6-16.4L286.2 32H225.8L214.1 85.3l-3.6 16.4L195 108zM200 0H312l17.2 78.4c15.8 6.5 30.6 15.1 44 25.4l76.5-24.4 56 97-59.4 54.1c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l59.4 54.1-56 97-76.5-24.4c-13.4 10.3-28.2 18.9-44 25.4L312 512H200l-17.2-78.4c-15.8-6.5-30.6-15.1-44-25.4L62.3 432.5l-56-97 59.4-54.1C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L6.3 176.5l56-97 76.5 24.4c13.4-10.3 28.2-18.9 44-25.4L200 0zM312 256a56 56 0 1 0 -112 0 56 56 0 1 0 112 0zm-144 0a88 88 0 1 1 176 0 88 88 0 1 1 -176 0z"></path></svg>
                </div>
                <div class="burger-menu">
                    <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m13 16.745c0-.414-.336-.75-.75-.75h-9.5c-.414 0-.75.336-.75.75s.336.75.75.75h9.5c.414 0 .75-.336.75-.75zm9-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm-4-5c0-.414-.336-.75-.75-.75h-14.5c-.414 0-.75.336-.75.75s.336.75.75.75h14.5c.414 0 .75-.336.75-.75z" fill-rule="nonzero"/></svg>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
import connectBtn from './connectBtn.vue';
export default {
components: {
    connectBtn
}
}
</script>
<style scoped>
    @import url(../assets/style/components/tradeHeader.css);

    .swv-button-trigger {
        height: 40px !important;
    }
</style>