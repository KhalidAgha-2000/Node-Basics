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

var myToDo=['Study', 'cleeeeeeeeeeeepZZZZ', 'Get readyy']
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


/**
 * 
 *ADD
 * @returns {void}
 */
 function add(task) {
  task.trim();
  if(task!=""){
    myToDo.push(task)
    console.log("new Task added --> " + task)
    console.log( "You should :\n ")
    console.log(myToDo)
  }
  else(console.log(" Add your task"))
//   myToDo = [];
//   myToDo2 = []
//   newToDo = myToDo.push(task)
 
//   console.log("new task added -->" + task)
//   console.log(myToDo)
// //  console.log(myToDo2)

//   myToDo.forEach(element => {
//     myToDo2.push(element)
//   });
//   console.log(myToDo2)

//   myToDo2.forEach(element => {
//     console.log(myToDo2.indexOf(element) + 1 + '- ' + element)
//   });
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
  console.log('list of command :\n quit OR exit \n hello\n You can add your name after type hello to greet you!')
}


// The following line starts the application
startApp("Khalid Agha")
