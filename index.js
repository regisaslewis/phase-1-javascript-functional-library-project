function myEach(collection, callback) {
  let newCollection;
  if (typeof collection === "object") {
    newCollection = Object.values(collection);
  } else {
    newCollection = collection;
  }
    for (let i = 0; i < newCollection.length; i++) {
    callback(newCollection[i]);
}
  return collection;
}

function myMap(collection, callback) {
  let newCollection;
  let arr = [];
  if (typeof collection === "object") {
    newCollection = Object.values(collection);
  } else {
    newCollection = collection;
    }
    for (let i = 0; i < newCollection.length; i++) {
      arr.push(callback(newCollection[i]));
  }
  return arr;
}

function myReduce(collection, callback, acc = 0) {
  let newCollection;
  let total = 0;
  if (typeof collection === "object") {
    newCollection = Object.values(collection);
  } else {
    newCollection = collection;
  }
  for (let i = 0; i < newCollection.length; i++) {
    total += newCollection[i];
    }
  if (acc === 0) {
    return callback(acc, total, newCollection) - (newCollection[0] + newCollection[0])
  }
  return callback(acc, total, newCollection);
}

function myFind(collection, predicate) {
  let newCollection;
  if (typeof collection === "object") {
    newCollection = Object.values(collection);
  } else {
    newCollection = collection;
  }
  for (let ele of newCollection) {
    if (predicate(ele)) {
      return ele;
    }
  }
}

function myFilter(collection, predicate) {
  let newCollection;
  let arr = [];
  if (typeof collection === "object") {
    newCollection = Object.values(collection);
  } else {
    newCollection = collection;
  }
  for (let ele of newCollection) {
    if (predicate(ele)) {
      arr.push(ele);
    }
  }
  return arr;
}

function mySize(collection) {
  let newCollection;
  if (typeof collection === "object") {
    newCollection = Object.keys(collection);
  } else {
    newCollection = collection;
  }
  return newCollection.length;
}

function myFirst(array, num=0) {
  if (num !== 0) {
    let arr = []
    for (let i = 0; i < num; i++) {
      arr.push(array[i]);
    }
    return arr;
  } else {
    return array[0];
  }
}

function myLast(array, num=0) {
  if (num !== 0) {
    let arr = [];
    for (let i = array.length - 1; i >= array.length - num; i--) {
      arr.unshift(array[i]);
    }
    return arr;
  } else {
    return array[array.length - 1];
  }
}

function myKeys(object) {
  let arr = [];
  for (let keys in object) {
    arr.push(keys);
  }
  return arr;
}

function myValues(object) {
  let arr = [];
  for (let values in object) {
    arr.push(object[values]);
  }
  return arr;
}