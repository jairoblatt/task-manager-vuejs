import Op from '@/util/op'

export const state = {
    tasks:[]
}



export const getters = {

    getTask: state => state.tasks
}



export const mutations = {

    async saveTask(context, payload){
        await Op.saveTask(payload)
        state.tasks.push(payload)
    },

    async deleteTask(context,data){
         await Op.deleteTask(data)
        const index = state.tasks.indexOf(data)
        state.tasks.splice(index,1)
    }

}

export const actions = {

    async getTask(context){
        context.state.tasks = [];
        let listTask = await Op.getTasks();
            listTask.forEach(element => {
                context.state.tasks.push(element)
            });
    }
  

}