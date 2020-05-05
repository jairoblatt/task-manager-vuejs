export const state = {

    createTaskForm:'',
    viewTask:'',
    updateTask:'',
    confirmDelete:''

}



export const getters = {

    getDialog: state => state.createTaskForm,
    getViewTask: state => state.viewTask,
    getUpdateTask: state => state.updateTask,
    getConfirmDelete: state => state.confirmDelete
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
    confirmDelete(state,payload) {
        return state.confirmDelete = payload
    }

}
