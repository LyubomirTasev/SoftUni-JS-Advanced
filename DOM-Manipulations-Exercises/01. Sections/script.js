function create(words) {
   let parentElement = document.getElementById('content');
   let elements = words;

   for (let i = 0; i < elements.length; i++) {
      let divElement = document.createElement('div');
      let pElement = document.createElement('p');
      //let textElement = document.createTextNode(elements[i]);
      pElement.textContent = elements[i]; // ! стойността е първа
      
      
      //pElement.appendChild(textElement);
      pElement.style.display = 'none';
      divElement.appendChild(pElement);

      divElement.addEventListener('click', function(event){
         //event.target.children[0].style.display = 'block';
         pElement.style.display = 'block';
      });
      parentElement.appendChild(divElement);
   }
}

// function create(words) {
//    let contentElement = document.getElementById('content');

//    for (const word of words) {
//       let divElement = document.createElement('div');
//       let paragraphElement = document.createElement('p');
//       paragraphElement.textContent = word;
//       paragraphElement.style.display = 'none';
//       divElement.appendChild(paragraphElement);
      
//       divElement.addEventListener('click', () => {
//          paragraphElement.style.display = 'block';
//       });
//       contentElement.appendChild(divElement);
//    }
// }