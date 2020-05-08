<template>

  <v-dialog v-model="setDialog.active" persistent max-width="290">
        <v-card>
          <v-card-title>{{ setDialog.title }}</v-card-title>
          <v-card-text>{{  setDialog.description }}</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="#651FFF" text @click="closeModal()">No</v-btn>
            <v-btn color="#FF1744" text @click="deleteTask()">Yes</v-btn>
          </v-card-actions>
        </v-card>
    </v-dialog>

</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name:'ConfirmDialog',
    methods:{

        deleteTask() {
          this.$store.commit("task/deleteTask", this.task);
          this.$store.commit("modal/confirmDialog", { active:false })
          this.$store.commit(this.componentValidate(), false)
        },
        closeModal(){
          this.$store.commit(this.componentValidate(), true)
          this.$store.commit("modal/confirmDialog", { active:false })
          console.log('passou pelo close Modal')
        },
        componentValidate(){
           if(this.setDialog.name === 'UpdateTask'){
             return "modal/updateTask"
           }else{
             return "modal/viewTask"
           }
        }
    },
    computed:{
      ...mapGetters({
        task: "task/getTaskUpdate",
        setDialog: 'modal/getConfirmDialog',
      })
    }
}
</script>

<style>

</style>