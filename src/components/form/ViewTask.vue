<template>
  <v-dialog v-model="viewModal" max-width="600px">
    <v-card outlined>
      <v-card-title>
        <v-chip class="ma-2" :color="colorValidate" label text-color="white"></v-chip>
        <v-btn class="mt-2" icon right absolute @click="closeModal">
          <v-icon :color="colorValidate">mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="12" md="12">
              <v-card-title class="font-weight-bold">{{ task.title }}</v-card-title>
              <v-card-text class="font-weight-medium"> {{ task.description }}</v-card-text>
            </v-col>
          </v-row>
        </v-container>
          <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn icon right > <v-icon @click="openUpdateTask(task)">mdi-pen</v-icon></v-btn>
        <v-btn icon right color="grey" @click="confirmDelete()">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-card-actions>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "UpdateTask",
  methods: {
    closeModal() {
      this.$store.commit("modal/viewTask", false);
    },
    confirmDelete() {
      this.$store.commit("modal/confirmDialog",{
        active:true,
        name:'ViewTask',
        title:"Do you want to delete this task?",
        description:"This action cannot be undone"
      })
    },
    openUpdateTask(data){
      this.$store.dispatch("task/setTaskUpdate", data);
      this.$store.commit("modal/updateTask", true)
    }
  },
  computed: {
    colorValidate() {
      if (this.task.level < 25) return "deep-purple accent-3";
      if (this.task.level < 50) return "light-blue ";
      if (this.task.level < 75) return "lime";
      if (this.task.level < 110) return "red accent-3";
      return "red accent-3";
    },
    ...mapGetters({
      task: "task/getTaskUpdate",
      viewModal: "modal/getViewTask"
    })
  }
};
</script>

<style>
</style>