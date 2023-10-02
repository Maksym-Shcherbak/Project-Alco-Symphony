// import { load } from "../favorite/favorite-coctails-render";
const coctailsList = document.querySelector('.cocktails-cards');

const arr = [];

function load(key){
    try {
        const value = localStorage.getItem(key)
        return value === null ? undefined : JSON.parse(value)
    }
    catch(error){
        console.log(error.message);
    }
  }
export const loaddedArr = load('favorite')
console.log(loaddedArr);
coctailsList.addEventListener('click', favBtnClick);



function favBtnClick(event) {
    if (event.target.tagName==='path'){
        event.target.parentElement.attributes.fill.value = 'none'
        event.target.parentElement.classList.remove('enable')
        loaddedArr.splice(loaddedArr.findIndex(item=>item.id===event.target.closest('li').id),1)
       
        console.log(event.target.closest('li').id);
        console.log(loaddedArr);
        saveToLocalStorage('favorite', loaddedArr)
        return
    }
    if (event.target.firstElementChild.classList.contains('enable')){
        event.target.firstElementChild.attributes.fill.value = 'none'
        event.target.firstElementChild.classList.remove('enable')
        loaddedArr.splice(loaddedArr.findIndex(item=>item.id===event.target.closest('li').id),1)
        saveToLocalStorage('favorite', loaddedArr)
        return
    }
    
//   let svg = null;
//   if (event.target.classList.contains('favoriteIcon')) {
//     svg = event.target;
//   } else if (event.target.classList.contains('cocktail-card-button')) {
//     svg = event.target.children[0];
//   }
console.log(event.target);

//   svg.attributes.fill.value = '#fdfdff';
//   svg.classList.add('colorEnable');
//   console.dir(svg.attributes.fill.value);
if (event.target.classList.contains('cocktail-card-button')){
    event.target.firstElementChild.attributes.fill.value = '#fdfdff'
    event.target.firstElementChild.classList.add('enable')
     const object = {
    id: event.target.closest('li').id,
    img: event.target.closest('li').children[0].children[0].children[0].src,
    title: event.target.closest('li').children[0].children[1].textContent,
    text: event.target.closest('li').children[0].children[2].textContent,
  };
//   if (arr.length===0){
//     arr.push(object)
//     saveToLocalStorage('favorite', arr)
//   }
//   if (loaddedArr.length > 0){
//     loaddedArr.push(object)
//     saveToLocalStorage('favorite', loaddedArr)

//   }
  arr.push(object);
  console.log(object);
  console.log(arr);
  saveToLocalStorage('favorite', arr);
}
else if(event.target.classList.contains('favoriteIcon')){
    event.target.attributes.fill.value = '#fdfdff'
    event.target.classList.add('enable')
    const object = {
        id: event.target.closest('li').id,
        img: event.target.closest('li').children[0].children[0].children[0].src,
        title: event.target.closest('li').children[0].children[1].textContent,
        text: event.target.closest('li').children[0].children[2].textContent,
      };
    //   if (arr.length===0){
    //     arr.push(object)
    //     saveToLocalStorage('favorite', arr)
    //   }
    //   if (loaddedArr.length>0){
    //     loaddedArr.push(object)
    //     saveToLocalStorage('favorite', loaddedArr)
    
    //   }
      arr.push(object);
      console.log(object);
      console.log(arr);
      saveToLocalStorage('favorite', arr);
}
 
}

function saveToLocalStorage(key, value) {
  try {
    const parsedValue = JSON.stringify(value);
    localStorage.setItem(key, parsedValue);
  } catch (error) {
    console.log(error.message);
  }
}

