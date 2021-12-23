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
var myToDo = ['Study', 'cleeeeeeeeeeeepZZZZ', 'Get readyy']
function onDataReceived(text) {

  if (text === 'quit\n' || text === 'exit\n') {
    quit();
  }
  else if (text === 'list\n') {
    list();
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
  else {
    unknownCommand(text);

  }
}
/**
 * 
 * @param {string} 
 * @returns {void} 
 */
function list() {
  myToDo.forEach(element => {
    // console.log(`[ ✓ ] ${myToDo.indexOf(element) + 1}- ${element}`)
    console.log(myToDo.indexOf(element) + 1 + '- ' + element)
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
  // task.trim();
  if (task.length == 0) {
    console.log("specify task to edit it ")
  }
  if (task == " new text") {
    myToDo[myToDo.length - 1] = "new text"
    console.log(myToDo)
  }

  if (Number(task) >= 1 && Number(task) <= myToDo.length) {
    myToDo.splice(task - 1, 1, "new text")
    console.log(myToDo)
    return;
  }
}
/***
 *
 * REMOVE
 */
function remove(task) {
  if (Number(task) >= 1 && Number(task) <= myToDo.length) {
    myToDo.splice(task - 1, 1);
    console.log(myToDo)
    return;
  }
  if (task.length == 0) {
    myToDo.pop();
    console.log(myToDo)
    return;
  }
  console.log("No index has this number");
  console.log(myToDo)
}

/***
 * Done
 */
function check(task) {
  task.trim()
  if (task.length == 0) {
    console.log("Choose a task to check it!")
    return
  }
  if (Number(task) >= 1 && Number(task) <= myToDo.length) {
    var valuee=myToDo[task-1];
    myToDo.splice(task - 1, 1,  `[✓] ${(valuee)} `)

    console.log(myToDo)
    return;
  }
  console.log("No index has this number");
  console.log(myToDo)
}

/**
 * 
 * myToDo.forEach(element => {
    // console.log(`[ ✓ ] ${myToDo.indexOf(element) + 1}- ${element}`)
    console.log(myToDo.indexOf(element) + 1 + '- ' + element)
  });} task 
 */

/**
 * 
 *ADD
 * @returns {void}
 */
function add(task) {
  task.trim();
  if (task != "") {
    myToDo.push(task)
    console.log("new Task added --> " + task)
    console.log("You should :\n ")
    console.log(myToDo)
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
  console.log('list of command :\n quit OR exit \n hello\n You can add your name after type hello to greet you!\n list : to show your list of ToDo \n add : add item \n add : with empty throw ERROR \n remove : remove --> will remove last item \n remove with number of item will remove the item \n remove with non existing number will throw an error')
}


// The following line starts the application
startApp("Khalid Agha")
