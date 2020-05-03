<template>
  <v-container fluid>
    <!-- <v-navigation-drawer app>
          <nav-bar/>
   </v-navigation-drawer> -->
    <v-row>
      <v-col cols="12" md="12">
        <v-content>
          <btn-create />
          <create-task-form />
          <update-task-form />
          <grid-card />
        </v-content>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BtnCreate from "@/components/BtnCreate";
import GridCard from "@/components/card/GridCard";
import CreateTaskForm from "@/components/form/CreateTaskForm";
import UpdateTaskForm from "@/components/form/UpdateTask";
// import NavBar from "@/components/navbar/NavBar";
export default {
  name: "Main",
  components: {
    CreateTaskForm,
    BtnCreate,
    GridCard,
    UpdateTaskForm,
    // NavBar
  },
  created() {
    this.$store.dispatch("task/getTask");
  }
};
</script>
