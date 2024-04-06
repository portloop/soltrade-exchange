<template>
    <div>
      <WalletMultiButton />
    </div>
  </template>
  
  <script setup lang="ts">
  import { WalletMultiButton } from 'solana-wallets-vue'
  </script>


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