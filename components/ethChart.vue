<template>
    <div class="tradingview-widget-container" >
      <div class="tradingview-widget-container__widget" style="height:calc(100% - 32px);width:100%"></div>
      <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span class="blue-text">Track all markets on TradingView</span></a></div>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        autosize: true,
        symbol: 'COINBASE:ETHUSD',
        interval: '30',
        timezone: 'Etc/UTC',
        theme: 'dark',
        style: '1',
        locale: 'en',
        enable_publishing: false,
        backgroundColor: '#0D0D17',
        hide_side_toolbar: false,
        calendar: false,
        support_host: 'https://www.tradingview.com'
      });
  
      this.$el.appendChild(script);
    }
  }
  </script>
  

  <style>

  .tradingview-widget-container {
    width: 100%;
    height: 500px !important;
  }
  .tradingview-widget-container iframe {
    height: 100% !important;
}

  .tradingview-widget-copyright{
    display: none !important;
  }
</style>