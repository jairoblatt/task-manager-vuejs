
<template v-slot:activator="{ on }">

  <v-btn color="pink" dark small absolute bottom left fab v-on="on">
    <v-icon>mdi-plus</v-icon>
  </v-btn>

</template>
<script>
export default {
  name: "BtnCreate"
};
</script>