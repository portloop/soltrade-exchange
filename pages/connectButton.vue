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
          <div>
              <p v-if="publicKey">{{ publicKey }}</p>
              <p v-else>Please connect your wallet</p>
          </div>
</template>