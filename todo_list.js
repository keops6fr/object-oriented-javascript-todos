var TodoList = function() {
  this.todos = [];
};

var Task = function(item) {
    this.id = 1;
    this.description = item;
    this.completed =  false;
};

TodoList.prototype.add = function(item) {
  var task = new Task(item);
  this.todos.push(task);
};

TodoList.prototype.tasks = function() {
  console.log(this.todos);
  return this.todos
};

TodoList.prototype.list = function() {
  for(var i = 0; i < this.todos.length; i++) {
    console.log(this.todos[i]);
  }
};

Task.prototype.complete = function() {
  this.completed = true;
};

// TodoList.prototype.remove = function()

TodoList.prototype.remove = function(removable) {
  this.todos.splice(this.todos.indexOf(removable), 1)
};

// Driver code
var groceryList = new TodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');
groceryList.tasks();
groceryList.list();
var breadTask = groceryList.tasks()[0];
console.log(breadTask)
console.log(breadTask.id) //-> 1 (some unique numerical ID)
console.log(breadTask.description) //-> 'bread'
breadTask.complete()
console.log(breadTask.completed) //->
groceryList.list();
groceryList.remove(breadTask);
groceryList.list();


