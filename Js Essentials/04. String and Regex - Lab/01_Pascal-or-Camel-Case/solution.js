function solve(){
  let text = document.getElementById('text').value;
  let caseType = document.getElementById('naming-convention').value;
  let resultElement = document.getElementById('result');

  let words = text.toLowerCase().split(' ').filter(x => x !== '');
  
  let result = '';

  for (const word of words) {
    result += word.replace(word[0], word[0].toUpperCase());
  }
  
  if (caseType == "Pascal Case") {
    resultElement.textContent = result;
    
  }
  else if (caseType == "Camel Case") {
    result = result.replace(result[0], result[0].toLocaleLowerCase());

    resultElement.textContent = result;
  }
  else {
    resultElement.textContent = 'Error!';
  }
}