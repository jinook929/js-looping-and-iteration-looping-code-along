// Code your solutions in this file
function writeCards(names, event_name) {
  const arr = []
  for(let i = 0; i < names.length; i++) {
    arr.push(`Thank you, ${names[i]}, for the wonderful ${event_name} gift!`)
  }
  return arr
}

function countDown(num) {
  // let counter = 0
  while(num >= 0) {
    console.log(num)
    num--
  }
}