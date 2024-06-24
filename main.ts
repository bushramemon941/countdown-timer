#!/usr/bin/env node

import inquirer from "inquirer";

import {differenceInSeconds} from "date-fns";

const response = await inquirer.prompt({

    name: "userTimer",
    type: "number",
    message: "Please Enter number with in a Second",
    validate: (input) => {

        if(isNaN(input)){
            return "Please enter a valid number";
        }
        else if (input > 60){
            return "Seconds must be in 60"
        }
        else {
            return true;
        }
    }

});

let input = response.userTimer

function start_time(val: number){
    const int_time = new Date().setSeconds(new Date().getSeconds() + val);
    const interval_time = new Date(int_time);

    setInterval((() => {

        const curr_time = new Date()
        const time_diff = differenceInSeconds(interval_time, curr_time);

        if (time_diff <= 0) {

            console.log("Timer has Expired");
            process.exit()           
        }

        const min = Math.floor((time_diff % (3600 * 24)/ 3600));
        const sec = Math.floor(time_diff % 60);

        console.log(`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`);
        
    }), 1000)
}

start_time(input)



