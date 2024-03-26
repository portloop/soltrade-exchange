<script lang="ts" setup>
import { WalletMultiButton, useWallet } from 'solana-wallets-vue'
// import { useToast } from "vue-toastification";

const { publicKey } = useWallet()
// const { wallet, program } = useAnchor()

// const toast = useToast();
// let walletConnected = false; // Флаг для отслеживания подключенного кошелька

// watch(wallet, () => {
//     if(wallet.value?.publicKey && !walletConnected) {
//         // toast('anchor wallet available');
//         walletConnected = true;
//     }
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
    <div class="w-full" v-if="!publicKey">
        <ClientOnly class="w-full">
            <WalletMultiButton class="w-full" />
            <template #placeholder>
                Loading
            </template>
        </ClientOnly>
    </div>
    <div class="deal-buttons__operation" v-if="publicKey">
        <button>Long</button>
        <button>Short</button>
    </div>
</template>

<style scoped>
.swv-button-trigger, .swv-dropdown {
    width: 100% !important;
}

.swv-button-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
}

.w-full {
    width: 100%;
}

.w-full:deep(div),
.w-full:deep(button) {
    width: 100% !important;
    display: flex;
    align-items: center;
    justify-content: center;
}

.w-full:deep(button) {
    margin-top: 30px;
}

.deal-buttons__operation:deep(button) {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Aptos-SemiBold', sans-serif;
}

.deal-buttons__operation:deep(button):first-child {
    background-color: #35af80;
    color: #fff;
    margin-top: 20px;
    border-radius: 6px;
}

.deal-buttons__operation:deep(button):last-child {
    background-color: #c13447;
    color: #fff;
    margin-top: 20px;
    border-radius: 6px;
}


@media screen and (max-width: 796) {
    .swv-button-trigger, .swv-dropdown {
        width: 100% !important;
        max-width: unset;
    }

    .w-full >>> button {
        width: 100% !important;
        max-width: unset !important;
    }
}
</style>