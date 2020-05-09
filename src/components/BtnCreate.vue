<template>
    <v-btn fab dark large  fixed bottom right color="#651FFF" @click="openModal">
       <v-icon>mdi-plus</v-icon>
    </v-btn>
</template>
<script>
export default {
  name: "BtnCreate",
  data: () => {
    return {
      createTaskForm: true,
      transition: "slide-y-reverse-transition",
      fab: ""
    };
  },
  methods: {
    openModal() {
      this.createTaskForm = true;
      this.$store.commit("modal/createTaskForm", this.createTaskForm);
    }
  }
};
</script>