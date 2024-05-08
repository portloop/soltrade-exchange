import { _ as __nuxt_component_0 } from './client-only-BPnFcVTS.mjs';
import { defineComponent, withCtx, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { useWallet } from 'solana-wallets-vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "connectButton",
  __ssrInlineRender: true,
  setup(__props) {
    const { publicKey } = useWallet();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(`<!--[-->`);
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
      _push(`<div>`);
      if (unref(publicKey)) {
        _push(`<p>${ssrInterpolate(unref(publicKey))}</p>`);
      } else {
        _push(`<p>Please connect your wallet</p>`);
      }
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/connectButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=connectButton-CEqYWpzM.mjs.map
