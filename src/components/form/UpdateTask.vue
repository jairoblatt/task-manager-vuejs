<template>
  <v-dialog v-model="modalUpdate" max-width="600px">
    <v-card outlined>
      <v-card-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="closeModal">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="12" md="12">
              <v-form ref="form">
                <v-text-field color="#651FFF" v-model="taskUpdate.title" label="Title"></v-text-field>
                <v-textarea
                  color="#651FFF"
                  name="input-7-4"
                  v-model="taskUpdate.description"
                  label="Description"
                ></v-textarea>
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
        <v-btn color="#651FFF" text @click="saveUpdate(taskUpdate)">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "UpdateTask",
  data:()=>{
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
    }
  },
  methods: {

    saveUpdate(data) {
      const form ={
        title: data.title,
        description:data.description,
        level:this.color
      }
      if (form.title || form.description) {
        this.$store.commit("task/saveTask", data);
        this.$store.commit("modal/updateTaskForm", false);
      } else {
        console.log("se tá tirando irmão ");
      }
    },

    closeModal(){ 
      this.$store.commit("modal/updateTaskForm", false) 
      }

  },
  computed:{
       color() {
      if (this.level < 25) return "deep-purple accent-3";
      if (this.level < 50) return "light-blue ";
      if (this.level < 75) return "lime";
      if (this.level < 110) return "red accent-3";
      return "red accent-3";
    },
    ...mapGetters({
       modalUpdate: "modal/getUpdateDialog",
    taskUpdate: "task/getTaskUpdate"
    })
  }

};
</script>

<style>
</style>