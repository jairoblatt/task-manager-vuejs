export const state = {

    createTaskForm:false,
    updateTaskForm:false

}



export const getters = {

    getDialog: state => state.createTaskForm,
    getUpdateDialog: state => state.updateTaskForm

}



export const mutations = {
    
    setDialog (state,payload){
        state.createTaskForm = payload
    },

    setUpdateTaskForm (state, payload){
        return state.updateTaskForm = payload
    }

}
