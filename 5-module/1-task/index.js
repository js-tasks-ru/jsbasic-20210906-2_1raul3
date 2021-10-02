function hideSelf() {
  // ваш код...
  let button = document.querySelector('.hide-self-button');
  button.onclick = () => {
  button.hidden = true;
  button.onclick = null;
  }  
}
