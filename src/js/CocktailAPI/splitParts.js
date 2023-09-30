export function splitParts(arr, total, lengthPart) {
  // передаём массив, который нужно разбить
  if (total > lengthPart) {
    // проверяем, имеет ли переданный массив длину больше, чем длина части
    let chunks = [], // подготавливаем возращаемый массив с частями
      parts = Math.floor(total / lengthPart); // сколько частей получится
    for (
      let i = 0;
      i < total;
      i += lengthPart // проходим по массиву, шаг длине части
    )
      chunks.push(arr.slice(i, i + lengthPart)); // добавляем часть в массив с частями

    return chunks; // возвращаем массив
  } else return [arr]; // если получаемый массив меньше длины части, то возвращаем его же.
}
