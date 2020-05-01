<template>
  <v-list>

    <v-list-item link @click="createTaskModal()">
      <v-list-item-icon>
        <v-icon>mdi-lead-pencil</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>Add Task</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list-item link @click="createTaskModal()">
      <v-list-item-icon>
        <v-icon>mdi-view-list</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>New group</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

  </v-list>
</template>

<script>
export default {
  name:'NavBarList',
  methods: {
    createTaskModal() {
      this.$store.commit("modal/createTaskForm", true);
    }
  }
};
</script>

<style>
</style>