export function renderFavCoctails(coctailArray) {
    const markup = coctailArray
        .map(({img,title,text}) => {
            return `
            <li>
            <div>
            <img src=${img}>
            <h3>${title}</h3>
            <p>${text}</p>
            </div>
            <div>
            <button type="button">learn more</button>
            <button type="button">
            <svg></svg>
            </button>
            </div>
            </li>;
        `
        })
    .join('');
    
 return markup;
}
