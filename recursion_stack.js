'use strict';

/**
 * 
 *  Recursion & Stack
 * 
 *  Recursion is a programming pattern that is useful in situations when a task can be naturally split 
 *  into several tasks of the same kind, but simpler. Or when a task can be simplified into an easy action 
 *  plus a simpler variant of the same task. Or, as we’ll see soon, to deal with certain data structures.
 * 
 *  When a function solves a task, in the process it can call many other functions. A partial case of this 
 *  is when a function calls itself. That’s called recursion.
 * 
 */

/**
 * 
 *  Recursive Thinking
 * 
 */

function pow(x, n) {
	if (n == 1) return x;
	else return x * pow(x, n - 1);
}

console.log(pow(2, 3));

pow = function(x, n) {
	return n == 1 ? x : x * pow(x, n - 1);
};

console.log(pow(2, 7));
