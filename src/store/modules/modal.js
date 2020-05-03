export const state = {

    createTaskForm:false,
    updateTaskForm:false,
    subMenuTask:''

}



export const getters = {

    getDialog: state => state.createTaskForm,
    getUpdateDialog: state => state.updateTaskForm,
    getsubMenuTask: state => state.subMenuTask
}



export const mutations = {
    
    createTaskForm (state,payload){
        return state.createTaskForm = payload
    },

    updateTaskForm (state, payload){
        return state.updateTaskForm = payload
    },

    subMenuTask (state,payload){
        return state.subMenuTask = payload
    },

}
