import {getStudentsFromDatabase} from "./getStudentsFunction.js";

getStudentsFromDatabase("1234",5).then(
    (students)=>{
        console.log(students);
    }
).catch(
    (error)=>{
        console.log(error);
    }
)



                
