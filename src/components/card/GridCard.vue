<template>

  <grid-layout
    :layout.sync="layout"
    :col-num="11"
    :row-height="50"
    :is-draggable="true"
    :is-resizable="false"
    :is-mirrored="false"
    :vertical-compact="true"
    :margin="[10, 10]"
    :use-css-transforms="true"
    @click="closeSubMenu()"
  >

      <grid-item
        v-for="item in layout"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        :key="item.id"
       @moved="movedEvent"
      >

        <console 
        :active="IsConsole" 
        :x="item.x" 
        :y="item.y" 
        :i="item.i"
        />
 
          <card-content 
          :item="item"
          />

      </grid-item>
  </grid-layout>
</template>

<script>
import { mapGetters } from "vuex";
import VueGridLayout from "vue-grid-layout";
import Console from "./console"
import CardContent from './CardContent'
export default {
  name: "CardTask",
  data:()=>{
    return {
      IsConsole:false
    }
  },
  components: {
    CardContent,
    Console,
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
  },
  methods:{
     movedEvent: function(i, newX, newY){
        const updatePosition = this.layout.find( itens => itens.i === i)
        updatePosition.x = newX
        updatePosition.y = newY
        this.$store.commit('task/saveTask',updatePosition)
    },
    closeSubMenu(){
     this.$store.commit('modal/subMenuTask', false)
    }
  },
  computed: mapGetters({ layout: "task/getTask" })
};
</script>
