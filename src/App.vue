<template>
  <v-app id="inspire">
    <main-template/>
  </v-app>
</template>

<script>
import MainTemplate from './layout/Main'
  export default {
      name:'App',
      data:()=>{
        return {
            test:''
        }
      },
      components:{
        MainTemplate
      }
  }
</script>