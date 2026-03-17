const isSweetShopOpen = true;

const myPromise = new Promise(
    (resolve, reject) => {

        setTimeout(() => { 
            if (isSweetShopOpen) {
                console.log("The sweet shop is open!");
                resolve(
                    {
                        name:"Chocolate",
                        price: 500
                    }
                );
            } else {
                console.log("The sweet shop is closed!");
                reject();
            }   
        }, 5000);
    }   
);

myPromise.then(
    (result)=>{ 
        console.log(`I am going to buy ${result.name} for ${result.price} dollars!`);
        console.log("I am going to buy some sweets!"); }
).catch(
    (error)=> { 
        console.log(error);
        console.log("I am going to buy some sweets online!"); }
);