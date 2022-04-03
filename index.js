let button = document.getElementById('btn');
let add = document.getElementById('add');
showdata();
button.addEventListener('click', function () {
   let text = document.getElementById('write');
   let notes = localStorage.getItem('values');
   if (notes == null){
      arr = [];
   }
   else {
      arr = JSON.parse(notes);
   }
   if(text.value!="")
   {
      arr.push(text.value)
      localStorage.setItem('values', JSON.stringify(arr));
      text.value ="";
   }
  
   showdata();
});

function showdata(){
   let notes = localStorage.getItem('values');
   if (notes == null) {
      arr = [];
   }
   else {
      arr = JSON.parse(notes);
   }
   html = "";
   arr.forEach(function(element,index) {
      html += `<div class="box">
           <h2>Note${index+1}</h2>
           <p>${element}</p>
           <button id="${index}" onclick="deletes(this.id)" class="btn btn2">Delete</button>
      </div>`

   });
   let main = document.getElementById('adds');
   console.log(arr.length)
   if(arr.length!=0)
   {
      main.innerHTML = html
   }
   else{
      main.innerHTML =`<h4>No Notes Availabable`;
   }
}

function deletes(id){
   let notes = localStorage.getItem('values');
   if (notes == null) {
      arr = [];
   }
   else {
      arr = JSON.parse(notes);
   }
   arr.splice(id,1);
   localStorage.setItem('values',JSON.stringify(arr))
   showdata();

}