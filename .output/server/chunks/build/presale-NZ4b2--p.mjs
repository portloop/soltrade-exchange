import { _ as __nuxt_component_0 } from './tradeHeader-xZD7MTwr.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './transp_logo-B9WnOw8Z.mjs';
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
import './client-only-BPnFcVTS.mjs';
import 'solana-wallets-vue';
import './pyth_logo_lockup_dark-NNVb3UNp.mjs';
import 'vue-router';
import '@solana/wallet-adapter-wallets';

const _sfc_main = {
  components: {
    tradeHeader: __nuxt_component_0
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_tradeHeader = __nuxt_component_0;
  _push(`<!--[--><div class="stars-background" data-v-4f36e760><div id="stars" data-v-4f36e760></div><div id="stars2" data-v-4f36e760></div><div id="stars3" data-v-4f36e760></div></div>`);
  _push(ssrRenderComponent(_component_tradeHeader, null, null, _parent));
  _push(`<div class="container mx-auto mt-20" data-v-4f36e760><div class="main-container__text scroll-animation uppercase" data-v-4f36e760> Presale </div><div class="flex flex-col lg:w-full xl:w-10/12 mx-auto xl:flex-row xl:justify-between items-center mt-20" data-v-4f36e760><div class="token-info bg-[#0D0D17] relative z-10" data-v-4f36e760><div class="title" data-v-4f36e760><div class="logo" data-v-4f36e760><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-4f36e760></div><div class="name" data-v-4f36e760> solTrade Token </div></div><div class="description" data-v-4f36e760><div class="adress bold" data-v-4f36e760> Presale SOL Deposit Address: </div><div class="text-sm" data-v-4f36e760> 8FAtw9FJREB4LUDPmVz9baVoyxtK1iDCqwYN49jdFWR9 </div></div><div class="description flex flex-row mb-0" data-v-4f36e760><div class="adress mr-2" data-v-4f36e760> Minimum per wallet: </div><div class="adress" data-v-4f36e760> 1 SOL </div></div><div class="description flex flex-row" data-v-4f36e760><div class="adress mr-2" data-v-4f36e760> Maximum per wallet: </div><div class="adress" data-v-4f36e760> 25 SOL </div></div><div class="description" data-v-4f36e760><div class="adress" data-v-4f36e760> Ticker: <span class="bold" data-v-4f36e760>TRADE</span></div><div class="adress" data-v-4f36e760> Supply: 250,000,000 </div></div></div><div class="soltrade-ico" data-v-4f36e760><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-4f36e760></div><div class="token-info bg-[#0D0D17] relative z-10" data-v-4f36e760><div class="title" data-v-4f36e760><div class="logo" data-v-4f36e760><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-4f36e760></div><div class="name" data-v-4f36e760> Fairlaunch Details </div></div><div class="description flex flex-row" data-v-4f36e760><div class="adress mr-2" data-v-4f36e760> All presale deposits will be tracked and posted publicly on GitHub. </div></div><div class="description flex flex-row" data-v-4f36e760><div class="adress mr-2" data-v-4f36e760> Do not dust Presale Deposit Address. </div></div><div class="description flex flex-row mb-0" data-v-4f36e760><div class="adress mr-2" data-v-4f36e760> 55% Presale </div></div><div class="description flex flex-row mb-0" data-v-4f36e760><div class="adress mr-2" data-v-4f36e760> 30% LP </div></div><div class="description flex flex-row mb-0" data-v-4f36e760><div class="adress mr-2" data-v-4f36e760> 10% CEX </div></div><div class="description flex flex-row mb-0" data-v-4f36e760><div class="adress mr-2" data-v-4f36e760> 5% Team </div></div></div></div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/presale.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const presale = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-4f36e760"]]);

export { presale as default };
//# sourceMappingURL=presale-NZ4b2--p.mjs.map
