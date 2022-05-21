function search() {
   let userWord = document.getElementById('searchText').value; // Да не забравя да взема стойността!
   let townsElement = Array.from(document.querySelectorAll('#towns li')); // С интервал достъпваме атрибут (child) на елемента (parent) с даденото id => вложеност
   let match = document.getElementById('result');
   let count = 0;

   for (let town of townsElement) {
      if (town.textContent.includes(userWord) && userWord !== '') {
         town.style.fontWeight = 'bold'; // style дава възможност да използваме методите на CSS
         town.style.textDecoration = 'underline';
         count++;
      } else {
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      }
   }

   match.textContent = `${count} matches found`;
}