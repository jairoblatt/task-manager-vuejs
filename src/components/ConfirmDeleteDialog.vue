<template>
  <v-dialog v-model="dialog" persistent max-width="290">
        <v-card>
          <v-card-title >Want to delete this task?</v-card-title>
          <v-card-text>This action cannot be reversed</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="#651FFF" text @click="dialog = false">No</v-btn>
            <v-btn color="#FF1744" text @click="deleteTask(item)">Yes</v-btn>
          </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name:'ConfirmDeleteDialog',
    props:[
        'dialog',
        'item'
    ],
    methods:{
        deleteTask(data) {
        this.$store.commit("task/deleteTask", data);
        },
    }
}
</script>

<style>

</style>