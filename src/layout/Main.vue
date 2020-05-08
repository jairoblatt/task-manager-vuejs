<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="12">
        <v-content>
          <btn-create />
          <create-task-form />
          <View-task-form />
          <update-task-form/>
          <grid-card />
          <confirm-dialog/>
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
import { mapGetters } from 'vuex'
import ConfirmDialog from '@/components/card/ConfirmDialog'
export default {
  name: "Main",
  components: {
    CreateTaskForm,
    BtnCreate,
    GridCard,
    ViewTaskForm,
    UpdateTaskForm,
    ConfirmDialog
  },
  created() {
    this.$store.dispatch("task/getTask");
  }
};
</script>
