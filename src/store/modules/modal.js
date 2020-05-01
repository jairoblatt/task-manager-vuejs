export const state = {

    createTaskForm:false,
    updateTaskForm:false

}



export const getters = {

    getDialog: state => state.createTaskForm,
    getUpdateDialog: state => state.updateTaskForm

}



export const mutations = {
    
    createTaskForm (state,payload){
        return state.createTaskForm = payload
    },

    updateTaskForm (state, payload){
        return state.updateTaskForm = payload
    }

}
