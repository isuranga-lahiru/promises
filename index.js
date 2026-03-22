
function getStudentsFromDatabase(dbPassword,signalStrength){
    return new Promise(
        (resolve, reject)=>{
            setTimeout(()=>{
            if(signalStrength < 3){
                reject("Signal strength is too low to connect to the database!");
            } 
            else if(dbPassword !== "1234"){
                reject("Incorrect database password!");
            }
            else{
                resolve([{   
                    name: "John Doe",
                    age: 20,
                    grade: "A",
                },
                {
                    name: "Jane Smith",
                    age: 22,    
                    grade: "B",
                },
                {
                    name: "Alice Johnson",
                    age: 19,
                    grade: "A",
                }
            ])
                
            }
        },5000);    
    }

    )

}

// getStudentsFromDatabase("1234",5).then(
//     (students)=>{
//         console.log(students);
//     }
// ).catch(
//     (error)=>{
//         console.log(error);
//     }
// )

//we can do it same thing above that this way

const student= await getStudentsFromDatabase("1234",1)
console.log(student);
console.log("This will run after the students are fetched from the database!");

//await key word aka me adala function aka wenkam athanim ahata run wenne na pahala tika run nowi thiynwa meka wenkm.

