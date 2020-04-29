const DB_NAME = 'task';
const DB_VERSION = 1;
let DB;

export default {
    async getDb() {
		return new Promise((resolve, reject) => {
			if(DB) { return resolve(DB); }
			let request = window.indexedDB.open(DB_NAME, DB_VERSION);
			
			request.onerror = e => {
				reject('Error');
			};
	
			request.onsuccess = e => {
				DB = e.target.result;
				resolve(DB);
			};
			
			request.onupgradeneeded = e => {
				let db = e.target.result;
				db.createObjectStore("task", { autoIncrement: true, keyPath:'id' });
			};
		});
	},

	async getTasks() {

		let db = await this.getDb();

		return new Promise(resolve => {

			let trans = db.transaction(['task'],'readonly');
			trans.oncomplete = () => {
				resolve(tasks);
			};
				
			let store = trans.objectStore('task');
			let tasks = [];
			
			store.openCursor().onsuccess = e => {
				let cursor = e.target.result;
				if (cursor) {
					tasks.push(cursor.value)
					cursor.continue();
				}
			};

		});
	},

    async saveTask(task) {

		let db = await this.getDb();

		return new Promise(resolve => {

			let trans = db.transaction(['task'],'readwrite');
			trans.oncomplete = () => {
				resolve();
			};

			let store = trans.objectStore('task');
			store.put(task);

		});
	
	}
    


}