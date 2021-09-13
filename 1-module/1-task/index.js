function factorial(n) {
  // ваш код...
  let result = n || 1;
  for (let i = n - 1; i > 1; --i) {
    result *= i;
  }
  return result;
}