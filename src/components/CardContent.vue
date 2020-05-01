<template>
  <span>
    <v-card class="animated fadeIn faster">
      <v-spacer></v-spacer>
      <v-btn absolute right icon @click="confirmDialog = !confirmDialog">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-card-title>{{item.title}}</v-card-title>
      <v-card-text>{{item.description}}</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn icon @click="updateTask(item)">
          <v-icon>mdi-pen</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    <ConfirmDelete 
      :dialog="this.confirmDialog" 
      :item="item" 
    />
  </span>
</template>
<script>
import ConfirmDelete from "./ConfirmDeleteDialog";
export default {
  name: "CardContent",
  components: {
    ConfirmDelete
  },
  data: () => {
    return {
      confirmDialog:false
    };
  },
  props: ["item"],
  methods: {
    updateTask(data) {
      this.$store.dispatch("task/setTaskUpdate", data);

      this.$store.commit("modal/setUpdateTaskForm", true);
    }
  }
};
</script>