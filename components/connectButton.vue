<script lang="ts" setup>
import { WalletMultiButton, useWallet } from 'solana-wallets-vue'

const { publicKey } = useWallet()



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
    width: 100% !important;
    justify-content: center !important;

}

.swv-dropdown {
    width: 100% !important;

}


.swv-dropdown >>> button {
    width: 100%;
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