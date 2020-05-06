<template>

  <v-dialog v-model="isActive" persistent max-width="290">
        <v-card>
          <v-card-title>{{title}}</v-card-title>
          <v-card-text>{{description}}</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="#651FFF" text @click="closeModal()">No</v-btn>
            <v-btn color="#FF1744" text @click="deleteTask">Yes</v-btn>
          </v-card-actions>
        </v-card>
    </v-dialog>

</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name:'ConfirmDialog',
    props:[
      'title',
      'description',
    ],
    methods:{

        deleteTask() {
          this.$store.commit("modal/confirmDelete", false)
          this.$store.commit("modal/updateTask", false)
          this.$store.commit("modal/viewTask", false)
          this.$store.commit("task/deleteTask", this.task);
        },
        closeModal(){
          if(this.task.title){
              this.$store.commit("modal/confirmDialog", false)
          }else if(!this.task.title){
             this.$store.commit("modal/updateTask", true)
             this.$store.commit("modal/confirmDialog", false)
          }
        }

    },
    computed:{
      ...mapGetters({
        task: "task/getTaskUpdate",
        isActive: 'modal/getConfirmDialog',
      })
    }
}
</script>

<style>

</style>