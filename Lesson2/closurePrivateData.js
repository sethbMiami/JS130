/* eslint-disable max-len */
"use strict";

function makeCounterLogger(start) {
  return function(end) {
    const step = start > end ? -1 : 1;
    const length = Math.abs(end - start) + 1;
    let array = Array.from({ length }, (_, index) => start + (index * step));
    array.forEach(num => console.log(num));
  };
}

let countlog = makeCounterLogger(5);
countlog(8);
/*
5
6
7
8
*/
countlog(2);
/*
5
4
3
2
*/

/*
function makeList() {
  let list = [];

  return function(todo) {
    if (!todo) {
      if (list.length) list.forEach(todo => console.log(todo));
      else console.log('List is empty');
    } else if (list.includes(todo)) {
      let idx = list.indexOf(todo);
      list.splice(idx, 1);
      console.log(`"${todo}" has been deleted!`);
    } else {
      list.push(todo);
      console.log(`"${todo}" has been added!`);
    }
  };
}

let list = makeList();
list();
// The list is empty.

list("make breakfast");
// make breakfast added!

list("read book");
// read book added!

list();
// make breakfast
// read book

list("make breakfast");
//make breakfast removed!

list();
//read book
*/

function makeList() {

  let todos = [];

  return {

    add(todo) {
      todos.push(todo);
      console.log(`${todo} added!`);
    },

    list() {
      todos.forEach(todo => console.log(todo));
    },

    remove(todo) {
      if (todos.includes(todo)) {
        let idx = todos.indexOf(todo);
        todos.splice(idx, 1);
        console.log(`${todo} removed!`);
      }
    }

  };
}

let list = makeList();
list.add("peas");
//peas added!

list.list();
//peas

list.add("corn");
//corn added!

list.list();
// peas
// corn

list.remove("peas");
//peas removed!

list.list();
//corn
