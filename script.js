const tagsElement = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createChoices(e.target.value)

    if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)
        
        randomSelection()
    }
})

function createChoices(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim()) // Eliminate any white space
    
    tagsElement.innerHTML = ''
    
    tags.forEach(tag => {
        const tagElement = document.createElement('span')
        tagElement.classList.add('tag')
        tagElement.innerText = tag
        tagsElement.appendChild(tagElement)
    })
}

function randomSelection() {
    const shuffle = 30

    const interval = setInterval(() => {
        // shuffles through the choices while highlighting them
        const randomTag = pickRandomTag()
        highlight(randomTag)

        setTimeout(() => {
            unhighlight(randomTag)
        }, 100)
    }, 100)

    // Stops the shuffle and picks one to land on and highlight
    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
            const randomTag = pickRandomTag()
            highlight(randomTag)
        }, 100)
    }, shuffle * 100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlight(tag) {
    tag.classList.add('highlight')
}

function unhighlight(tag){
    tag.classList.remove('highlight')
}