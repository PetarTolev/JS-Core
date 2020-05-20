function solve() {
   let button = document.getElementsByTagName('button')[0];

   button.addEventListener('click', function(){
      let lists = document.getElementsByTagName('ul');
      let availableCourses = Array.from(lists[0].getElementsByTagName('li'));
      let myCourses = lists[1];

      let price = 0;

      for (const course of availableCourses) {
         let checkBox = course.getElementsByTagName('input')[0];

         let li = document.createElement('li');

         if (checkBox.checked == true) {
            switch(checkBox.value) {
               case 'js-fundamentals':
                  li.textContent = 'JS-Fundamentals';
                  price += 170;
                  break;
               case 'js-advanced':
                  li.textContent = 'JS-Advanced';
                  price += 180;
                  break;
               case 'js-applications':
                  li.textContent = 'JS-Applications';
                  price += 190;
                  break;
               case 'js-web':
                  li.textContent = 'JS-Web';
                  price += 490;
                  break;
            }

            myCourses.appendChild(li);
         }
      }

      let totalPriceElement = document.getElementsByClassName('courseFoot')[1].getElementsByTagName('p')[0];
      let educationForm = Array.from(document.getElementById('educationForm').getElementsByTagName('input')).find(e => e.checked).value;

      let courses = Array.from(myCourses.getElementsByTagName('li')).map(e => e.textContent);

      let discount = 0;

      if (educationForm == 'online') {
         discount += 0.06;
      }

      if (courses.includes('JS-Advanced', 'JS-Fundamentals')) {
         discount +=  0.10;
      }
      
      if (courses.includes('JS-Advanced', 'JS-Fundamentals', 'JS-Applications')) {
         discount +=  0.06;
      }

      if (courses.includes('JS-Advanced', 'JS-Fundamentals', 'JS-Applications', 'JS-Web')) {
         let bonusCourse = document.createElement('li');
         bonusCourse.textContent = 'HTML and CSS';
         
         myCourses.appendChild(bonusCourse);
      }
      
      price = Math.floor(price - price * discount);

      totalPriceElement.textContent = `Cost: ${Math.floor(price)}.00 BGN`
   })
}

solve();