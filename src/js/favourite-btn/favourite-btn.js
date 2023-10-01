const coctailsList = document.querySelector(".cocktails-cards")


const arr = []

coctailsList.addEventListener('click', favBtnClick)

function favBtnClick(event){
  
    if (event.target.classList.contains('cocktail-card-button') || event.target.classList.contains('favoriteIcon')) {
  
       const svg = event.target
    
       svg.attributes.fill.value = '#fdfdff'
       svg.classList.add("colorEnable")
       console.dir(svg.attributes.fill.value)
    const object = {
        id: event.target.closest('li').id,
        img: event.target.closest('li').children[0].children[0].children[0].src,
        title: event.target.closest('li').children[0].children[1].textContent,
        text: event.target.closest('li').children[0].children[2].textContent,
        favorite: true
    }
    arr.push(object)
    console.log(object);
    console.log(arr)
saveToLocalStorage('favorite', arr)


} 
 else if (event.target.classList.contains("colorEnable")) {
    console.log("oujhughfiohjpknm;lkmoiu")
}
// console.log(event.target.attributes.fill.value)
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

function removeFavorite(id){

}
