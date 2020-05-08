<template>
  <v-dialog v-model="setDialog.active" v-if="setDialog.active" persistent max-width="290">
    <v-card>
      <v-card-title >{{ setDialog.info.title }}</v-card-title>
      <v-card-text>{{ setDialog.info.message }}</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="#651FFF" text @click="deny()">{{ setDialog.button.deny.name }}</v-btn>
        <v-btn color="#651FFF" text @click="confirm()">{{ setDialog.button.confirm.name }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ConfirmDialog",
  methods: {
    deny(){
      this.$store.commit('modal/confirmDialog', { active:false })
    },
    confirm(){

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
