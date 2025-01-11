# JavaScript Bug: Unexpected Arithmetic with null and undefined

This repository demonstrates a common pitfall in JavaScript involving arithmetic operations with `undefined` and `null` values.  Due to JavaScript's loose typing, the behavior of addition is not consistent, leading to potential bugs if not handled carefully.

The `bug.js` file contains the problematic code.  The `bugSolution.js` file shows how to prevent this issue with input validation.

## Bug
The addition operation behaves unexpectedly when null and undefined are involved. `null + number` results in the number, but `undefined + number` is NaN. This can lead to unexpected program behavior.

## Solution
Always check for null and undefined values when performing mathematical operations and use a default value or handle the error appropriately.   This avoids unexpected NaN values, ensuring consistent and predictable outcomes.