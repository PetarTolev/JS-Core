function solve() {
  let siteElements = document.getElementsByClassName('link-1');

  console.log(siteElements);
  
  for (const siteElement of siteElements) {
    siteElement.addEventListener('click', (f) => {
      let currentTarget = f.currentTarget;
      let paragraphElement = currentTarget.getElementsByTagName('p')[0];

      let text = paragraphElement.textContent;
      let textParts = text.split(' ');

      let clicks = Number(textParts[1]);
      textParts[1] = ++clicks;

      paragraphElement.textContent = textParts.join(' ');
    })
  }
}