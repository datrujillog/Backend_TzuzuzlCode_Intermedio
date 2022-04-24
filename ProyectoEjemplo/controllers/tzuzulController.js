const fs = require('fs');

let users = []


// TODO: GET
const getTzuzul = async (req, res) => {

    return res.json(users);

}
// TODO: POST
const postTzuzul = async (req, res) => {

    const user = req.body;

    // agrebgar al objecto users 
    users.push(user);

    console.log(users);
    // crear un archivo json con el objeto users  y guardarlo en la carpeta data uno por uno y quer se suscriba a los cambios cada
    // for (let i = 0; i < users.length; i++) {
    //     fs.writeFile(`./data/${users[i].id}.json`, JSON.stringify(users[i]), (err) => {
    //         if (err) throw err;
    //         console.log('The file has been saved!');
    //     });

    // }

    return res.json(users);
    // fs.writeFile(`./data/${users[i].id}.json`, JSON.stringify(users[i]), (err) => {
    //             if (err) throw err;
    //             console.log('The file has been saved!');
    //         });


}
// TODO: PUT
const putTzuzul = async (req, res) => {
    //TODO: 1º MANERA DE HACER   
    // const id = req.params.id;
    // const user = req.body;
    //TODO: 2º MANERA DE HACER   
    const { body, params: { id } } = req

    // users = users.map(user => {
    //     if (user.id === Number(req.params.id)) {
    //         return req.body;
    //     }
    //     return res.json(users);
    // })

    users = users.map(user => user.id === id ? body : user)


    res.json(users);

}


//TODO: DELETE
const deleteTzuzul = async (req, res) => {
    const id = req.params.id;

    users = users.filter(user => user.id !== req.params.id); // filtraremos el array users y nos quedamos con los que no coincidan con el id que nos llega por la url

    console.log(users);

    return res.json(users);
}

module.exports = {
    getTzuzul,
    postTzuzul,
    putTzuzul,
    deleteTzuzul
}