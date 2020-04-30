<template>
  <v-card>
    <v-spacer></v-spacer>
    <v-btn absolute right icon @click="deleteTask(item)">
      <v-icon>mdi-close</v-icon>
    </v-btn>
    <v-card-title>{{title}}</v-card-title>
    <v-card-text>{{description}}</v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-pen</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: "CardContent",
  props:['title','description'],
  methods: {
    deleteTask(data){
      this.$store.commit('task/deleteTask', data)
    }
  }
};
</script>