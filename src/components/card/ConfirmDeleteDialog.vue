<template>
  <v-dialog v-model="dialog" persistent max-width="290">
        <v-card>
          <v-card-title >Want to delete this task?</v-card-title>
          <v-card-text>This action cannot be reversed</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="#651FFF" text @click="closeModal">No</v-btn>
            <v-btn color="#FF1744" text @click="deleteTask">Yes</v-btn>
          </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name:'ConfirmDeleteDialog',
    methods:{

        deleteTask() {
          this.$store.commit("modal/confirmDelete", false)
          this.$store.commit("modal/updateTask", false)
          this.$store.commit("task/deleteTask", this.task);
        },

        closeModal(){
          this.$store.commit("modal/confirmDelete", false)
        }

    },
    computed:{
      ...mapGetters({
        task: "task/getTaskUpdate",
        dialog: 'modal/getConfirmDelete'
      })
    }
}
</script>

<style>

</style>