const { default: axios } = require("axios");

const fs  = require('fs');

const getPeople = async () => {
    let result = await axios.get(`https://swapi.dev/api/people/3/`);
        console.log(result);

    fs.writeFile("test.txt", JSON.stringify(result.data), (err) =>{
        if (err){
            console.log(err);
        }else{
            console.log("Succesfully");
        }
    });

    const timestamp = Date.now();
        console.log(timestamp);

    fs.rename('test.txt', `${timestamp}.txt`, () => {
        console.log("It works");
    });

};
getPeople();




