<script lang="ts" setup>
import { WalletMultiButton, useWallet } from 'solana-wallets-vue'

const { publicKey } = useWallet()

// Определяем событие
const publicKeyReceived = () => {
  emit('publicKeyReceived', publicKey)
}
</script>

<template>
    <div class="flex items-center">
      
        <div v-if="publicKey" @click="publicKeyReceived"></div>
        <div  class="mr-6" v-else>Please connect your wallet</div>
        <ClientOnly  v-if="!publicKey">
            <WalletMultiButton />
            <template #placeholder>
              Loading
            </template>
          </ClientOnly>
    </div>
 
  <!-- Отправляем событие при получении publicKey -->

</template>



<style scoped>
.order-list__body:deep(button)  {
    height: 20px !important;
    width: 100% !important;
    justify-content: center !important;
    background-color: transparent !important;
    margin-left: 0;

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