function notify(message) {
  let notifElement = document.getElementById('notification');
  notifElement.textContent = message;
  notifElement.style.display = 'block';

  // setTimeout(function(){
  //   notifElement.style.display = 'none';
  // },2000);

  notifElement.addEventListener('click', (e)=>{
    e.target.style.display = 'none';
  });
}