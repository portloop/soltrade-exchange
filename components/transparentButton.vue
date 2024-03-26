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
    
  };
  </script>
  
  <style scoped>
    @import url(../assets/style/components/transparentBtn.css)
  </style>
  