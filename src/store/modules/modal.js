export const state = {

    createTaskForm:'',
    viewTask:'',
    updateTask:'',
    confirmDialog:''

}



export const getters = {

    getDialog: state => state.createTaskForm,
    getViewTask: state => state.viewTask,
    getUpdateTask: state => state.updateTask,
    getConfirmDialog: state => state.confirmDialog
}



export const mutations = {
    
    createTaskForm (state,payload){
        return state.createTaskForm = payload
    },

    viewTask (state, payload){
        return state.viewTask = payload
    },
    updateTask (state, payload){
        return state.updateTask = payload
    },
    confirmDialog(state,payload) {
        return state.confirmDialog = payload
    }

}
