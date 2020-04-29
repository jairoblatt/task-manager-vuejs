export const state = {

    createTaskForm:false

}



export const getters = {

    getDialog: state => state.createTaskForm

}



export const mutations = {
    
    setDialog (state,payload){
        state.createTaskForm = payload
    }

}

export const actions = {


}