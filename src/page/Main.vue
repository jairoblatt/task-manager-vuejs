<template>
  <v-container fluid >
    <v-row>
      <v-col cols="12" md="12">
      <btn-create/>
      <form-task-create />
      <card-task/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BtnCreate from "@/components/BtnCreate";
import FormTaskCreate from "@/components/FormTaskCreate";
import CardTask from "@/components/CardTask";
export default {
  name: "Main",
  components: {
    FormTaskCreate,
    BtnCreate,
    CardTask
  },
  created(){
    this.$store.dispatch('task/getTask');
  }
};
</script>
