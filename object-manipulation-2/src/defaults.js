/* exported defaults */
function defaults(target, source) {
  for (var key in source) {
    if (source[key] !== target[key] && target[key] === undefined) {
      target[key] = source[key];
    }
  }
}

// for of loop , for (var key of source)
// if source[key] !== target[key] && target[key] === undefined
// create the property in target = source[key];
// no return
