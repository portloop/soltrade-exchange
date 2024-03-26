<template>
    <div class="header">
        <div class="header-component">
            <a href="/" class="header-container__logo">
                <img src="../assets/img/weblogo transparent.png" alt="">
            </a>
            <div class="buttons">
                <a href="/roadmap" class="transp-btn">Roadmap</a>
            <orangeBtn class="header-button" path="/trade" text="Trade" />
            </div>
        </div>
    </div>
</template>
<script>
import orangeBtn from './orangeBtn.vue';
export default {
    components: {
        orangeBtn
    }
}
</script>
<style scoped>
    @import url(../assets/style/components/header.css);
</style>