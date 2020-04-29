<template v-slot:activator="{ on }">

  <v-btn color="pink" large dark fixed bottom right fab @click="openModal()">
    <v-icon>mdi-plus</v-icon>
  </v-btn>

</template>
<script>
export default {
  name: "BtnCreate",
  data: () => {
    return {
      createTaskForm:true
    }
  },
  methods:{
    openModal(){
      this.createTaskForm = true
      this.$store.commit('modal/setDialog', this.createTaskForm )
    }
  }
};
</script>