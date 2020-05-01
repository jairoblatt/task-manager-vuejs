<template>
  <v-dialog v-model="modalUpdate" max-width="600px">
    <v-card outlined>
      <v-card-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="closeModal">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="12" md="12">
              <v-form ref="form">
                <v-text-field color="#651FFF" v-model="taskUpdate.title" label="Title"></v-text-field>
                <v-textarea
                  color="#651FFF"
                  name="input-7-4"
                  v-model="taskUpdate.description"
                  label="Description"
                ></v-textarea>
              </v-form>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-text>
        <v-chip-group active-class="deep-purple accent-4 white--text" column>
          <v-chip>Group 1</v-chip>

          <v-chip>Group 2</v-chip>

          <v-chip>Group 3</v-chip>

          <v-chip>Group 4</v-chip>
        </v-chip-group>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="#651FFF" text @click="saveUpdate(taskUpdate)">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "UpdateTask",
  methods: {

    saveUpdate(data) {
      if (data.title || data.description) {
        this.$store.commit("task/saveTask", data);
        this.$store.commit("modal/updateTaskForm", false);
      } else {
        console.log("se tá tirando irmão ");
      }
    },

    closeModal(){ 
      this.$store.commit("modal/updateTaskForm", false) 
      }

  },
  computed: mapGetters({
    modalUpdate: "modal/getUpdateDialog",
    taskUpdate: "task/getTaskUpdate"
  })
};
</script>

<style>
</style>