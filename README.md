
#  Task manager

### About

This is a simple project to study Vuejs and Indexeddb. Using the task manager concept for create a crud.

For this project I used
- Vuejs
- Vuetify
- Indexeddb
- Vue Grid Layout
- Animate.css

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```


# Result
### Create a new task
![](https://raw.githubusercontent.com/jairoblatt/task-manager-vuejs/master/static/show/ezgif.com-gif-maker.gif)

### Moving
![](https://raw.githubusercontent.com/jairoblatt/task-manager-vuejs/master/static/show/moving.gif)

### View and delete
![](https://raw.githubusercontent.com/jairoblatt/task-manager-vuejs/master/static/show/TaskViewAndDelete.gif)

### Update
![](https://raw.githubusercontent.com/jairoblatt/task-manager-vuejs/master/static/show/update.gif)

### Validating an update
![](https://raw.githubusercontent.com/jairoblatt/task-manager-vuejs/master/static/show/ValidateUpdate.gif)

# Structure
```
src                     
├── components
│   ├── card
│   │   ├── CardContent
│   │   ├── ConfirmDialog
│   │   ├── Console
│   │   └── GridCard
│   ├── form
│   │  ├── CreateTaskForm
|   │  ├── UpdateTask
|   │  └── ViewTask
|   └── BtnCreate
├── layout
|   └── Main
├── plugins
|   └── vuetify.js
├── store
|    ├── modules
|    |   ├── modal.js
|    |   └── task.js
|    └── modules
├── util
|    ├── op.js
|    └── validate.js
├──App.vue
└── main.js
```