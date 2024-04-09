<template>
    <div>
      <button @click="connectSolflare">Connect Solflare Wallet</button>
      <button @click="connectPhantom">Connect Phantom Wallet</button>
      <div v-if="connected">
        <p>Connected to {{ walletName }}.</p>
        <p>Wallet public key: {{ publicKey }}</p>
        <p v-if="balance !== null">Balance: {{ balance }} SOL</p>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { Connection, PublicKey, SystemProgram, Transaction, clusterApiUrl } from '@solana/web3.js';
  import Wallet from '@project-serum/sol-wallet-adapter';
  
  export default {
    setup() {
      const connected = ref(false);
      const walletName = ref('');
      const publicKey = ref('');
      const balance = ref(null);
  
      const connectSolflare = async () => {
        const provider = 'https://solflare.com/access-wallet';
        const wallet = new Wallet(provider);
        wallet.on('connect', publicKey => {
          console.log('Connected to Solflare Wallet:', publicKey.toBase58());
          connected.value = true;
          walletName.value = 'Solflare';
          publicKey.value = publicKey.toBase58();
          getBalance(publicKey);
        });
        wallet.on('disconnect', () => {
          console.log('Disconnected from Solflare Wallet');
          connected.value = false;
          walletName.value = '';
          publicKey.value = '';
          balance.value = null;
        });
        await wallet.connect();
      };
  
      const connectPhantom = async () => {
  const provider = getProvider(); // Проверяем наличие Phantom и получаем провайдер
  if (!provider) {
    const isConfirmed = confirm('Phantom Wallet is not installed or not supported. Do you want to visit the Phantom website to download or use the Web Wallet?');
    if (isConfirmed) {
      window.open('https://phantom.app/', '_blank');
    }
    return;
  }

  try {
    await provider.connect(); // Подключаемся к Phantom
    const publicKey = await provider.publicKey(); // Получаем публичный ключ
    console.log('Connected to Phantom Wallet:', publicKey.toBase58());
    connected.value = true;
    walletName.value = 'Phantom';
    publicKey.value = publicKey.toBase58();
    getBalance(publicKey);
  } catch (error) {
    console.error('Failed to connect to Phantom Wallet:', error);
  }
};




      const getBalance = async (publicKey) => {
        const connection = new Connection(clusterApiUrl('devnet'));
        const accountInfo = await connection.getAccountInfo(new PublicKey(publicKey));
        if (accountInfo !== null) {
          balance.value = (accountInfo.lamports / 10 ** 9).toFixed(9);
        } else {
          balance.value = null;
        }
      };
  
      return {
        connectSolflare,
        connectPhantom,
        connected,
        walletName,
        publicKey,
        balance
      };
    }
  }
  </script>
  