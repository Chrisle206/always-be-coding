// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.


// Example 2:

// Input: s = "()[]{}"
// Output: true

// Example 3:

// Input: s = "(]"
// Output: false



    let t = "()[]{}"
    const stack = [];
     let i = 0;
     let parens = "() {} []";
     
     while(i < t.length) {
         stack.push(t[i]);
         i++;
         
         let open = stack[stack.length - 2];
         let closed = stack[stack.length - 1];
         
         let potParens = open + closed;
         console.log(stack);
         if(parens.includes(potParens)) {
             stack.pop();
             stack.pop();
         };
         console.log(stack);
         
     }
     
     if(stack.length === 0) {
         console.log(true);
     } else {
         console.log(false);
     };