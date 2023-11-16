const h1Element = document.querySelector('h1')
const btnEl = document.querySelector('button')
const fnc = (e) => {
  console.dir(h1Element)
  console.log(h1Element.textContent);
  console.dir(e.target.textContent)
  console.log('hello')
  // h1Element.textContent = '変更後のタイトル'
  h1Element.innerHTML = '変更後のタイトル'
}

btnEl.addEventListener('click', fnc)
