<template>
  <v-col cols="3" sm="3" md="3">
    <v-form ref="form">
      <v-text-field v-model="form.title" :counter="max" :rules="rules" label="Title"></v-text-field>
      <v-textarea outlined name="input-7-4" label="Outlined textarea"></v-textarea>
      <v-chip
        v-if="chip"
        class="ma-2"
        close
        color="indigo" 
        text-color="white"
        @click:close="chip = !chip"
      >
        Success
      </v-chip>
    </v-form>
  </v-col>
</template>

<script>
export default {
  name: "FormTaskCreate",
  data: () => {
    return {
      max: 250,
      allowSpaces: false,
      form: {
        title: "",
        description: "",
        group: ""
      },
      chip:true
    };
  },
  computed: {
    rules() {
      const rules = [];

      if (this.max) {
        const rule = v =>
          (v || "").length <= this.max ||
          `A maximum of ${this.max} characters is allowed`;

        rules.push(rule);
      }

      if (!this.allowSpaces) {
        const rule = v => (v || "").indexOf(" ") < 0 || "No spaces are allowed";

        rules.push(rule);
      }

      if (this.match) {
        const rule = v => (!!v && v) === this.match || "Values do not match";

        rules.push(rule);
      }

      return rules;
    }
  },
  watch: {
    max: "validateField",
    form: "validateField"
  },

  methods: {
    validateField() {
      this.$refs.form.validate();
    }
  }
};
</script>

<style>
</style>