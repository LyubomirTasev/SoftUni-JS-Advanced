function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   let inputElement = document.getElementById('searchField');
   let rowsElement = document.querySelectorAll('tbody tr');

   function onClick() {
      for (const row of rowsElement) {
         row.classList.remove('select');

         if(inputElement.value !== '' && row.innerHTML.includes(inputElement.value)){
            row.className = 'select';
         }
      }

      inputElement.value = '';
   }
}
