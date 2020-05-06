<template>
  <v-dialog v-model="updateModal" persistent max-width="600px">
    <v-card outlined>
      <v-card-title>
        <v-chip class="ma-2" :color="colorValidate" label text-color="white"></v-chip>
        <v-btn class="mt-2" icon right absolute @click="closeModal">
          <v-icon :color="colorValidate">mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="12" md="12">
              <v-text-field class="font-weight-bold" :color="colorValidate" v-model="task.title" />
              <v-textarea
                class="font-weight-medium"
                :color="colorValidate"
                v-model="task.description"
                v-show="task.title"
              />
            </v-col>
          </v-row>
        </v-container>
        <v-col cols="8" v-show="task.title">
          <v-card-text>
            <v-label lass="headline">Priority level:</v-label>
            <v-slider
              v-model="task.level"
              :color="colorValidate"
              always-dirty="2"
              min="1"
              max="100"
            >
              <template
                v-slot:thumb-label="{ value }"
              >{{ satisfactionEmojis[Math.min(Math.floor(value / 9), 9)] }}</template>
            </v-slider>
          </v-card-text>
        </v-col>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn right :color="colorValidate" v-show="task.title" @click="update(task)" class="white--text">
          <v-icon>mdi-plus</v-icon>Save
        </v-btn>
        <v-btn icon right color="grey" v-show="task.title" @click="confirmDelete">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-card-actions>
      <confirm-dialog
        title="Do you want to delete this task?"
        description="This action cannot be undone"
      />
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from "vuex";
import { gridHeigh } from '@/util/validate'
import ConfirmDialog from '@/components/card/ConfirmDialog'
export default {
  name: "UpdateTask",
  components:{
    ConfirmDialog,
  },
  data: () => {
    return {
      confirmDialog: false,
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
      ]
    };
  },
  methods: {
    update(data) {
       if (data.title){
        data.h = gridHeigh(data.title)
        this.$store.commit('task/saveTask',data)
        this.$store.commit('modal/updateTask', false)
      }
    },

    closeModal() {
      this.$store.commit("modal/updateTask", false);
      this.task.title.length == 0 ? this.confirmDelete() : ''
    },

    confirmDelete() {
      this.$store.commit("modal/confirmDialog",true)
    }
  },
  computed: {
    colorValidate() {
      if (this.task.level < 25) return "deep-purple accent-3";
      if (this.task.level < 50) return "light-blue ";
      if (this.task.level < 75) return "lime";
      if (this.task.level < 110) return "red accent-3";
      return "red accent-3";
    },
    ...mapGetters({
      updateModal: "modal/getUpdateTask",
      task: "task/getTaskUpdate",
    })
  }
};
</script>