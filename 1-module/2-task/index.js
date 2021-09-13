/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  // ваш код...
  if (name == null) {
    return false;
  } else if (name.length < 4) {
    return false;
  } else if (name.includes(' ')){
    return false;
  }
    else {
  return true;
  }

  // if (name == null) {
  //   return false
  // }
  // nameTest = name
  // if (nameTest == "")  {
  //   return false;
  // } else {
  //   return true;
  // }

  // if (!name) {
  //   return false
  // }
  // if (name !== " ") {
  //   return true
  // } 

  // if (name == null || name.lenght < 4) {
  //   return false
  // } else if (name == ""){
  //   return false
  // }
  //   else {
  //   return true
  // }

}


function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
