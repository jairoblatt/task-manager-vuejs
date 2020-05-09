<template>
  <v-dialog v-model="setDialog.active" v-if="setDialog.active" persistent max-width="290">
    <v-card>
      <v-card-title >{{ setDialog.info.title }}</v-card-title>
      <v-card-text>{{ setDialog.info.message }}</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="#651FFF" text @click="deny()">{{ setDialog.buttons.deny }}</v-btn>
        <v-btn color="#651FFF" text @click="confirm()">{{ setDialog.buttons.confirm }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from "vuex";
import { gridHeigh } from "@/util/validate";
export default {
  name: "ConfirmDialog",
  methods: {
    deny(){
      this.$store.commit('modal/confirmDialog', { active:false })
    },
    confirm(){
        switch(this.setDialog.origin){
          case 'ConfirmDelete':
            this.destroy()
          break;
          case 'ConfirmUpdate':
            this.update()
          break;
          case 'ViewTask':
            this.viewTaskDelete()
          break;
        }
    },
    destroy(){
      this.$store.commit('task/deleteTask', this.task)
      this.closeModalUpdate()
      this.closeModalConfirm()
    },
    update(){
      this.task.h = gridHeigh(this.task.title);
      this.$store.commit("task/saveTask", this.task);
      this.closeModalUpdate()
      this.closeModalConfirm()
    },
    viewTaskDelete(){
      this.$store.commit('task/deleteTask', this.task)
      this.closeModalViewTask()
      this.closeModalConfirm()
    },
    closeModalUpdate(){
      return  this.$store.commit("modal/updateTask", false);
    },
    closeModalConfirm(){
      return this.$store.commit('modal/confirmDialog', { active:false })
    },
    closeModalViewTask(){
      return this.$store.commit('modal/viewTask', false)
    }
    
    
  },
  computed: {
    ...mapGetters({
      task: "task/getTaskUpdate",
      setDialog: "modal/getConfirmDialog"
    })
  }
};
</script>
