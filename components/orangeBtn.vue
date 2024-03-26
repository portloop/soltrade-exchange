<template>
    <a :href="path" :class="btnClass" >{{ text }}</a>
  </template>
  
  <script>
  export default {
    props: {
      text: {
        type: String,
        required: true
      },
      path: {
        type: String,
        required: true
      }
    },
    computed: {
      btnClass() {
        return 'btn'; 
      }
    },
    methods: {
      navigateToPath() {
        this.$router.push(this.path);
      }
    }
  };
  </script>
  
  <style scoped>
    @import url(../assets/style/components/orangeBtn.css)
  </style>
  