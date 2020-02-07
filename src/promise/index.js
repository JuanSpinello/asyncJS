const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve("hey!");
        } else {
            reject("upss!");
        }
    });
};

somethingWillHappen()
   .then(response => console.log(response))
   .catch(err => console.error(err));

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            setTimeout(() => {
                resolve("True");
            }, 2000)
        } else {
            const error = new Error("Upssss!");
            reject(error);
        }
    });
}

somethingWillHappen2()
   .then(response => console.log(response))
   .catch(err => console.error(err));

//Devuelve las mismas promesas en un Array
Promise.all([somethingWillHappen(), somethingWillHappen2()])
   .then(response => {
       console.log("Array of results", response);
   })
   .catch(err => {
       console.error(err);
   });