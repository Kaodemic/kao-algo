// "use strict";
var t = 1;
function a() {
  return t + 1;
}
{
  function a() {
    return t + 2;
  }
}
console.log(a());
