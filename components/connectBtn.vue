<script lang="ts" setup>
import { WalletMultiButton, useWallet } from 'solana-wallets-vue'
// import { useToast } from "vue-toastification";

// const { publicKey } = useWallet()
// const { wallet, program } = useAnchor()

// const toast = useToast();
// watch(wallet, () => {
//     // if(wallet.value?.publicKey) toast('anchor wallet available');
// })

// /* Anchor Examples */
// const create = async () => {
//     const tx = await program.value.methods.create().rpc();
// }
// const increment = async () => {
//     const tx = await program.value.methods.increment().rpc();
// }
</script>

<template>
 
          <ClientOnly>
                <WalletMultiButton />
                <template #placeholder>
                    Loading
                </template>
          </ClientOnly>
          <!-- <div>
              <p v-if="publicKey">{{ publicKey }}</p>
              <p v-else>Please connect your wallet</p>
          </div> -->
</template>


<style>
.swv-button-trigger {
    height: 40px !important;
}

@media screen and (max-width: 795px) {
    .swv-button-trigger {
        max-width: 160px;
        font-size: 12px;
    }

    .swv-button-trigger p {
        max-width: 100%;
        font-size: 12px;
    }
}
</style>