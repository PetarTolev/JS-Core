function solve() {
   function clickEvent() {
      let selected = document.getElementsByClassName('select');
      Array.from(selected).forEach(row => row.classList.remove('select'));

      for (const student of students) {
         let text = student.innerText.toLowerCase();
         
         if (text.includes(search.value.toLowerCase())) {
            student.className = 'select';
         }
      }
   }

   let searchButton = document.getElementById('searchBtn');
   let search = document.getElementById('searchField');
   let students = document
      .getElementsByTagName('tbody')[0]
      .getElementsByTagName('tr');

   searchButton.addEventListener('click', clickEvent);
}