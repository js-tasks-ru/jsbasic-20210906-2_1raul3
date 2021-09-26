function makeFriendsList(friends) {
  // ваш код...
  let ul = document.createElement('ul');
  ul.innerHTML = friends
    .map(friend => `
    <li>
    ${friend.firstName} ${friend.lastName}
    </li>`).join("");
  return ul;
}
