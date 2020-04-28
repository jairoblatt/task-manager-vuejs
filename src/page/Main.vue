<template>
     <v-container fluid>
      <v-row>
        <v-col cols="12" sm="12" md="12">
          <btn-create/>
          <form-task-create/>
        </v-col>
      </v-row>
     </v-container>
</template>

<script>
import BtnCreate from '@/components/BtnCreate'
import FormTaskCreate from '@/components/FormTaskCreate'
export default {
    name:'Main',
    components: {
      BtnCreate,
      FormTaskCreate
    }
};
</script>

<style>
</style>