

try{
const student= await getStudentsFromDatabase("1234",5)
console.log(student);
console.log("This will run after the students are fetched from the database!");
}catch(error){
    console.log(error);
}
//await key word aka me adala function aka wenkam athanim ahata run wenne na pahala tika run nowi thiynwa meka wenkm.