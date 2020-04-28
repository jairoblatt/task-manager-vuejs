<template>
     <v-container fluid>
      <v-row>
        <v-col cols="12" sm="12" md="12">
          <form-task-create/>
        </v-col>
      </v-row>
     </v-container>
</template>

<script>
import FormTaskCreate from '@/components/FormTaskCreate'
export default {
    name:'Main',
    components: {
      FormTaskCreate
    }
};
</script>

<style>
</style>