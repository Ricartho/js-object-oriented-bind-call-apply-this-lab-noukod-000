//Your code here

const justInvoke = function(fn){
  return fn();
}

function setThisWithCall(fn,thisValue,arg){
  return fn.call(thisValue,arg);
}

function setThisWithApply(fn,thisValue,args){
  return fn.apply(thisValue,args);
}