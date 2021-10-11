onload = newWaifu()
let card = document.getElementById('mainCard')



function newWaifu() {
    const categories = ['waifu', 'neko', 'shinobu', 'awoo', 'pat', 'nom']

    let randomIndex = Math.floor(Math.random() * 6)

    fetch(`https://api.waifu.pics/sfw/${categories[randomIndex]}`, {headers: {'content-type': 'text/json'}}).then(async (res) => {
        const response = await res.json()
        card.style.backgroundImage = `url('${response.url}')`
    })
}

function newWaifuNSFW() {
    if (confirm('Você é maior de 18 anos?')) {
        if (confirm('Confirme uma segunda vez que você é maior de 18, para garantir que não houve missclick')){
            const categories = ['waifu', 'neko', 'blowjob']

            let randomIndex = Math.floor(Math.random() * 3)
        
            fetch(`https://api.waifu.pics/nsfw/${categories[randomIndex]}`, {headers: {'content-type': 'text/json'}}).then(async (res) => {
                const response = await res.json()
                card.style.backgroundImage = `url('${response.url}')`
            })
        } 
    }
}

