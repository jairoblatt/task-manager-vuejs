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
                    v-model="title"
                    outlined
                    color="#651FFF"
                    label="Title"
                  ></v-text-field>
                  <v-textarea
                    v-show="title"
                    v-model="description"
                    outlined
                    color="#651FFF"
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
          <v-btn color="#651FFF" outlined @click="saveTask"><v-icon>mdi-plus</v-icon>Save</v-btn>
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

      title: "",
      description: ""
    };
  },
  methods: {
    
    validateField() {
      this.$refs.form.validate();
    },

    closeDialog(){
      this.$store.commit('modal/setDialog', false )
    },

    saveTask(){
    const item = this.tasks[this.tasks.length -1]
    const lastItem = {}
    
    if(item != undefined){
          lastItem.i = item.i,
          lastItem.x = item.x,
          lastItem.y = item.y
      if(lastItem.x >= 10){
          lastItem.x = 0
          lastItem.y++
          lastItem.i++
      }else{
          lastItem.x = lastItem.x + 2
          lastItem.i++
      }
    }else {
      lastItem.i = 0
      lastItem.x = 0 
      lastItem.y = 0
    }
  
      const form = {
        title:this.title,
        description:this.description,
        w:2,
        h:2,
        y:lastItem.y,
        x:lastItem.x,
        i:lastItem.i
      }
     
      console.log(form)
      this.$store.commit('task/saveTask', form)
     }
  },
  
  computed: mapGetters({ 

   dialog: "modal/getDialog",
   tasks:"task/getTask" 

   })
  
};
</script>