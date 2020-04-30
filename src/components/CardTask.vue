<template>
  <grid-layout
    :layout.sync="layout"
    :col-num="12"
    :row-height="80"
    :is-draggable="true"
    :is-resizable="false"
    :is-mirrored="false"
    :vertical-compact="true"
    :margin="[10, 10]"
    :use-css-transforms="true"
  >
    <grid-item
      v-for="item in layout"
      :x="item.x"
      :y="item.y"
      :w="2"
      :h="2"
      :i="item.i"
      :key="item.id"
    >

      <v-card outlined>
        <v-spacer></v-spacer>
        <v-btn absolute right icon @click="deleteTask(item)">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-card-title>{{item.title}}</v-card-title>
        <v-card-text>{{item.description}}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-pen</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </grid-item>
  </grid-layout>
</template>

<script>
import { mapGetters } from "vuex";
import VueGridLayout from "vue-grid-layout";

export default {
  name: "CardTask",

  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem
  },

  data: () => {
    return {};
  },
  methods: {
    deleteTask(data){
      this.$store.commit('task/deleteTask', data)
    }
  },
  computed: mapGetters({ layout: "task/getTask" })
};
</script>
