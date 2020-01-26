function solve() {
  let textElement = document.getElementById('text').value;
  let resultElement = document.getElementById('result');

  let splitted = textElement.split(' ').filter(x => x !== ' ');

  let words = [];
  let nums = [];

  for (const element of splitted) {
    if (Number(element)) {
      nums.push(Number(element));
    }
    else {
      words.push(element);
    }
  }

  let result = [];

  for (const word of words) {
    let resultLine = word.split('').map(x => x.charCodeAt());

    let p = document.createElement('p');
    p.innerHTML = resultLine.join(' ')
    resultElement.appendChild(p);
  }

  let resultLine = '';

  for (const num of nums) {
    resultLine += String.fromCharCode(num);
  }

  result.push(resultLine);
  
  let p = document.createElement('p');
  p.innerHTML = result.join('\n');
  resultElement.appendChild(p);
}