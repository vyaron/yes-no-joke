
async function onGetJoke() {
    const res = await fetch('https://official-joke-api.appspot.com/random_joke')
    const ans = await res.json()

    document.querySelector('summary').innerText = ans.setup
    document.querySelector('p').innerText = ans.punchline
}



async function onAsk() {
    document.querySelector('div').hidden = true

    const res = await fetch('https://yesno.wtf/api')
    const ans = await res.json()

    document.querySelector('h3').innerText = ans.answer
    document.querySelector('img').src = ans.image
    
    document.querySelector('div').hidden = false
}