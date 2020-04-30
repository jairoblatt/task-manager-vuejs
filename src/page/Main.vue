<template>
  <v-container fluid >
    <v-row>
      <v-col cols="12" md="12">
        <btn-create/>
        <form-task-create />
        <grid-card/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BtnCreate from "@/components/BtnCreate";
import FormTaskCreate from "@/components/FormTaskCreate";
import GridCard from "@/components/GridCard";
export default {
  name: "Main",
  components: {
    FormTaskCreate,
    BtnCreate,
    GridCard
  },
  created(){
    this.$store.dispatch('task/getTask');
  }
};
</script>
