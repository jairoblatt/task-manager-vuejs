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
                <v-text-field v-model="title" :rules="rules" :color="color" label="Title"></v-text-field>

                <v-textarea v-if="title" v-model="description" :color="color" label="Description"></v-textarea>
              </v-form>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-col cols="8">
        <v-card-text>
          <v-label lass="headline">Priority level:</v-label>
          <v-slider v-model="level" :color="color" always-dirty="2" min="1" max="100">
            <template
              v-slot:thumb-label="{ value }"
            >{{ satisfactionEmojis[Math.min(Math.floor(value / 9), 9)] }}</template>
          </v-slider>
        </v-card-text>
      </v-col>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn :color="color" v-show="validInput" class="white--text" @click="saveTask">
          <v-icon>mdi-plus</v-icon>Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from "vuex";
import { gridHeigh,gridStartPosition } from '@/util/validate'
export default {
  name: "FormTaskCreate",
  data: () => {
    return {
      level: 0,
      satisfactionEmojis: [
        "😍",
        "😁",
        "😬",
        "😐",
        "😶",
        "😮",
        "😲",
        "😨",
        "😱",
        "🔥"
      ],
      allowSpaces: false,
      chip: true,
      title: "",
      rules: [v => v.length <= 200 || 'Max 200 characters'],
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
      const form = {
        ...gridHeigh(this.title),
        ...gridStartPosition(this.tasks),
        title: this.title,
        description: this.description,
        level:this.color
      };
      this.$store.commit("task/saveTask", form);
      this.$store.dispatch("task/getTask");
      this.title = ''
      this.description = ''
      this.level = 0
     }

  },
  computed: {
    color() {
      if (this.level < 25) return "deep-purple accent-3";
      if (this.level < 50) return "light-blue ";
      if (this.level < 75) return "lime";
      if (this.level < 110) return "red accent-3";
      return "red accent-3";
    },
    validInput(){
        if(this.title.length > 200){
          return false
        }
        return true
    },
    ...mapGetters({
      dialog: "modal/getDialog",
      tasks: "task/getTask"
    }),
  }
};
</script>