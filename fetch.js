// fetch('https://randomuser.me/api')
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((error)=> {
//         console.log(`Error:  ${error}`);
//     })

    let getJSON = async(url) => {
        let response = await fetch(url);
        let JSON = await response.json()
        console.log(JSON)
    }

    getJSON('https://randomuser.me/api')