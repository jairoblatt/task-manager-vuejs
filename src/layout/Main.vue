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
          <View-task-form />
          <update-task-form/>
          <confirm-delete/>
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
import ViewTaskForm from "@/components/form/ViewTask";
import UpdateTaskForm from '@/components/form/UpdateTask'
import ConfirmDelete from '@/components/card/ConfirmDeleteDialog'
import { mapGetters } from 'vuex'
// import NavBar from "@/components/navbar/NavBar";
export default {
  name: "Main",
  components: {
    CreateTaskForm,
    BtnCreate,
    GridCard,
    ViewTaskForm,
    UpdateTaskForm,
    ConfirmDelete
  },
  created() {
    this.$store.dispatch("task/getTask");
  }
};
</script>
