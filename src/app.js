import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      tasks: [
        {task: "Read 5% of book", completed: false},
        {task: "Do homework after dinner", completed:true}
      ],
      newTask: ""
    },
    methods: {
      saveNewTask: function(){
        let taskObject = {task: this.newTask, completed: true}
        this.tasks.push(taskObject)
        this.newTask = ""
      },
      completeTask: function(index){
        this.tasks[index].completed = true;
      }
    }
  })
})
