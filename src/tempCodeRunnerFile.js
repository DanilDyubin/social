const obj = {};

function isEmpty(object) {
  if (Object.keys(obj).length > 0) {
    return 'false';
  } else {
    return 'true';
  }
}
console.log(isEmpty(obj));