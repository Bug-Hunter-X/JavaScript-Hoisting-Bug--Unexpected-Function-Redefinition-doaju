# JavaScript Hoisting Bug

This repository demonstrates a common JavaScript bug related to hoisting.  Hoisting is a JavaScript mechanism where declarations are moved to the top of their scope before execution.  While this can be useful, it can also lead to unexpected behavior if not carefully considered.

The `bug.js` file contains code that exhibits the hoisting issue. The `bugSolution.js` file demonstrates a corrected version of the code.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` and observe the unexpected output.
3. Open `bugSolution.js` to see how the issue can be avoided.

## Explanation

The bug arises from the redefinition of the `foo` function using a function expression after initially declaring it as a function declaration.  The function declaration is hoisted, but the function expression is not. This leads to the second definition overriding the first.

## Solution

The solution is to consistently use either function declarations or function expressions, and to be aware of the implications of hoisting to avoid unexpected function redefinitions.