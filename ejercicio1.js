const fs = require('fs');

getFiles = (path) =>{
    console.log(path);
    fs.readdir(`${path}`, (err,files) =>{
        (err) ? console.log(err) : console.log(files);
        files.reverse();
        console.log(files);
        empiezaConLetra(files,"W");

    });
}


empiezaConLetra = (arr,letra) =>{
    let count = 0;
    for (var i = 0; i < arr.length; i++)
    {
        if(arr[i].startsWith(letra)){
            count ++;
        }
    }
    console.log(count + " Archivos empiezan con " + letra);
}
getFiles('C:/Program Files');
