let url = `https://ghibliapi.herokuapp.com/films`

fetch(url).then((response) =>
    response.json().then((DATA) => 
        DATA.map((film) =>{

        // Creating "card element"
        const card = document.createElement('div')
        card.classList.add('card')
        card.classList.add('my-2', 'mx-2', `card-${film.id}`)

        // Creating "image element"
        const image = document.createElement('img')
        image.src = film.movie_banner
        image.classList.add('card-img-top')
        image.style.width = "100%"
        image.classList.add('mt-2')

        // Creating "card-body element"
        const cardBody = document.createElement('div')
        cardBody.classList.add('card-body')

        // Creating "card-title element"
        const cardTitle = document.createElement('h5')
        cardTitle.classList.add('card-title')
        cardTitle.innerText =  film.title

        // Creating "card-title element"
        const cardText = document.createElement('p')
        cardText.classList.add('card-text', 'description')
        cardText.innerText = film.description

        // Creating "btn btn-primary element"
        const btn = document.createElement('a')
        btn.href = film.image
        btn.classList.add('btn', 'btn-primary')
        btn.innerText = "More information"

        // Adding the card childs
        card.appendChild(image)
        card.appendChild(cardBody)

        // Adding the cardBody childs
        cardBody.appendChild(cardTitle)
        cardBody.appendChild(cardText)
        cardBody.appendChild(btn)

        // Adding all to the root
        document.querySelector('#root').appendChild(card)
        })
    )
)


const infBtn = document.querySelectorAll('.btn-primary')

for (let i = 0; i < infBtn.length; i++) {
    let btn = infBtn[i]

    btn.addEventListener('click', () => (
        paraC.style.display = 'block'
    ))
}