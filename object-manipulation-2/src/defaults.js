/* exported defaults */
function defaults(target, source) {
  Object.setPrototypeOf(target, source);
}

// Copy properties of the target object to the source object
// setPrototypeMethodOf of Object being called with 2 arguments
// target and source
