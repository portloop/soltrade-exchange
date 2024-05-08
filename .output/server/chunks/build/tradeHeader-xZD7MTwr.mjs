import { b as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as __nuxt_component_0$1 } from './client-only-BPnFcVTS.mjs';
import { useSSRContext, defineComponent, withCtx, createTextVNode } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { useWallet } from 'solana-wallets-vue';
import { a as _imports_0, _ as _imports_2 } from './pyth_logo_lockup_dark-NNVb3UNp.mjs';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "connectButton",
  __ssrInlineRender: true,
  setup(__props) {
    useWallet();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {
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
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/connectButton.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _imports_1 = "" + buildAssetsURL("mobile-logo.C5-yHbx2.png");
const _sfc_main = {
  components: {
    connectButton: _sfc_main$1
    // Connector
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_connectButton = _sfc_main$1;
  _push(`<header${ssrRenderAttrs(_attrs)} data-v-64af1623><div class="header-container" data-v-64af1623><div class="header-container__leftside" data-v-64af1623><a href="/" class="header-container__logo" data-v-64af1623><img${ssrRenderAttr("src", _imports_0)} alt="Logo Image" data-v-64af1623></a><a href="/" class="header-container__logo_mobile" data-v-64af1623><img${ssrRenderAttr("src", _imports_1)} alt="Logo Image" data-v-64af1623></a><div class="header-container__menu" data-v-64af1623><a href="/trade" class="header-container__menu_item active" data-v-64af1623> Trade </a><a href="/presale" class="header-container__menu_item" data-v-64af1623> Presale </a><a href="/onramp" class="header-container__menu_item" data-v-64af1623> Buy Solana </a></div></div><div class="header-container__rightside" data-v-64af1623><div class="powered-by mr-4" data-v-64af1623><a href="https://pyth.network/" data-v-64af1623><img width="65"${ssrRenderAttr("src", _imports_2)} alt="" data-v-64af1623></a></div><div class="network-dropdown" data-v-64af1623><div class="network-dropdown__name" data-v-64af1623><div class="logo" data-v-64af1623><svg width="20" height="20" viewBox="0 0 715 560" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-64af1623><g clip-path="url(#clip0_402_2)" data-v-64af1623><path d="M116.06 427.411C120.372 423.099 126.301 420.584 132.589 420.584H702.83C713.25 420.584 718.46 433.16 711.094 440.526L598.447 553.173C594.135 557.485 588.207 560 581.918 560H11.6779C1.25762 560 -3.95252 547.424 3.41354 540.058L116.06 427.411Z" fill="url(#paint0_linear_402_2)" data-v-64af1623></path><path d="M116.06 6.82708C120.552 2.51524 126.481 0 132.589 0H702.83C713.25 0 718.46 12.5762 711.094 19.9423L598.447 132.589C594.135 136.901 588.207 139.416 581.918 139.416H11.6779C1.25762 139.416 -3.95252 126.84 3.41354 119.474L116.06 6.82708Z" fill="url(#paint1_linear_402_2)" data-v-64af1623></path><path d="M598.447 215.772C594.135 211.46 588.207 208.944 581.918 208.944H11.6779C1.25762 208.944 -3.95252 221.521 3.41354 228.887L116.06 341.534C120.372 345.845 126.301 348.361 132.589 348.361H702.83C713.25 348.361 718.46 335.784 711.094 328.418L598.447 215.772Z" fill="url(#paint2_linear_402_2)" data-v-64af1623></path></g><defs data-v-64af1623><linearGradient id="paint0_linear_402_2" x1="648.355" y1="-67.2922" x2="253.703" y2="688.625" gradientUnits="userSpaceOnUse" data-v-64af1623><stop stop-color="#00FFA3" data-v-64af1623></stop><stop offset="1" stop-color="#DC1FFF" data-v-64af1623></stop></linearGradient><linearGradient id="paint1_linear_402_2" x1="475.792" y1="-157.385" x2="81.1398" y2="598.533" gradientUnits="userSpaceOnUse" data-v-64af1623><stop stop-color="#00FFA3" data-v-64af1623></stop><stop offset="1" stop-color="#DC1FFF" data-v-64af1623></stop></linearGradient><linearGradient id="paint2_linear_402_2" x1="561.524" y1="-112.625" x2="166.872" y2="643.292" gradientUnits="userSpaceOnUse" data-v-64af1623><stop stop-color="#00FFA3" data-v-64af1623></stop><stop offset="1" stop-color="#DC1FFF" data-v-64af1623></stop></linearGradient><clipPath id="clip0_402_2" data-v-64af1623><rect width="714.508" height="560" fill="white" data-v-64af1623></rect></clipPath></defs></svg></div><span class="name" data-v-64af1623>Solana</span></div></div>`);
  _push(ssrRenderComponent(_component_connectButton, { class: "connect-btn" }, null, _parent));
  _push(`<div class="settings-button" data-v-64af1623><svg aria-hidden="true" focusable="false" data-prefix="fasl" data-icon="gear" class="svg-inline--fa fa-gear IconButton_iconMd__DoW9i" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-v-64af1623><path d="M195 108c-13.2 5.4-25.5 12.6-36.7 21.2l-13.3 10.2-16-5.1-52-16.6L46.9 170.2l40.3 36.7 12.4 11.3-2.2 16.6c-.9 6.9-1.4 14-1.4 21.2s.5 14.3 1.4 21.2l2.2 16.6L87.2 305.1 46.9 341.8l30.2 52.4 52-16.6 16-5.1 13.3 10.2c11.2 8.6 23.5 15.8 36.7 21.2l15.5 6.4 3.6 16.4L225.8 480h60.5l11.7-53.3 3.6-16.4L317 404c13.2-5.4 25.5-12.6 36.7-21.2l13.3-10.2 16 5.1 52 16.6 30.2-52.4-40.3-36.7-12.4-11.3 2.2-16.6c.9-6.9 1.4-14 1.4-21.2s-.5-14.3-1.4-21.2l-2.2-16.6 12.4-11.3 40.3-36.7-30.2-52.4-52 16.6-16 5.1-13.3-10.2c-11.2-8.6-23.5-15.8-36.7-21.2l-15.5-6.4-3.6-16.4L286.2 32H225.8L214.1 85.3l-3.6 16.4L195 108zM200 0H312l17.2 78.4c15.8 6.5 30.6 15.1 44 25.4l76.5-24.4 56 97-59.4 54.1c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l59.4 54.1-56 97-76.5-24.4c-13.4 10.3-28.2 18.9-44 25.4L312 512H200l-17.2-78.4c-15.8-6.5-30.6-15.1-44-25.4L62.3 432.5l-56-97 59.4-54.1C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L6.3 176.5l56-97 76.5 24.4c13.4-10.3 28.2-18.9 44-25.4L200 0zM312 256a56 56 0 1 0 -112 0 56 56 0 1 0 112 0zm-144 0a88 88 0 1 1 176 0 88 88 0 1 1 -176 0z" data-v-64af1623></path></svg></div><div class="burger-menu" data-v-64af1623><svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-64af1623><path d="m13 16.745c0-.414-.336-.75-.75-.75h-9.5c-.414 0-.75.336-.75.75s.336.75.75.75h9.5c.414 0 .75-.336.75-.75zm9-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm-4-5c0-.414-.336-.75-.75-.75h-14.5c-.414 0-.75.336-.75.75s.336.75.75.75h14.5c.414 0 .75-.336.75-.75z" fill-rule="nonzero" data-v-64af1623></path></svg></div></div></div></header>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tradeHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-64af1623"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=tradeHeader-xZD7MTwr.mjs.map
