<template>
  <v-dialog v-model="dialog" persistent max-width="600px" color="grey darken-4">
    <v-card outlined>
      <v-card-title>
        <span class="headline">
          <v-icon>mdi-pen</v-icon>New Task
        </span>
        <v-spacer></v-spacer>
        <v-btn icon @click="closeDialog()">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="12" md="12">
              <v-form ref="form">
                <v-text-field v-model="title" color="#651FFF" label="Title"></v-text-field>

                <v-textarea v-if="title" v-model="description" color="#651FFF" label="Description"></v-textarea>
              </v-form>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-text>
        <v-chip-group active-class="deep-purple accent-4 white--text" column v-show="title">
          <v-chip>Group 1</v-chip>

          <v-chip>Group 2</v-chip>

          <v-chip>Group 3</v-chip>

          <v-chip>Group 4</v-chip>
        </v-chip-group>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="#651FFF" v-show="title" class="white--text" @click="saveTask">
          <v-icon>mdi-plus</v-icon>Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "FormTaskCreate",

  data: () => {
    return {
      maxTitle: 80,
      maxDescription: 200,

      rules: "",
      allowSpaces: false,
      chip: true,

      title: "",
      description: ""
    };
  },
  methods: {
    validateField() {
      this.$refs.form.validate();
    },

    closeDialog() {
      this.$store.commit("modal/createTaskForm", false);
    },

    saveTask() {
      const item = this.tasks[this.tasks.length - 1];
      const lastItem = {};

      if (item != undefined) {
        (lastItem.i = item.i), (lastItem.x = item.x), (lastItem.y = item.y);
        if (lastItem.x >= 8) {
          lastItem.x = 0;
          lastItem.y++;
          lastItem.i++;
        } else {
          lastItem.x = lastItem.x + 2;
          lastItem.i++;
        }
      } else {
        lastItem.i = 0;
        lastItem.x = 0;
        lastItem.y = 0;
      }

      const form = {
        title: this.title,
        description: this.description,
        w: 2,
        h: 2,
        y: lastItem.y,
        x: lastItem.x,
        i: lastItem.i
      };
      this.$store.commit("task/saveTask", form);
      this.$store.dispatch("task/getTask");
    }
  },

  computed: mapGetters({
    dialog: "modal/getDialog",
    tasks: "task/getTask"
  })
};
</script>