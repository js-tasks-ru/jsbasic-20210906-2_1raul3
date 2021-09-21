function showSalary(users, age) {
  // ваш код...
  const filteredMenus = users.filter((user) => user.age <= age);
  let filteredStr = filteredMenus.map((user) => user.name + ', ' + user.balance);
  return filteredStr.join('\n');
}
