<template>
  <v-container fluid >
    <v-row>
      <btn-create/>
      <form-task-create />
      <card-task />
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
  }
};
</script>

<style>
</style>