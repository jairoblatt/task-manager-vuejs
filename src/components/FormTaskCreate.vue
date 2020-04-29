<template>
  <span>
    <v-dialog v-model="dialog" persistent max-width="600px" color="grey darken-4">
      <v-card outlined>
        <v-card-title>
            <span class="headline">New Task</span>
           <v-spacer></v-spacer>
          <v-btn  icon @click="closeDialog()">
              <v-icon >mdi-close</v-icon>
        </v-btn>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-form ref="form">
                  <v-text-field
                    v-model="form.title"
                    outlined
                    color="#651FFF"
                    :counter="maxTitle"
                    :rules="rules"
                    label="Title"
                  ></v-text-field>
                  <v-textarea
                    v-if="form.title"
                    outlined
                    color="#651FFF"
                    :counter="maxDescription"
                    :rules="rules"
                    name="input-7-4"
                    label="Description"
                  ></v-textarea>
                </v-form>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#651FFF" outlined @click="dialog = false"><v-icon>mdi-plus</v-icon>Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </span>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "FormTaskCreate",
  data: () => {
    return {
      maxTitle: 80,
      maxDescription: 200,
      rules: "",
      allowSpaces: false,
      chip: true,
      form: {
        title: "",
        description: "",
        group: ""
      }
    };
  },
  computed: mapGetters({
    dialog: "modal/getDialog"
  }),
    // rules() {
    //   const rules = [];
    //   if (this.maxTitle) {
    //     const rule = v =>
    //       (v || "").length <= this.maxTitle ||
    //       `A maximum of ${this.maxTitle} characters is allowed`;
    //     rules.push(rule);
    //   }
    //   if (this.maxDescription) {
    //     const rule = v =>
    //       (v || "").length <= this.maxDescription ||
    //       `A maximum of ${this.maxDescription} characters is allowed`;
    //     rules.push(rule);
    //   }
    //   return rules;
    // },

  watch: {
    max: "validateField"
  },
  methods: {
    validateField() {
      this.$refs.form.validate();
    },
    closeDialog(){
      this.$store.commit('modal/setDialog', false )
    }
  }
};
</script>

<style>
</style>