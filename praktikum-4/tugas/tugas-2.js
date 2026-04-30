class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}
// FUNCTION CEK KURUNG
// =====================
function cekKurungSeimbang(ekspresi) {
  let stack = new Stack();

  for (let char of ekspresi) {
    if (char === '(') {
      stack.push(char);
    } else if (char === ')') {
      if (stack.isEmpty()) return false;
      stack.pop();
    }
  }

  return stack.isEmpty();
}
console.log("=== Cek Kurung Seimbang ===");

const test = [
  "(2 + 3) * (4 - 1)",
  "((a + b)",
  ")(",
  "(())",
  "(()))"
];

test.forEach(t => {
  console.log(`${t} -> Seimbang: ${cekKurungSeimbang(t)}`);
});