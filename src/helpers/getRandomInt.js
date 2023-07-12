

const getRandomInt = () => {

    return new Promise( resolve => {    
        const rndInt = (Math.random() * 20) + 1

        setTimeout(() => {
            resolve(rndInt)
        }, 100)
    })

}

export default getRandomInt