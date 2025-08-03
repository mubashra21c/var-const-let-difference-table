export const snippets = [
    {
      title: "Global Scope",
      code: `  var a = 10;
  console.log(window.a); // ✅ Output: 10 — 'var' adds 'a' to global window object
  
  let b = 20;
  console.log(window.b); // ❌ Output: undefined — 'let' is not added to window
  
  const c = 30;
  console.log(window.c); // ❌ Output: undefined — 'const' is not added to window`
    },
  
    {
      title: "Function Scope",
      code: `  function testScope() {
    var a = 1;
    let b = 2;
    const c = 3;
  
    console.log(a); // ✅ Output: 1
    console.log(b); // ✅ Output: 2
    console.log(c); // ✅ Output: 3
  }
  
  testScope();
  
  console.log(a); // ❌ ReferenceError — 'a' is not accessible outside the function
  console.log(b); // ❌ ReferenceError
  console.log(c); // ❌ ReferenceError`
    },
  
    {
      title: "Block Scope",
      code: `  if (true) {
    var a = 100;
    let b = 200;
    const c = 300;
  }
  
  console.log(a); // ✅ Output: 100 — 'var' is not block scoped
  console.log(b); // ❌ ReferenceError — 'let' is block scoped
  console.log(c); // ❌ ReferenceError — 'const' is block scoped`
    },
  
    {
      title: "Can Be Reassigned",
      code: `  var a = 1;
  a = 2;
  console.log(a); // ✅ Output: 2 — 'var' can be reassigned
  
  let b = 3;
  b = 4;
  console.log(b); // ✅ Output: 4 — 'let' can be reassigned
  
  const c = 5;
  c = 6; // ❌ TypeError: Assignment to constant variable
  console.log(c);`
    },
  
    {
      title: "Can Be Re-declared",
      code: `  var a = 10;
  var a = 20;
  console.log(a); // ✅ Output: 20 — 'var' allows redeclaration
  
  let b = 30;
  let b = 40; // ❌ SyntaxError: Identifier 'b' has already been declared
  
  const c = 50;
  const c = 60; // ❌ SyntaxError: Identifier 'c' has already been declared`
    },
  
    {
      title: "Can Be Hoisted",
      code: `  console.log(a); // ✅ Output: undefined — 'var' is hoisted but not initialized
  var a = 10;
  
  console.log(b); // ❌ ReferenceError — 'let' is hoisted but in Temporal Dead Zone
  let b = 20;
  
  console.log(c); // ❌ ReferenceError — 'const' is hoisted but in Temporal Dead Zone
  const c = 30;`
    }
  ];