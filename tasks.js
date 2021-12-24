const fs = require('fs');


let database = [
  {
    "task": "milk",
    "state": false
  },
  {
    "task": "study",
    "state": false
  },
  {
    "task": "sleeeepZZz",
    "state": false
  },
  {
    "task": "jump",
    "state": false
  },
  {
    "task": "wooooooow",
    "state": false
  },
  {
    "task": "Dog",
    "state": false
  }

]


if (process.argv[2] === "blah.json") {
  console.log(process.argv[2])

  try {

    let dataJ = fs.readFileSync('blah.json');
    let taskJ = JSON.parse(dataJ);
    console.log("blah josn file  ");
    console.log(taskJ);
  }
  catch {
    console.log("ERROR Reading")
  }

}
else {
  try {
    let data = JSON.stringify(database);
    fs.writeFileSync('blah.json', data);
  }
  catch {
    console.log("ERROR Writing")
  }

}
try {
  let data = JSON.stringify(database);
  fs.writeFileSync('database.json', data);
}
catch {
  console.log("ERROR")
}

try {

  let dataJ = fs.readFileSync('database.json');
  let taskJ = JSON.parse(dataJ);
  console.log("database file ");
  console.log(taskJ);

  console.log(taskJ);
}
catch {
  console.log("ERROR")
}
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name) {
  //process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
/**the object is for check & uncheck function  */
var myToDoOb = [
  { done: false, task: "Math" },
  { done: false, task: "Sicence" },
  { done: false, task: "E" },
  { done: false, task: "F" },
  { done: false, task: "Football" },
  { done: false, task: "SleeepZZZ" },
  { done: false, task: "Dog Out" },
  { done: false, task: "Get Readyyyyyyyyy" },

]

var helpobj = [
  { commandName: "help", commandAction: "display list of commands", additional: "no additional actions" },
  { commandName: "quit or exit", commandAction: "close the app", additional: "no additional actions" },
  { commandName: "hello", commandAction: "greet no one", additional: "hello with your name will greet you!" },
  { commandName: "list", commandAction: "show your ToDo list ", additional: "no additional actions" },
  { commandName: "check", commandAction: "mark your task with  ✓ ", additional: "you should add the number of existing task!" },
  { commandName: "uncheck", commandAction: "mark your task with  X ", additional: "you should add the number of existing task!" },
  { commandName: "remove", commandAction: "remove the task", additional: "remove the last task / speceify the number of task that you want to remove it" },
  { commandName: "quit or exit", commandAction: "close the app", additional: "no additional actions" },
]


function onDataReceived(text) {

  if (text === 'quit\n' || text === 'exit\n') {
    quit();
  }
  else if (text === 'list\n') {
   
    listO()
  }
  else if (text.startsWith("hello")) {
    text = text.trim();
    if (text.substring(0, 5) == "hello") {
      hello(text.substring(5));
    }
    else { unknownCommand(text) }
  }
  else if (text === 'help\n') {
    help();
  }
  else if (text.startsWith("add")) {
    text = text.trim();
    if (text.substring(0, 3) == "add") {
      add(text.substring(3))
    }
    else { unknownCommand(text) }
  }
  else if (text.trim().split(" ")[0] === "remove") {
    remove(text.trim().substring(6));
  }
  else if (text.trim().split(" ")[0] === "edit") {
    edit(text.trim().substring(4));
  }
  else if (text.trim().split(" ")[0] === "check") {
    check(text.trim().substring(5));
  }
  else if (text.trim().split(" ")[0] === "uncheck") {
    uncheck(text.trim().substring(7));
  }
  else {
    unknownCommand(text);

  }
}
/**
 * 
 * @param {string} 
 * @returns {void} 
 */
// function list() {
//   myToDo.forEach(element => {
//     console.log(myToDo.indexOf(element) + 1 + '- ' + element)
//   });
// }

function listO() {
  myToDoOb.forEach(element => {
    if (element.done == true) {
      console.log(`[✓] ${myToDoOb.indexOf(element) + 1} - ${element.task}`)
    }
    if (element.done == false) {
      console.log(`[X] ${myToDoOb.indexOf(element) + 1} - ${element.task}`)
    }
  });

}
/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c) {
  console.log('unknown command: "' + c.trim() + '"')
}


/**
 * Says hello
 *Say hello with your name
 * @returns {void}
 */
function hello(name) {
  name.trim();
  console.log('Hello' + name + '!')
}

/***
 * Edit
 */
function edit(task) {
  if (task.length == 0 || Number(task) >= myToDoOb.length) {
    console.log("specify task to edit it / Or enter number is exsist")
  }

  if (task == " new text") {
    myToDoOb[myToDoOb.length - 1] = ({ done: false, task: "new text" })
    return listO()
  }

  if (Number(task) >= 1 && Number(task) <= myToDoOb.length) {
    myToDoOb.splice(task - 1, 1, ({ done: false, task: "new text" }))
    return listO()

  }
  else {
    return listO();
  }
}
/***
 *
 * REMOVE
 */
function remove(task) {
  if (Number(task) >= 1 && Number(task) <= myToDoOb.length) {
    myToDoOb.splice(task - 1, 1);
    return listO();
  }
  if (task.length == 0) {
    myToDoOb.pop();

    return listO();
  }
  if (Number(task) > myToDoOb.length) {
    console.log("Enter an exsist number!")
    return listO()
  }
}

/***
 *Check
 */
function check(task) {
  if (task.length == 0) {
    console.log("Enter the number of task!")
    return listO()
  }
  else {
    taskNumber = task.split(" ");
    if (taskNumber[1] < 1 || taskNumber[1] > myToDoOb.length) {
      console.log("Enter an exsist number!");
      return listO()
    }
    else {
      for (i = 0; i < myToDoOb.length; i++) {
        if (i == taskNumber[1] - 1) {
          myToDoOb[i].done = true;
          return listO()
        }
      }
    }
  }
}

function uncheck(task) {
  if (task.length == 0) {
    console.log("Enter the number of task!")
    return listO()
  }
  else {
    taskNumber = task.split(" ");
    if (taskNumber[1] < 1 || taskNumber[1] > myToDoOb.length) {
      console.log("Enter an exsist number!");
      return listO()
    }
    else {
      for (i = 0; i < myToDoOb.length; i++) {
        if (i == taskNumber[1] - 1) {
          myToDoOb[i].done = false;
          return listO()
        }
      }
    }
  }
}
/**
 * 
 *ADD
 * @returns {void}
 */
function add(task) {
  if (task != "") {
    myToDoOb.push({ done: false, task: task })
    console.log("new task Added ---> " + task)
    return listO()
  }
  else (console.log(" Add your task"))
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit() {
  console.log('Quitting now, goodbye!')
  process.exit();
}

/**
 * help to list all allowed command 
 * @return {void}
 */
function help() {
  console.log("This is your commands")
  helpobj.forEach(element => {
    console.log(`-- ${element.commandName} --> ${element.commandAction} \n ${element.additional}`)
  });

}


// The following line starts the application
startApp("Khalid Agha")
