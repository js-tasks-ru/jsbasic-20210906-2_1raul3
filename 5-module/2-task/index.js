function toggleText() {
  // ваш код...
  let button = document.querySelector('.toggle-text-button');
  let text = document.querySelector('#text');
  let onclick = () => {
    if (text.hidden) {
      text.hidden = false;
    }
    else {
      text.hidden = true;
    }
  };
  button.addEventListener('click', onclick);
}
