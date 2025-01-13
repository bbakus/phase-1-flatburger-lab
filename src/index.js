// index.js


const displayBurgerDetails = (burger) => {
   
    const image = document.querySelector('#image')
    image.src = burger.image
    const name = document.getElementById('name')
    name.textContent = burger.name
    
    
};

const addBurgerNamesToMenu = () => {
    fetch("http://localhost:3000/burgers")
        .then(response => response.json())
        .then(burgers => {
            const menuList = document.querySelector('#restaurant-menu')
            
            burgers.forEach(burger => {
                const span = document.createElement('span')
                span.textContent = burger.name
                menuList.appendChild(span)
                span.style.width = '250px'
                span.addEventListener('click', () => displayBurgerDetails(burger))
                
                if(burgers.length > 1){
                    displayBurgerDetails(burgers[0])
                }
            
            })

        })
        
        
};

const addToCart = () => {
    const addToCartForm = document.querySelector('#add-to-cart-form')
    let total = 0
    addToCartForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const inputNumber = document.getElementById('number-to-add')
    const numberInCart = document.getElementById('number-in-cart-count')
    
    total += parseInt(inputNumber.value)
    numberInCart.textContent = total
    addToCartForm.reset()
    
    
    })
}

const main = () => {
   
    document.addEventListener('DOMContentLoaded', main => {
    
    addBurgerNamesToMenu()
    addToCart()
    
})
}

main()  



