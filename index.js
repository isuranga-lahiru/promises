const isSweetShopOpen = true ;

const myPromise = new Promise(
    (resolve, reject) => {

        setTimeout(() => { 
            if (isSweetShopOpen) {
                console.log("The sweet shop is open!");
                resolve("Yay! The sweet shop is open!");
            } else {
                console.log("The sweet shop is closed!");
                reject("Oh no! The sweet shop is closed!");
            }   
        }, 5000);
    }   
);
