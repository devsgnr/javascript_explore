'use strict';

let user = { name: 'John' };
let id = Symbol('id');

user[id] = 'ID Value';
alert(user[id]);
