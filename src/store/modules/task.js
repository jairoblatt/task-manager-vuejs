import Op from '@/util/op'

export const state = () =>({
    tasks: [],
    taskUpdate: '',
    taskUpdateCopy: ''
})



export const getters = {

    getTask: state => state.tasks,
    getTaskUpdate: state => state.taskUpdate,
    getTaskUpdateCopy: state => state.taskUpdateCopy
}



export const mutations = {

    async saveTask(context, payload) {
        await Op.saveTask(payload)
    },

    async deleteTask(context, data) {
        await Op.deleteTask(data)
        const index = state.tasks.indexOf(data)
        state.tasks.splice(index, 1)
    },

    setTaskUpdate(state, payload) {
        state.taskUpdateCopy = JSON.parse(JSON.stringify(payload))
        return state.taskUpdate = payload
    },

}

export const actions = {

    setTaskUpdate({ commit }, payload) {
        commit('setTaskUpdate', payload)
    },

    async getTask(context) {
        context.state.tasks = [];
        let listTask = await Op.getTasks();
        listTask.forEach(element => {
            context.state.tasks.push(element)
        });
    },


}