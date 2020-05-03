<template>
  <span>
    <v-card class="animated fadeIn faster">
      <v-card-title :class="item.level" ></v-card-title>
      <template>
        <v-menu  right  absolute>
          <template v-slot:activator="{ on }">
            <v-btn dark icon v-on="on"  absolute right class="grey--text pb-4">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="updateTask(item)">
              <v-list-item-title ><v-icon>mdi-pen</v-icon> Edit</v-list-item-title>
            </v-list-item>
            <v-list-item @click="confirmDialog = !confirmDialog">
              <v-list-item-title><v-icon>mdi-delete</v-icon> Delete</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
      <v-card-title v-show="item.title">
        {{item.title}}
        <v-btn icon @click="show = !show" v-if="item.description">
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-title>
      
      <v-expand-transition>
        <div v-show="show" class="test">
          <v-card-text>{{item.description}}</v-card-text>
        </div>
      </v-expand-transition>

    </v-card>
    <ConfirmDelete :dialog="this.confirmDialog" :item="item" />
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
      confirmDialog: false,
      show: false
    };
  },
  props: ["item"],
  methods: {
    updateTask(data) {
      this.$store.dispatch("task/setTaskUpdate", data);
      this.$store.commit("modal/updateTaskForm", true);
    }
  }
};
</script>

<style scoped>
.test{
  position: static!important;
}
</style>