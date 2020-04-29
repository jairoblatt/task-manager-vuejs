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