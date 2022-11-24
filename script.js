let confirm=document.querySelector('#confirm')
let pName=document.querySelector('#name')
let card=document.querySelector('#card')
let month=document.querySelector('#month')
let year=document.querySelector('#year')
let cvc=document.querySelector('#cvc')
let count=0;
confirm.addEventListener('click',()=>{
  checkValidity();
  toImage();
})

function checkValidity(){
  if(pName.value===''){
    pName.classList.add('warning');
  }
  else{
    pName.classList.remove('warning');
      }
  if(card.value===''){
    card.classList.add('warning'); 
}
  else{
    card.classList.remove('warning');
    
      }
  if(month.value===''){
    month.classList.add('warning'); 
  }
  else{
    month.classList.remove('warning');
          }
  if(year.value===''){
    year.classList.add('warning'); 
  }
  else{
    year.classList.remove('warning')
      }
  if(cvc.value===NaN ||cvc.value===''){
    cvc.classList.add('warning'); 
  }
  else{
    cvc.classList.remove('warning')
      }
}

function warn(msg,elem){
  let p=document.createElement('p')
  p.innerHTML=msg;
  p.classList.add('msg')
  elem.after(p)
}

function toImage(){
  yournum.innerHTML=card.value;
  yourname.innerHTML=pName.value;
  yourdate.innerHTML=month.value+'/'+year.value;
}