function foo(a, b) {
  a = typeof a === 'undefined' ? 0 : a;
  b = typeof b === 'undefined' ? 0 : b;
  // Handle null values (optional for this example but crucial in real-world scenarios)
  a = a === null ? 0 : a;
  b = b === null ? 0 : b;
  return a + b;
}

console.log(foo(undefined, 1)); // 1
console.log(foo(null, 1)); // 1
console.log(foo(1, null)); // 1
console.log(foo(1, undefined)); // 1