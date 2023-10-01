const coctailsList = document.querySelector(".cocktails-cards")


const arr = []

coctailsList.addEventListener('click', favBtnClick)

function favBtnClick(event){
    if (event.target.classList.contains('cocktail-card-button') || event.target.classList.contains('add-button-icon')) {
    const object = {
        img: event.target.closest('li').children[0].children[0].children[0].src,
        title: event.target.closest('li').children[0].children[1].textContent,
        text: event.target.closest('li').children[0].children[2].textContent
    }
    arr.push(object)
saveToLocalStorage('favorite', arr)
}
}

function saveToLocalStorage(key, value){
    try {
        const parsedValue = JSON.stringify(value)
        localStorage.setItem(key, parsedValue)
    }
    catch(error){
        console.log(error.message);
    }
}
