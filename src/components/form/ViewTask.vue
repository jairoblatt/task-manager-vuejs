<template>
  <v-dialog v-model="viewModal" max-width="600px">
    <v-card outlined>
      <v-card-title>
         <v-chip
        class="ma-2"
        :color="viewTask.level"
        label
        text-color="white"
      >
      </v-chip>
        <v-btn class="mt-2" icon right absolute @click="closeModal">
          <v-icon :color="viewTask.level">mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="12" md="12">
                <v-card-title class="font-weight-bold">{{ viewTask.title }}</v-card-title>
                <v-card-text class="font-weight-medium">{{ viewTask.description }}</v-card-text>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "UpdateTask",
  methods: {

    closeModal(){ 
      this.$store.commit("modal/viewTask", false) 
      }

  },
  computed:mapGetters({

    viewTask: 'task/getTaskUpdate',
    viewModal: 'modal/getViewTask'

  })
  

};
</script>

<style>
</style>