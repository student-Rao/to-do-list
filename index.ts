#! usr/bin/env node
import inquirer from "inquirer";
let list = [];
let condition = true;
while (condition) {
    let todo = await inquirer.prompt([
        {
            type: "input",
            name: "firstthing",
            message: "what would you like to add some in todo ?"
        },
        {
            type: "confirm",
            name: "Secondthing",
            message: "would you like add some in todo (yes/no)",
            default: "yes"
        },
    ]);
    list.push(todo.firstthing);
    console.log(list);
    condition=todo.Secondthing
   
}
