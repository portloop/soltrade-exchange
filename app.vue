<template>
  <div>
    <NuxtPage />
   
  </div>
</template>

<script>
import { initWallet } from 'solana-wallets-vue'
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets'

export default {
  mounted() {
    const wallets = [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
    ]
    initWallet({ wallets, autoConnect: true })
  }
}
</script>

<style>
@font-face {
  font-family: 'Aptos';
  src: url(/assets/fonts/aptos.ttf);
}

@font-face {
  font-family: 'Aptos-Bold';
  src: url(/assets/fonts/aptos-bold.ttf);
}

@font-face {
  font-family: 'Aptos-SemiBold';
  src: url(/assets/fonts/aptos-semibold.ttf);
}

@font-face {
  font-family: 'Aptos-Black';
  src: url(/assets/fonts/aptos-extrabold.ttf);
}

body {
  background-color: #0D0D17;
  margin: 0;
}
</style>
