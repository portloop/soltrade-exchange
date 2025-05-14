import { b as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as __nuxt_component_0 } from './tradeHeader-xZD7MTwr.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_1 } from './desktop-ui-dark-Dw4BnIW0.mjs';
import { _ as _export_sfc } from './server.mjs';
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
import './client-only-BPnFcVTS.mjs';
import 'solana-wallets-vue';
import './pyth_logo_lockup_dark-NNVb3UNp.mjs';
import 'vue-router';
import '@solana/wallet-adapter-wallets';

const _imports_0 = "" + buildAssetsURL("biglogo.B5dYVfMb.png");
const _sfc_main = {
  components: {
    tradeHeader: __nuxt_component_0
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_tradeHeader = __nuxt_component_0;
  _push(`<!--[--><div class="stars-background" data-v-f92f4a18><div id="stars" data-v-f92f4a18></div><div id="stars2" data-v-f92f4a18></div><div id="stars3" data-v-f92f4a18></div></div>`);
  _push(ssrRenderComponent(_component_tradeHeader, null, null, _parent));
  _push(`<div class="container m-auto" data-v-f92f4a18><div class="first-section" data-v-f92f4a18><div class="leftside" data-v-f92f4a18><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-f92f4a18><img class="screenshot"${ssrRenderAttr("src", _imports_1)} alt="" data-v-f92f4a18></div><div class="rightside" data-v-f92f4a18><div class="item first" data-v-f92f4a18><div class="icon" data-v-f92f4a18> Presale </div></div><div class="item" data-v-f92f4a18><div class="icon" data-v-f92f4a18> Q2 2025 </div><div class="text" data-v-f92f4a18> Launch BTC/USD, SOL/USD, ETH/USD pairs </div></div><div class="item" data-v-f92f4a18><div class="icon" data-v-f92f4a18> Q2 2025 </div><div class="text" data-v-f92f4a18> USDT dividends to $TRADE holders </div></div><div class="item" data-v-f92f4a18><div class="icon" data-v-f92f4a18> Q3 2025 </div><div class="text" data-v-f92f4a18> Launch FX pairs &amp; altcoins </div></div></div></div></div><div class="Tokenomics" data-v-f92f4a18>Benefits from Holding $TRADE</div><div class="container m-auto" data-v-f92f4a18><div class="first-section" data-v-f92f4a18><div class="leftside" data-v-f92f4a18><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-f92f4a18></div><div class="rightside" data-v-f92f4a18><div class="item" data-v-f92f4a18><div class="text" data-v-f92f4a18> Earn a share of the platform\u2019s trading fees </div></div><div class="item" data-v-f92f4a18><div class="text" data-v-f92f4a18> Discount on trading fees for holding certain thresholds of $TRADE </div></div><div class="item" data-v-f92f4a18><div class="text" data-v-f92f4a18> Early access to new $TRADE markets </div></div></div></div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/roadmap.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const roadmap = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f92f4a18"]]);

export { roadmap as default };
//# sourceMappingURL=roadmap-CAzd0-pT.mjs.map
