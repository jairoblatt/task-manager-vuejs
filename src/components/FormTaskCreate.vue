<template>
<span>
  <btn-create/>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" dark >New Taslk</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">New Task</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="12" md="12">
              <v-form ref="form">
                <v-text-field v-model="form.title" :counter="max" :rules="rules" label="Title"></v-text-field>
                <v-textarea outlined name="input-7-4" label="Description"></v-textarea>
                <v-chip
                  v-if="chip"
                  class="ma-2"
                  close
                  color="indigo"
                  text-color="white"
                  @click:close="chip = !chip"
                >Success</v-chip>
              </v-form>
            </v-col>
          </v-row>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
        <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  </span>
</template>

<script>
import BtnCreate from './BtnCreate'
export default {
  name: "FormTaskCreate",
  components:{
    BtnCreate
  },
  data: () => {
    return {
      dialog:true,
      rules: "",
      max: 250,
      allowSpaces: false,
      form: {
        title: "",
        description: "",
        group: ""
      },
      chip: true
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