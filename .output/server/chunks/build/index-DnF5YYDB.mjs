import { b as buildAssetsURL } from '../routes/renderer.mjs';
import { useSSRContext, resolveComponent, mergeProps, withCtx, createVNode } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { _ as _imports_2$1, a as _imports_0$1 } from './pyth_logo_lockup_dark-NNVb3UNp.mjs';
import { _ as _imports_1 } from './desktop-ui-dark-Dw4BnIW0.mjs';
import { _ as _imports_0 } from './transp_logo-B9WnOw8Z.mjs';
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
import 'vue-router';
import 'solana-wallets-vue';
import '@solana/wallet-adapter-wallets';

const _sfc_main$4 = {
  props: {
    text: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    }
  },
  computed: {
    btnClass() {
      return "btn";
    }
  },
  methods: {
    navigateToPath() {
      this.$router.push(this.path);
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<a${ssrRenderAttrs(mergeProps({
    href: $props.path,
    class: $options.btnClass
  }, _attrs))} data-v-7623856b>${ssrInterpolate($props.text)}</a>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/orangeBtn.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-7623856b"]]);
const _sfc_main$3 = {
  components: {
    orangeBtn: __nuxt_component_1
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_orangeBtn = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "header" }, _attrs))} data-v-da215a64><div class="header-component" data-v-da215a64><a href="/" class="header-container__logo" data-v-da215a64><img${ssrRenderAttr("src", _imports_0$1)} alt="" data-v-da215a64></a><div class="buttons" data-v-da215a64><a href="/roadmap" class="transp-btn" data-v-da215a64>Roadmap</a>`);
  _push(ssrRenderComponent(_component_orangeBtn, {
    class: "header-button",
    path: "/trade",
    text: "Trade"
  }, null, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/headerComponent.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-da215a64"]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<footer${ssrRenderAttrs(_attrs)} data-v-0c697826><div class="footer-container" data-v-0c697826>`);
  _push(ssrRenderComponent(_component_router_link, {
    to: "/",
    class: "footer-container__logo"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0$1)} alt="Footer Logo" data-v-0c697826${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0$1,
            alt: "Footer Logo"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="socials-icon" data-v-0c697826><a href="https://t.me/joinsoltrade" target="_blank" data-v-0c697826><svg width="16" height="16" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="telegram" class="svg-inline--fa fa-telegram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" data-v-0c697826><path fill="currentColor" d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z" data-v-0c697826></path></svg></a><a href="https://twitter.com/soltradeapp" target="_blank" rel="noreferrer" data-v-0c697826><svg width="16" height="16" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" class="svg-inline--fa fa-twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-v-0c697826><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" data-v-0c697826></path></svg></a></div></div></footer>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/footerComponent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-0c697826"]]);
const _sfc_main$1 = {
  props: {
    text: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    }
  },
  computed: {
    btnClass() {
      return "btn";
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<a${ssrRenderAttrs(mergeProps({
    href: $props.path,
    class: $options.btnClass
  }, _attrs))} data-v-9d5a11fd>${ssrInterpolate($props.text)}</a>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/transparentButton.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const transparentBtn = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-9d5a11fd"]]);
const _imports_2 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2026.0.3,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.0'%20id='katman_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20800%20600'%20style='enable-background:new%200%200%20800%20600;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23232323;}%20.st1{fill:url(%23SVGID_1_);}%20%3c/style%3e%3cpath%20class='st0'%20d='M399.6,48.5h0.4c134.9,0,244.3,109.4,244.3,244.3v13.6c0,134.9-109.4,244.3-244.3,244.3h-0.4%20c-134.9,0-244.3-109.4-244.3-244.3v-13.6C155.3,157.9,264.7,48.5,399.6,48.5z'/%3e%3clinearGradient%20id='SVGID_1_'%20gradientUnits='userSpaceOnUse'%20x1='300.549'%20y1='184.6306'%20x2='547.9839'%20y2='425.5287'%20gradientTransform='matrix(1%200%200%20-1%20-20.9449%20604.3622)'%3e%3cstop%20offset='0'%20style='stop-color:%23CF41E8'/%3e%3cstop%20offset='1'%20style='stop-color:%2310F2B0'/%3e%3c/linearGradient%3e%3cpath%20class='st1'%20d='M504.3,237.5c-0.8,0.9-1.8,1.6-2.9,2c-1.1,0.5-2.3,0.7-3.5,0.7H271.4c-8,0-12.1-10-6.5-16l37.2-39.5%20c0.8-0.9,1.8-1.6,3-2.1c1.1-0.5,2.3-0.7,3.5-0.7h227.4c8.1,0,12.1,10.1,6.4,16.1L504.3,237.5z%20M504.3,414.1c-1.7,1.7-4,2.7-6.4,2.7%20H271.4c-8,0-12.1-9.8-6.5-15.6l37.2-38.6c0.8-0.9,1.9-1.6,3-2c1.1-0.5,2.3-0.7,3.5-0.7h227.4c8.1,0,12.1,9.9,6.4,15.7L504.3,414.1z%20M504.3,273.6c-1.7-1.7-4-2.7-6.4-2.7H271.4c-8,0-12.1,9.8-6.5,15.6l37.2,38.6c0.8,0.9,1.9,1.6,3,2c1.1,0.5,2.3,0.7,3.5,0.7h227.4%20c8.1,0,12.1-9.9,6.4-15.7L504.3,273.6z'/%3e%3c/svg%3e";
const _imports_3 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='3bffbe'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M17.5%206.5C17.5%207.05228%2017.9477%207.5%2018.5%207.5C19.0523%207.5%2019.5%207.05228%2019.5%206.5C19.5%205.94772%2019.0523%205.5%2018.5%205.5C17.9477%205.5%2017.5%205.94772%2017.5%206.5ZM18.5%208.5C17.3954%208.5%2016.5%207.60457%2016.5%206.5C16.5%205.39543%2017.3954%204.5%2018.5%204.5C19.6046%204.5%2020.5%205.39543%2020.5%206.5C20.5%207.60457%2019.6046%208.5%2018.5%208.5Z'%20fill='%233bffbe'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M3.5%207C3.5%208.38071%204.61929%209.5%206%209.5C6.38373%209.5%206.74727%209.41354%207.0722%209.25905C7.09262%209.29271%207.11737%209.32448%207.14645%209.35355L8.99591%2011.203C8.68102%2011.7283%208.5%2012.343%208.5%2013C8.5%2014.933%2010.067%2016.5%2012%2016.5C12.3852%2016.5%2012.7559%2016.4378%2013.1025%2016.3228L13.3669%2016.8517C12.8433%2017.2123%2012.5%2017.8161%2012.5%2018.5C12.5%2019.6046%2013.3954%2020.5%2014.5%2020.5C15.6046%2020.5%2016.5%2019.6046%2016.5%2018.5C16.5%2017.3954%2015.6046%2016.5%2014.5%2016.5C14.4371%2016.5%2014.3749%2016.5029%2014.3134%2016.5086L13.9966%2015.875C14.9053%2015.2428%2015.5%2014.1908%2015.5%2013C15.5%2012.212%2015.2396%2011.4849%2014.8002%2010.8999C14.8188%2010.8859%2014.8366%2010.8705%2014.8536%2010.8536L16.3536%209.35355C16.5488%209.15829%2016.5488%208.84171%2016.3536%208.64645C16.1583%208.45118%2015.8417%208.45118%2015.6464%208.64645L14.1464%2010.1464C14.1295%2010.1634%2014.1141%2010.1812%2014.1001%2010.1998C13.5151%209.76038%2012.788%209.5%2012%209.5C11.0862%209.5%2010.2542%209.85021%209.63083%2010.4237L7.8683%208.6612C8.26127%208.21956%208.5%207.63766%208.5%207C8.5%205.61929%207.38071%204.5%206%204.5C4.61929%204.5%203.5%205.61929%203.5%207ZM6%208.5C5.17157%208.5%204.5%207.82843%204.5%207C4.5%206.17157%205.17157%205.5%206%205.5C6.82843%205.5%207.5%206.17157%207.5%207C7.5%207.82843%206.82843%208.5%206%208.5ZM14.5%2019.5C13.9477%2019.5%2013.5%2019.0523%2013.5%2018.5C13.5%2017.9477%2013.9477%2017.5%2014.5%2017.5C15.0523%2017.5%2015.5%2017.9477%2015.5%2018.5C15.5%2019.0523%2015.0523%2019.5%2014.5%2019.5ZM12%2015.5C10.6193%2015.5%209.5%2014.3807%209.5%2013C9.5%2011.6193%2010.6193%2010.5%2012%2010.5C13.3807%2010.5%2014.5%2011.6193%2014.5%2013C14.5%2014.3807%2013.3807%2015.5%2012%2015.5Z'%20fill='%233bffbe'/%3e%3c/svg%3e";
const _imports_4 = "data:image/svg+xml,%3csvg%20fill='%23FA7F3B'%20clip-rule='evenodd'%20fill-rule='evenodd'%20stroke-linejoin='round'%20stroke-miterlimit='2'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='m12%2010.93%205.719-5.72c.146-.146.339-.219.531-.219.404%200%20.75.324.75.749%200%20.193-.073.385-.219.532l-5.72%205.719%205.719%205.719c.147.147.22.339.22.531%200%20.427-.349.75-.75.75-.192%200-.385-.073-.531-.219l-5.719-5.719-5.719%205.719c-.146.146-.339.219-.531.219-.401%200-.75-.323-.75-.75%200-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532%200-.425.346-.749.75-.749.192%200%20.385.073.531.219z'/%3e%3c/svg%3e";
const _imports_5 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%202000%202000'%20width='40'%20height='30'%3e%3cpath%20d='M1000%200c552.26%200%201000%20447.74%201000%201000s-447.76%201000-1000%201000S0%201552.38%200%201000%20447.68%200%201000%200'%20fill='%2353ae94'/%3e%3cpath%20d='M1123.42%20866.76V718h340.18V491.34H537.28V718H877.5v148.64C601%20879.34%20393.1%20934.1%20393.1%20999.7s208%20120.36%20484.4%20133.14v476.5h246V1132.8c276-12.74%20483.48-67.46%20483.48-133s-207.48-120.26-483.48-133m0%20225.64v-.12c-6.94.44-42.6%202.58-122%202.58-63.48%200-108.14-1.8-123.88-2.62v.2C633.34%201081.66%20451%201039.12%20451%20988.22S633.36%20894.84%20877.62%20884v166.1c16%201.1%2061.76%203.8%20124.92%203.8%2075.86%200%20114-3.16%20121-3.8V884c243.8%2010.86%20425.72%2053.44%20425.72%20104.16s-182%2093.32-425.72%20104.18'%20fill='%23fff'/%3e%3c/svg%3e";
const _imports_6 = "" + buildAssetsURL("biglogo.B5dYVfMb.png");
const _sfc_main = {
  components: {
    headerComponent: __nuxt_component_0,
    orangeBtn: __nuxt_component_1,
    transparentBtn,
    footerComponent: __nuxt_component_2
  },
  mounted() {
    (void 0).addEventListener("scroll", this.handleScroll);
    this.handleScroll();
  },
  beforeDestroy() {
    (void 0).removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const elements = (void 0).querySelectorAll(".scroll-animation");
      const windowHeight = (void 0).innerHeight;
      elements.forEach((element) => {
        const positionFromTop = element.getBoundingClientRect().top;
        const isElementVisible = positionFromTop - windowHeight <= 0;
        if (isElementVisible) {
          element.classList.add("animate__animated", "animate__fadeInUp");
        }
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_headerComponent = __nuxt_component_0;
  const _component_orangeBtn = __nuxt_component_1;
  const _component_transparentBtn = resolveComponent("transparentBtn");
  const _component_footerComponent = __nuxt_component_2;
  _push(`<!--[--><div class="stars-background" data-v-60219495><div id="stars" data-v-60219495></div><div id="stars2" data-v-60219495></div><div id="stars3" data-v-60219495></div></div>`);
  _push(ssrRenderComponent(_component_headerComponent, null, null, _parent));
  _push(`<div class="main-container" data-v-60219495><div class="main-container__text scroll-animation" data-v-60219495> DECENTRALIZED LEVERAGED TRADING </div><div class="main-container__subtitle fade-in scroll-animation" data-v-60219495> Crypto, forex, and commodities. No sign up required. </div><div class="main-container__buttons scroll-animation" data-v-60219495>`);
  _push(ssrRenderComponent(_component_orangeBtn, {
    text: "Start Trading",
    path: "/trade"
  }, null, _parent));
  _push(ssrRenderComponent(_component_transparentBtn, {
    text: "Presale",
    path: "/presale"
  }, null, _parent));
  _push(`</div><div class="powered-b scroll-animation mx-auto flex justify-center mt-10" data-v-60219495><a href="https://pyth.network/" data-v-60219495><img width="100" height="100"${ssrRenderAttr("src", _imports_2$1)} alt="" data-v-60219495></a></div><div class="main-container__main_img scroll-animation" data-v-60219495><a href="/trade" data-v-60219495><img${ssrRenderAttr("src", _imports_1)} alt="Main Image" data-v-60219495></a></div><div class="benefits-container" data-v-60219495><div class="benefits-container__title scroll-animation" data-v-60219495> Leveraged Trading on <span class="color-word" data-v-60219495>Solana</span></div><div class="benefits-container__benefit_box scroll-animation" data-v-60219495><div class="benefit-box__item fade-in" data-v-60219495><div class="benefit-item__top" data-v-60219495><div class="benefit-item_top__image" data-v-60219495><img${ssrRenderAttr("src", _imports_2)} alt="Solana Icon" data-v-60219495></div><div class="benefit-item_top__title" data-v-60219495> Solana Native </div></div><div class="benefit-item_bottom" data-v-60219495> Take advantage of Solana\u2019s speeds and low-cost execution. </div></div><div class="benefit-box__item fade-in" data-v-60219495><div class="benefit-item__top" data-v-60219495><div class="benefit-item_top__image" data-v-60219495><img${ssrRenderAttr("src", _imports_3)} alt="Solana Icon" data-v-60219495></div><div class="benefit-item_top__title" data-v-60219495> Decentralized </div></div><div class="benefit-item_bottom" data-v-60219495> Trade directly from your Phantom or preferred browser wallet. </div></div><div class="benefit-box__item fade-in" data-v-60219495><div class="benefit-item__top" data-v-60219495><div class="benefit-item_top__image" data-v-60219495><img${ssrRenderAttr("src", _imports_4)} alt="Solana Icon" data-v-60219495></div><div class="benefit-item_top__title" data-v-60219495> Access to Leverage </div></div><div class="benefit-item_bottom" data-v-60219495> SolTrade provides leveraged exposure to crypto &amp; FX pairs. </div></div><div class="benefit-box__item fade-in" data-v-60219495><div class="benefit-item__top" data-v-60219495><div class="benefit-item_top__image" data-v-60219495><img${ssrRenderAttr("src", _imports_5)} alt="Solana Icon" data-v-60219495></div><div class="benefit-item_top__title" data-v-60219495> Bet against Traders </div></div><div class="benefit-item_bottom" data-v-60219495> Deposit USDT to earn a share of the trading fees &amp; trader losses. </div></div></div></div></div><div class="swap-section scroll-animation" data-v-60219495><div class="swap-header" data-v-60219495><img${ssrRenderAttr("src", _imports_6)} alt="solTrade Logo" data-v-60219495></div><div class="swap-container" data-v-60219495><div class="token-info" data-v-60219495><div class="title" data-v-60219495><div class="logo" data-v-60219495><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-60219495></div><div class="name" data-v-60219495> solTrade Token </div></div><div class="description" data-v-60219495><div class="adress bold" data-v-60219495> Presale SOL Deposit Address: </div><div class="text-sm" data-v-60219495> 8FAtw9FJREB4LUDPmVz9baVoyxtK1iDCqwYN49jdFWR9 </div></div><div class="description flex flex-row mb-0" data-v-60219495><div class="adress mr-2" data-v-60219495> Minimum per wallet: </div><div class="adress" data-v-60219495> 1 SOL </div></div><div class="description flex flex-row" data-v-60219495><div class="adress mr-2" data-v-60219495> Maximum per wallet: </div><div class="adress" data-v-60219495> 25 SOL </div></div><div class="description" data-v-60219495><div class="adress" data-v-60219495> Ticker: <span class="bold" data-v-60219495>TRADE</span></div><div class="adress" data-v-60219495> Supply: 250,000,000 </div></div></div><div class="soltrade-ico" data-v-60219495><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-60219495></div><div class="token-info bg-[#0D0D17] relative z-10" data-v-60219495><div class="title" data-v-60219495><div class="logo" data-v-60219495><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-60219495></div><div class="name" data-v-60219495> Fairlaunch Details </div></div><div class="description flex flex-row" data-v-60219495><div class="adress mr-2" data-v-60219495> All presale deposits will be tracked and posted publicly on GitHub. </div></div><div class="description flex flex-row" data-v-60219495><div class="adress mr-2" data-v-60219495> Do not dust Presale Deposit Address. </div></div><div class="description flex flex-row mb-0" data-v-60219495><div class="adress mr-2" data-v-60219495> 55% Presale </div></div><div class="description flex flex-row mb-0" data-v-60219495><div class="adress mr-2" data-v-60219495> 30% LP </div></div><div class="description flex flex-row mb-0" data-v-60219495><div class="adress mr-2" data-v-60219495> 10% CEX </div></div><div class="description flex flex-row mb-0" data-v-60219495><div class="adress mr-2" data-v-60219495> 5% Team </div></div></div></div></div><div class="community-container scroll-animation" data-v-60219495><div class="cs-title fade-in" data-v-60219495> Join our Community </div><div class="cs-buttons" data-v-60219495><a class="button" href="https://t.me/joinsoltrade" target="_blank" data-v-60219495><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="telegram" class="svg-inline--fa fa-telegram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" data-v-60219495><path fill="currentColor" d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z" data-v-60219495></path></svg><div class="cs-titl" data-v-60219495>Telegram</div></a><a class="button" href="https://twitter.com/soltradeapp" target="_blank" data-v-60219495><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" class="svg-inline--fa fa-twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-v-60219495><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" data-v-60219495></path></svg><div class="cs-titl" data-v-60219495>Twitter</div></a></div></div>`);
  _push(ssrRenderComponent(_component_footerComponent, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-60219495"]]);

export { index as default };
//# sourceMappingURL=index-DnF5YYDB.mjs.map
