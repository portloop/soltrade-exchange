import { _ as __nuxt_component_0 } from './tradeHeader-xZD7MTwr.mjs';
import { _ as __nuxt_component_0$1 } from './client-only-BPnFcVTS.mjs';
import { useSSRContext, defineComponent, unref, withCtx, createTextVNode, mergeProps, ref } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { useWallet } from 'solana-wallets-vue';
import { _ as _export_sfc } from './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './pyth_logo_lockup_dark-NNVb3UNp.mjs';
import 'vue-router';
import '@solana/wallet-adapter-wallets';

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "connectButtonLong",
  __ssrInlineRender: true,
  setup(__props) {
    const { publicKey } = useWallet();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(`<!--[-->`);
      if (!unref(publicKey)) {
        _push(ssrRenderComponent(_component_ClientOnly, null, {
          placeholder: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Loading `);
            } else {
              return [
                createTextVNode(" Loading ")
              ];
            }
          })
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(publicKey)) {
        _push(`<div class="deal-buttons"><button>Long</button><button>Short</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/connectButtonLong.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  mounted() {
    const script = (void 0).createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: "COINBASE:BTCUSD",
      interval: "30",
      timezone: "Etc/UTC",
      theme: "dark",
      style: "1",
      locale: "en",
      enable_publishing: false,
      backgroundColor: "#0D0D17",
      hide_side_toolbar: false,
      calendar: false,
      support_host: "https://www.tradingview.com"
    });
    this.$el.appendChild(script);
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "tradingview-widget-container" }, _attrs))}><div class="tradingview-widget-container__widget" style="${ssrRenderStyle({ "height": "calc(100% - 32px)", "width": "100%" })}"></div><div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span class="blue-text">Track all markets on TradingView</span></a></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/btcChart.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$3 = {
  mounted() {
    const script = (void 0).createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.async = true;
    script.innerHTML = JSON.stringify(
      {
        "autosize": true,
        "symbol": "COINBASE:SOLUSD",
        "interval": "30",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "enable_publishing": false,
        "backgroundColor": "#0D0D17",
        "gridColor": "rgba(242, 242, 242, 0.06)",
        "hide_side_toolbar": false,
        "calendar": false,
        "support_host": "https://www.tradingview.com"
      }
    );
    this.$el.appendChild(script);
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "tradingview-widget-container",
    style: { "height": "100%", "width": "100%" }
  }, _attrs))}><div class="tradingview-widget-container__widget" style="${ssrRenderStyle({ "height": "calc(100% - 32px)", "width": "100%" })}"></div><div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span class="blue-text">Track all markets on TradingView</span></a></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/solChart.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {
  mounted() {
    const script = (void 0).createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: "COINBASE:ETHUSD",
      interval: "30",
      timezone: "Etc/UTC",
      theme: "dark",
      style: "1",
      locale: "en",
      enable_publishing: false,
      backgroundColor: "#0D0D17",
      hide_side_toolbar: false,
      calendar: false,
      support_host: "https://www.tradingview.com"
    });
    this.$el.appendChild(script);
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "tradingview-widget-container" }, _attrs))}><div class="tradingview-widget-container__widget" style="${ssrRenderStyle({ "height": "calc(100% - 32px)", "width": "100%" })}"></div><div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span class="blue-text">Track all markets on TradingView</span></a></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ethChart.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "transactionConnectBtn",
  __ssrInlineRender: true,
  setup(__props) {
    const { publicKey } = useWallet();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center" }, _attrs))} data-v-b75e8c7d>`);
      if (unref(publicKey)) {
        _push(`<div data-v-b75e8c7d></div>`);
      } else {
        _push(`<div class="mr-6" data-v-b75e8c7d>Please connect your wallet</div>`);
      }
      if (!unref(publicKey)) {
        _push(ssrRenderComponent(_component_ClientOnly, null, {
          placeholder: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Loading `);
            } else {
              return [
                createTextVNode(" Loading ")
              ];
            }
          })
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/transactionConnectBtn.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b75e8c7d"]]);
function connectWebSocket(updateBTCPrice, updateSOLPrice, updateETHPrice) {
  let socketUrl = "wss://ws-feed.pro.coinbase.com";
  let subscriptionMessage = {
    type: "subscribe",
    product_ids: ["BTC-USD", "SOL-USD", "ETH-USD"],
    channels: ["ticker"]
  };
  const socket = new WebSocket(socketUrl);
  socket.onopen = () => {
    socket.send(JSON.stringify(subscriptionMessage));
  };
  socket.onmessage = (event) => {
    const eventData = JSON.parse(event.data);
    if (eventData.product_id === "BTC-USD") {
      updateBTCPrice(eventData.price);
    } else if (eventData.product_id === "SOL-USD") {
      updateSOLPrice(eventData.price);
    } else if (eventData.product_id === "ETH-USD") {
      updateETHPrice(eventData.price);
    }
  };
  socket.onclose = () => {
    connectWebSocket(updateBTCPrice, updateSOLPrice, updateETHPrice);
  };
}
const _imports_0 = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%20715%20560'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_402_2)'%3e%3cpath%20d='M116.06%20427.411C120.372%20423.099%20126.301%20420.584%20132.589%20420.584H702.83C713.25%20420.584%20718.46%20433.16%20711.094%20440.526L598.447%20553.173C594.135%20557.485%20588.207%20560%20581.918%20560H11.6779C1.25762%20560%20-3.95252%20547.424%203.41354%20540.058L116.06%20427.411Z'%20fill='url(%23paint0_linear_402_2)'/%3e%3cpath%20d='M116.06%206.82708C120.552%202.51524%20126.481%200%20132.589%200H702.83C713.25%200%20718.46%2012.5762%20711.094%2019.9423L598.447%20132.589C594.135%20136.901%20588.207%20139.416%20581.918%20139.416H11.6779C1.25762%20139.416%20-3.95252%20126.84%203.41354%20119.474L116.06%206.82708Z'%20fill='url(%23paint1_linear_402_2)'/%3e%3cpath%20d='M598.447%20215.772C594.135%20211.46%20588.207%20208.944%20581.918%20208.944H11.6779C1.25762%20208.944%20-3.95252%20221.521%203.41354%20228.887L116.06%20341.534C120.372%20345.845%20126.301%20348.361%20132.589%20348.361H702.83C713.25%20348.361%20718.46%20335.784%20711.094%20328.418L598.447%20215.772Z'%20fill='url(%23paint2_linear_402_2)'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_402_2'%20x1='648.355'%20y1='-67.2922'%20x2='253.703'%20y2='688.625'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2300FFA3'/%3e%3cstop%20offset='1'%20stop-color='%23DC1FFF'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_402_2'%20x1='475.792'%20y1='-157.385'%20x2='81.1398'%20y2='598.533'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2300FFA3'/%3e%3cstop%20offset='1'%20stop-color='%23DC1FFF'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_402_2'%20x1='561.524'%20y1='-112.625'%20x2='166.872'%20y2='643.292'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2300FFA3'/%3e%3cstop%20offset='1'%20stop-color='%23DC1FFF'/%3e%3c/linearGradient%3e%3cclipPath%20id='clip0_402_2'%3e%3crect%20width='714.508'%20height='560'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
const _imports_1 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100%25'%20height='100%25'%20shape-rendering='geometricPrecision'%20image-rendering='optimizeQuality'%20fill-rule='nonzero'%20viewBox='0%200%204091.27%204091.73'%20xmlns:v='https://vecta.io/nano'%3e%3cpath%20fill='%23f7931a'%20d='M4030.06%202540.77C3756.82%203636.78%202646.74%204303.79%201550.6%204030.48%20454.92%203757.24-212.09%202647.09%2061.27%201551.17c273.12-1096.13%201383.2-1763.19%202479-1489.95C3636.33%20334.46%204303.3%201444.73%204030.03%202540.79l.02-.02z'/%3e%3cpath%20fill='%23fff'%20d='M2947.77%201754.38c40.72-272.26-166.56-418.61-450-516.24l91.95-368.8-224.5-55.94-89.51%20359.09-179.87-42.34L2186%20768.69l-224.36-55.94-92%20368.68-143.35-33.69.26-1.16-309.59-77.31-59.72%20239.78s166.56%2038.18%20163.05%2040.53c90.91%2022.69%20107.35%2082.87%20104.62%20130.57l-104.74%20420.15c6.26%201.59%2014.38%203.89%2023.34%207.49l-23.73-5.87-146.81%20588.57c-11.11%2027.62-39.31%2069.07-102.87%2053.33%202.25%203.26-163.17-40.72-163.17-40.72l-111.46%20256.98%20292.15%2072.83%20160.06%2041.3-92.9%20373.03%20224.24%2055.94%2092-369.07%20178.91%2046.43-91.69%20367.33%20224.51%2055.94%2092.89-372.33c382.82%2072.45%20670.67%2043.24%20791.83-303.02%2097.63-278.78-4.86-439.58-206.26-544.44%20146.69-33.83%20257.18-130.31%20286.64-329.61l-.07-.05zm-512.93%20719.26c-69.38%20278.78-538.76%20128.08-690.94%2090.29l123.28-494.2c152.17%2037.99%20640.17%20113.17%20567.67%20403.91zm69.43-723.3c-63.29%20253.58-453.96%20124.75-580.69%2093.16l111.77-448.21c126.73%2031.59%20534.85%2090.55%20468.94%20355.05h-.02z'/%3e%3c/svg%3e";
const _imports_2 = "data:image/svg+xml,%3csvg%20width='13px'%20height='20px'%20viewBox='0%200%20256%20417'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20preserveAspectRatio='xMidYMid'%3e%3cg%3e%3cpolygon%20fill='%23343434'%20points='127.9611%200%20125.1661%209.5%20125.1661%20285.168%20127.9611%20287.958%20255.9231%20212.32'/%3e%3cpolygon%20fill='%238C8C8C'%20points='127.962%200%200%20212.32%20127.962%20287.959%20127.962%20154.158'/%3e%3cpolygon%20fill='%233C3C3B'%20points='127.9611%20312.1866%20126.3861%20314.1066%20126.3861%20412.3056%20127.9611%20416.9066%20255.9991%20236.5866'/%3e%3cpolygon%20fill='%238C8C8C'%20points='127.962%20416.9052%20127.962%20312.1852%200%20236.5852'/%3e%3cpolygon%20fill='%23141414'%20points='127.9611%20287.9577%20255.9211%20212.3207%20127.9611%20154.1587'/%3e%3cpolygon%20fill='%23393939'%20points='0.0009%20212.3208%20127.9609%20287.9578%20127.9609%20154.1588'/%3e%3c/g%3e%3c/svg%3e";
const _sfc_main = {
  components: {
    tradeHeader: __nuxt_component_0,
    btcChart: __nuxt_component_2,
    // connectButton,
    connectButtonLong: _sfc_main$5,
    transactionConnectBtn: __nuxt_component_5
  },
  data() {
    return {
      dealSectionActionTab: "long",
      dealType: "market",
      dealLeverage: 0,
      btcPrice: null,
      solPrice: null,
      ethPrice: null,
      showDropdown: false,
      activeHistoryTab: "orders",
      prevBtcPrice: null,
      prevSolPrice: null,
      prevEthPrice: null,
      activeToken: "sol"
    };
  },
  methods: {
    changeToLong() {
      this.dealSectionActionTab = "long";
    },
    changeToShort() {
      this.dealSectionActionTab = "short";
    },
    updateBTCPrice(price) {
      this.prevBtcPrice = this.btcPrice;
      this.btcPrice = parseFloat(price).toFixed(2);
    },
    updateSOLPrice(price) {
      this.prevSolPrice = this.solPrice;
      this.solPrice = parseFloat(price).toFixed(2);
    },
    updateETHPrice(price) {
      this.prevEthPrice = this.ethPrice;
      this.ethPrice = parseFloat(price).toFixed(2);
    },
    calculateChangeAndPercentage(oldValue, newValue) {
      const change = newValue - oldValue;
      const percentageChange = change / oldValue * 100;
      return percentageChange.toFixed(4);
    }
  },
  mounted() {
    for (let e of (void 0).querySelectorAll('input[type="range"].slider-progress')) {
      e.style.setProperty("--value", e.value);
      e.style.setProperty("--min", e.min == "" ? "0" : e.min);
      e.style.setProperty("--max", e.max == "" ? "100" : e.max);
      e.addEventListener("input", () => e.style.setProperty("--value", e.value));
    }
    connectWebSocket(this.updateBTCPrice, this.updateSOLPrice, this.updateETHPrice);
  },
  setup() {
    const showText = ref(true);
    const handlePublicKeyReceived = () => {
      showText.value = false;
    };
    return {
      showText,
      handlePublicKeyReceived
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_tradeHeader = __nuxt_component_0;
  const _component_connectButtonLong = _sfc_main$5;
  const _component_btcChart = __nuxt_component_2;
  const _component_SolChart = __nuxt_component_3;
  const _component_ethChart = __nuxt_component_4;
  const _component_transactionConnectBtn = __nuxt_component_5;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_tradeHeader, null, null, _parent));
  _push(`<div class="main-trade__container" data-v-3c3e176c><div class="main-trade__leftside" data-v-3c3e176c>`);
  if ($data.dealSectionActionTab) {
    _push(`<div class="deal-block" data-v-3c3e176c><div class="deal-block__header" data-v-3c3e176c><div class="${ssrRenderClass([{ "active": this.dealSectionActionTab == "long" }, "deal-block__header_item"])}" data-v-3c3e176c> Long </div><div class="${ssrRenderClass([{ "active": this.dealSectionActionTab == "short" }, "deal-block__header_item"])}" data-v-3c3e176c> Short </div></div><div class="deal-block__deal_type" data-v-3c3e176c><div class="${ssrRenderClass([{ "active": this.dealType == "market" }, "deal-block__deal_type_item"])}" data-v-3c3e176c> Market </div><div class="${ssrRenderClass([{ "active": this.dealType == "limit" }, "deal-block__deal_type_item"])}" data-v-3c3e176c> Limit </div><div class="${ssrRenderClass([{ "active": this.dealType == "stop" }, "deal-block__deal_type_item"])}" data-v-3c3e176c> Stop </div></div><div class="deal-amount__container" data-v-3c3e176c><input type="text" value="50" max="20000" data-v-3c3e176c><div class="deal-amount-title" data-v-3c3e176c> Collateral <span class="light-text" data-v-3c3e176c>(50 - 20,0k)</span></div><a class="deal-amount-link" href="/onramp" data-v-3c3e176c> Get Collateral </a><div class="deal-amount-dropdown" data-v-3c3e176c></div></div><div class="deal-amount-range__container" data-v-3c3e176c><div class="da-range__header" data-v-3c3e176c><div class="da-range__header_title" data-v-3c3e176c> Leverage <span data-v-3c3e176c>(2x-150x)</span></div><div class="da-range__input" data-v-3c3e176c><input readonly${ssrRenderAttr("value", $data.dealLeverage)} ype="text" data-v-3c3e176c></div></div><input class="styled-slider slider-progress"${ssrRenderAttr("value", $data.dealLeverage)} type="range" min="2" max="150" step="2" data-v-3c3e176c></div>`);
    _push(ssrRenderComponent(_component_connectButtonLong, null, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="main-trade__rightside" data-v-3c3e176c><div class="main-trade-rightside__header" data-v-3c3e176c><div class="star" data-v-3c3e176c><svg fill="gold" width="17" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star FavoritePairsContainer_star__0Oxoz" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-v-3c3e176c><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" data-v-3c3e176c></path></svg></div><div class="crypto-price" data-v-3c3e176c><div class="leftside" data-v-3c3e176c><img${ssrRenderAttr("src", _imports_0)} alt="Solana Logo" data-v-3c3e176c><span data-v-3c3e176c>SOL/USD</span></div><div class="${ssrRenderClass([{ "green": this.solPrice > this.prevSolPrice, "red": this.prevSolPrice >= this.solPrice }, "rightside"])}" data-v-3c3e176c>${ssrInterpolate($data.solPrice)}</div></div><div class="crypto-price" data-v-3c3e176c><div class="leftside" data-v-3c3e176c><img${ssrRenderAttr("src", _imports_1)} alt="Bitcoin Logo" data-v-3c3e176c><span data-v-3c3e176c>BTC/USD</span></div><div class="${ssrRenderClass([{ "green": this.btcPrice > this.prevBtcPrice, "red": this.prevBtcPrice >= this.btcPrice }, "rightside"])}" data-v-3c3e176c>${ssrInterpolate($data.btcPrice)}</div></div><div class="crypto-price" data-v-3c3e176c><div class="leftside" data-v-3c3e176c><img${ssrRenderAttr("src", _imports_2)} alt="Solana Logo" data-v-3c3e176c><span data-v-3c3e176c>ETH/USD</span></div><div class="${ssrRenderClass([{ "green": this.ethPrice > this.prevEthPrice, "red": this.prevEthPrice >= this.ethPrice }, "rightside"])}" data-v-3c3e176c>${ssrInterpolate($data.ethPrice)}</div></div></div><div class="main-price-widget" data-v-3c3e176c><div class="main-crypto__price" data-v-3c3e176c>`);
  if (this.activeToken == "btc") {
    _push(`<img${ssrRenderAttr("src", _imports_1)} alt="Bitcoin Icon" data-v-3c3e176c>`);
  } else {
    _push(`<!---->`);
  }
  if (this.activeToken == "sol") {
    _push(`<img${ssrRenderAttr("src", _imports_0)} alt="Solana Icon" data-v-3c3e176c>`);
  } else {
    _push(`<!---->`);
  }
  if (this.activeToken == "eth") {
    _push(`<img${ssrRenderAttr("src", _imports_2)} alt="ETH Icon" data-v-3c3e176c>`);
  } else {
    _push(`<!---->`);
  }
  if (this.activeToken == "sol") {
    _push(`<div class="token-info" data-v-3c3e176c><div class="token-info__name" data-v-3c3e176c>SOL/USD</div><div class="token-info__description" data-v-3c3e176c> Solana to US Dollar </div></div>`);
  } else {
    _push(`<!---->`);
  }
  if (this.activeToken == "btc") {
    _push(`<div class="token-info" data-v-3c3e176c><div class="token-info__name" data-v-3c3e176c>BTC/USD</div><div class="token-info__description" data-v-3c3e176c> Bitcoin to US Dollar </div></div>`);
  } else {
    _push(`<!---->`);
  }
  if (this.activeToken == "eth") {
    _push(`<div class="token-info" data-v-3c3e176c><div class="token-info__name" data-v-3c3e176c>ETH/USD</div><div class="token-info__description" data-v-3c3e176c> Ethereum to US Dollar </div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="arrow" data-v-3c3e176c><svg width="20" height="20" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-3c3e176c><path d="m16.843 10.211c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291 1.002-1.299 3.044-3.945 4.243-5.498z" data-v-3c3e176c></path></svg></div><div class="main-crypto__price_dropdown" style="${ssrRenderStyle($data.showDropdown ? null : { display: "none" })}" data-v-3c3e176c><div class="token" data-v-3c3e176c><img${ssrRenderAttr("src", _imports_0)} alt="Bitcoin Icon" data-v-3c3e176c><div class="token-info" data-v-3c3e176c><div class="token-info__name" data-v-3c3e176c>SOL/USD</div><div class="token-info__description" data-v-3c3e176c> Solana to US Dollar </div></div></div><div class="token" data-v-3c3e176c><img${ssrRenderAttr("src", _imports_1)} alt="Bitcoin Icon" data-v-3c3e176c><div class="token-info" data-v-3c3e176c><div class="token-info__name" data-v-3c3e176c>BTC/USD</div><div class="token-info__description" data-v-3c3e176c> Bitcoin to US Dollar </div></div></div><div class="token" data-v-3c3e176c><img${ssrRenderAttr("src", _imports_2)} alt="ETH Icon" data-v-3c3e176c><div class="token-info" data-v-3c3e176c><div class="token-info__name" data-v-3c3e176c>ETH/USD</div><div class="token-info__description" data-v-3c3e176c> Ethereum to US Dollar </div></div></div></div></div><div class="token-price" data-v-3c3e176c>`);
  if (this.activeToken == "btc") {
    _push(`<div data-v-3c3e176c>${ssrInterpolate($data.btcPrice)}</div>`);
  } else {
    _push(`<!---->`);
  }
  if (this.activeToken == "sol") {
    _push(`<div data-v-3c3e176c>${ssrInterpolate($data.solPrice)}</div>`);
  } else {
    _push(`<!---->`);
  }
  if (this.activeToken == "eth") {
    _push(`<div data-v-3c3e176c>${ssrInterpolate($data.ethPrice)}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
  if (this.activeToken == "btc") {
    _push(ssrRenderComponent(_component_btcChart, { class: "chart" }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (this.activeToken == "sol") {
    _push(ssrRenderComponent(_component_SolChart, { class: "chart" }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (this.activeToken == "eth") {
    _push(ssrRenderComponent(_component_ethChart, { class: "chart" }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="order-list" data-v-3c3e176c><div class="order-list__header" data-v-3c3e176c><div class="leftside" data-v-3c3e176c><div class="${ssrRenderClass([{ "active": this.activeHistoryTab == "trades" }, "tab"])}" data-v-3c3e176c>Trades (0)</div><div class="${ssrRenderClass([{ "active": this.activeHistoryTab == "orders" }, "tab"])}" data-v-3c3e176c>Orders (0)</div><div class="${ssrRenderClass([{ "active": this.activeHistoryTab == "history" }, "tab"])}" data-v-3c3e176c>History</div></div><div class="rightside" data-v-3c3e176c><div class="sort_btn" data-v-3c3e176c> All </div><div class="icon" data-v-3c3e176c><svg aria-hidden="true" focusable="false" data-prefix="fasl" data-icon="gear" class="svg-inline--fa fa-gear IconButton_iconSm__9PdjF" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-v-3c3e176c><path fill="currentColor" d="M195 108c-13.2 5.4-25.5 12.6-36.7 21.2l-13.3 10.2-16-5.1-52-16.6L46.9 170.2l40.3 36.7 12.4 11.3-2.2 16.6c-.9 6.9-1.4 14-1.4 21.2s.5 14.3 1.4 21.2l2.2 16.6L87.2 305.1 46.9 341.8l30.2 52.4 52-16.6 16-5.1 13.3 10.2c11.2 8.6 23.5 15.8 36.7 21.2l15.5 6.4 3.6 16.4L225.8 480h60.5l11.7-53.3 3.6-16.4L317 404c13.2-5.4 25.5-12.6 36.7-21.2l13.3-10.2 16 5.1 52 16.6 30.2-52.4-40.3-36.7-12.4-11.3 2.2-16.6c.9-6.9 1.4-14 1.4-21.2s-.5-14.3-1.4-21.2l-2.2-16.6 12.4-11.3 40.3-36.7-30.2-52.4-52 16.6-16 5.1-13.3-10.2c-11.2-8.6-23.5-15.8-36.7-21.2l-15.5-6.4-3.6-16.4L286.2 32H225.8L214.1 85.3l-3.6 16.4L195 108zM200 0H312l17.2 78.4c15.8 6.5 30.6 15.1 44 25.4l76.5-24.4 56 97-59.4 54.1c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l59.4 54.1-56 97-76.5-24.4c-13.4 10.3-28.2 18.9-44 25.4L312 512H200l-17.2-78.4c-15.8-6.5-30.6-15.1-44-25.4L62.3 432.5l-56-97 59.4-54.1C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L6.3 176.5l56-97 76.5 24.4c13.4-10.3 28.2-18.9 44-25.4L200 0zM312 256a56 56 0 1 0 -112 0 56 56 0 1 0 112 0zm-144 0a88 88 0 1 1 176 0 88 88 0 1 1 -176 0z" data-v-3c3e176c></path></svg></div><div class="icon" data-v-3c3e176c><svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="down-from-line" class="svg-inline--fa fa-down-from-line IconButton_iconSm__9PdjF" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-v-3c3e176c><path fill="currentColor" d="M190.2 447.2c.5 .5 1.1 .8 1.8 .8s1.4-.3 1.8-.8L318.2 315.3c1.2-1.2 1.8-2.9 1.8-4.6c0-3.7-3-6.7-6.7-6.7H256c-8.8 0-16-7.2-16-16V168c0-4.4-3.6-8-8-8H152c-4.4 0-8 3.6-8 8V288c0 8.8-7.2 16-16 16H70.7c-3.7 0-6.7 3-6.7 6.7c0 1.7 .7 3.3 1.8 4.6L190.2 447.2zM192 480c-9.5 0-18.6-3.9-25.1-10.8L42.5 337.2C35.8 330 32 320.5 32 310.7C32 289.3 49.3 272 70.7 272H112V168c0-22.1 17.9-40 40-40h80c22.1 0 40 17.9 40 40V272h41.3c21.4 0 38.7 17.3 38.7 38.7c0 9.9-3.8 19.4-10.5 26.5L217.1 469.2c-6.5 6.9-15.6 10.8-25.1 10.8zM16 32H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H16C7.2 64 0 56.8 0 48s7.2-16 16-16z" data-v-3c3e176c></path></svg></div></div></div><div class="order-list__body" data-v-3c3e176c>`);
  if (!$setup.showText) {
    _push(`<span data-v-3c3e176c>Wallet not connected</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_transactionConnectBtn, { onPublicKeyReceived: $setup.handlePublicKeyReceived }, null, _parent));
  _push(`</div></div></div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/trade.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const trade = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-3c3e176c"]]);

export { trade as default };
//# sourceMappingURL=trade-Dcqqhmkd.mjs.map
