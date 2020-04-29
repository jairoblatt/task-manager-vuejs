<template>
<v-col cols="2" sm="2" md="2">
  <v-card shaped>
    <v-spacer></v-spacer>
    <v-btn absolute right icon>
      <v-icon>mdi-close</v-icon>
    </v-btn>
    <v-card-title>Testando o título</v-card-title>
    <v-card-text>Um texto qualquer aqui, apenas para testar o novo componente da aplicação</v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-pen</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</v-col>
</template>

<script>
export default {
  name: "CardTask"
};
</script>

<style>
</style>