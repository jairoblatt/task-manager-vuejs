<template>
  <span >
    <v-card 
      class="animated fadeIn faster"
      v-if="item.title"
    >
      <v-card-title :class="color"></v-card-title>
        <v-btn icon  right absolute > <v-icon @click="openUpdateTask(item)" >mdi-pen</v-icon></v-btn >
      <v-card-title 
        class="mouse-pointer" 
        @click="openViewTask(item)"
      >
        {{item.title}}
      </v-card-title>
    </v-card>
  </span>
</template>
<script>
import { mapGetters } from "vuex";
import { gridHeigh } from '@/util/validate'
export default {
  name: "CardContent",
  props: [ "item" ],
  methods: {

    openViewTask(data){
      this.$store.dispatch("task/setTaskUpdate", data);
      this.$store.commit("modal/viewTask", true);
    },

    openUpdateTask(data){
      this.$store.dispatch("task/setTaskUpdate", data);
      this.$store.commit("modal/updateTask", true)
    }

  },
  computed: {
    color(){
      if (this.item.level < 25) return "deep-purple accent-3";
      if (this.item.level < 50) return "light-blue ";
      if (this.item.level < 75) return "lime";
      if (this.item.level < 110) return "red accent-3";
      return "red accent-3";
    }
  }
};
</script>

<style scoped>
.mouse-pointer{
  cursor:pointer!important
}
</style>