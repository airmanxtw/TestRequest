let callAshx = require("./api/callAshx");
var inquirer = require('inquirer');
inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type:"list",
        message:"請選擇要執行的功能",
        name:'select',
        choices:[
            {value:1,name:'呼叫某個fucntion範例'},
            {value:2,name:'離開'}
        ]
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    switch(answers.select){
        case 1:
            callAshx();
            break;
        case 2:            
    }    
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });







