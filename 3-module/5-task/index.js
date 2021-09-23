function getMinMax(str) {
  // ваш код...
  let array = str.split(/[ ]/);
 
  let minNum = +array[0];
  let maxNum = minNum;
  for (let i = 0; i < array.length; i++) {
    let e = +array[i];
    if (e < minNum) minNum = e;
    if (e > maxNum) maxNum = e;
  }
  return {min: minNum, max: maxNum};
}