<template>
  <v-dialog v-model="modalUpdate" persistent max-width="290">
    <v-card>
      <v-container>
        <v-row>
          <v-col cols="12" sm="12" md="12">
            <v-form ref="form">
              <v-text-field outlined color="#651FFF" v-model="taskUpdate.title" label="Title"></v-text-field>
              <v-textarea outlined color="#651FFF" name="input-7-4" v-model="taskUpdate.description"  label="Description"></v-textarea>
            </v-form>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="#651FFF" text @click="saveUpdate(taskUpdate)">Save</v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name:'UpdateTask',
    methods:{
        saveUpdate(data){
            this.$store.commit('task/saveTask',data)
            this.$store.commit('modal/setUpdateTaskForm', false);
            console.log('Deu certo')
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