<template>

      <v-speed-dial
        v-model="fab"
        fixed
        bottom
        right
         :open-on-hover="true"
      >
        <template v-slot:activator>
          <v-btn
            v-model="fab"
            color="#651FFF"
            large
            dark
            fab
          >
            <v-icon v-if="fab">mdi-close</v-icon>
            <v-icon v-else>mdi-plus</v-icon>
          </v-btn>
        </template>
        <v-btn
          fab
          dark
          color="green"
        >
          <v-icon>mdi-view-list</v-icon>
        </v-btn>
        <v-btn
          fab
          dark
          color="indigo"
          @click="openModal"
        >
          <v-icon>mdi-lead-pencil</v-icon>
        </v-btn>
      </v-speed-dial>

</template>
<script>
export default {
  name: "BtnCreate",
  data: () => {
    return {
      createTaskForm:true,
      transition: 'slide-y-reverse-transition',
      fab:''
    }
  },
  methods:{
    openModal(){
      this.createTaskForm = true
      this.$store.commit('modal/createTaskForm', this.createTaskForm )
    }
  }
};
</script>