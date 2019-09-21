//Your code here

const justInvoke = function(fn){
  return fn();
}

function setThisWithCall(fn,thisValue,arg){
  return fn.call(thisValue,arg);
}