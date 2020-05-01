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
       @moved="movedEvent"
      >

        <console 
        :active="IsConsole" 
        :x="item.x" 
        :y="item.y" 
        :i="item.i"
        />
 
          <card-content :item="item"/>

    </grid-item>
  </grid-layout>
</template>

<script>
import { mapGetters } from "vuex";
import VueGridLayout from "vue-grid-layout";
import Console from "@/components/Console"
import CardContent from '@/components/CardContent'
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
  },
  computed: mapGetters({ layout: "task/getTask" })
};
</script>
