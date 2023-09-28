export function renderFavCoctails(coctailArray) {
    const markup = coctailArray
        .map((image) => {
            return `
            <li>
            <div>
            <img>
            <h3></h3>
            <p></p>
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