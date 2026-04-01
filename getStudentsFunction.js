

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

export {getStudentsFromDatabase};