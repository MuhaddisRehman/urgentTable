fetch('https://progress.sufitravelandtours.co.uk/current-progress').then((response) => {
    return response.json()
    }).then((data) => {
    console.log(data)
    })
console.log("Hello World")