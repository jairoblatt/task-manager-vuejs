<template>
  <span >
    <v-card 
      class="animated fadeIn faster"
    >
      <v-card-title :class="item.level"></v-card-title>
      <v-btn icon  right absolute > <v-icon @click="openSubMenu()">mdi-pen</v-icon></v-btn >
      <v-card-title 
        class="mouse-pointer" 
        v-show="!subMenu" 
        @click="openUdateTaskForm(item)"
      >
        {{item.title}}
      </v-card-title>
      <v-textarea
        v-if="subMenu"
        auto-grow
        outlined
        :color="item.level"
        :rows="item.h"
        row-height="15"
        v-model="item.title"
      ></v-textarea>
    </v-card>
    <v-card-actions v-if="subMenu">
      <v-spacer></v-spacer>
      <v-btn :color="item.level" class="white--text" outlined @click="updateTask(item)">Save</v-btn>
      <v-btn color="grey" class="white--text" @click="confirmDialog = !confirmDialog" outlined>
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-card-actions>
    <ConfirmDelete :dialog="this.confirmDialog" :item="item" />
  </span>
</template>
<script>
import ConfirmDelete from "./ConfirmDeleteDialog";
import { mapGetters } from "vuex";
import { gridHeigh } from '@/util/validate'
export default {
  name: "CardContent",
  components: {
    ConfirmDelete
  },
  data: () => {
    return {
      confirmDialog: false,
    };
  },
  props: ["item"],
  methods: {
    updateTask(data) {
      const form = {
        title:data.title,
        ...gridHeigh(data.title)
      }
      this.$store.commit("task/saveTask", form);
      this.$store.commit("modal/subMenuTask", false);
    },

    openSubMenu() {
      if (!this.subMenu) {
        this.$store.commit("modal/subMenuTask", true);
      }
    },
    openUdateTaskForm(data){
      this.$store.dispatch("task/setTaskUpdate", data);
      this.$store.commit("modal/updateTaskForm", true);
    }
  },
  computed: {
    ...mapGetters({
      subMenu: "modal/getsubMenuTask"
    })
  }
};
</script>

<style scoped>
.mouse-pointer{
  cursor:pointer!important
}
</style>