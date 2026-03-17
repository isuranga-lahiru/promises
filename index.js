const isSweetShopOpen = false;

const myPromise = new Promise(
    (resolve, reject) => {

        setTimeout(() => { 
            if (isSweetShopOpen) {
                console.log("The sweet shop is open!");
                resolve();
            } else {
                console.log("The sweet shop is closed!");
                reject();
            }   
        }, 5000);
    }   
);

myPromise.then(
    ()=>{ console.log("I am going to buy some sweets!"); }
).catch(
    ()=> { console.log("I am going to buy some sweets online!"); }
);