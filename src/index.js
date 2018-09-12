module.exports = function check(str, bracketsConfig) {
  // your solution
  var buffer = [];
  str.split('').forEach(element => {
    if (buffer.length > 0 && searchForKeyValue(buffer[buffer.length - 1], bracketsConfig) == element) {
      buffer.pop();
      return;
    }
    buffer.push(element);
  });
  return buffer.length == 0;
}

function searchForKeyValue(key, bracketsConfig){
  let result = bracketsConfig.find(element => element[0] == key);
  return result ? result[1] : null;
}