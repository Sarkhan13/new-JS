var red = document.querySelector('#red');
var yellow =document.querySelector('#yellow');
var green = document.querySelector('#green');
var reng = 'qirmizi';

setInterval(function(){
 if(reng == 'qirmizi'){
    red.style.background = 'red';
    yellow.style.background = 'white';
    green.style.background = 'white';
    reng = 'sari';
 } else if(reng == 'sari'){
    red.style.background = 'white';
    yellow.style.background = 'yellow';
    reng = 'yasil';
 } else if(reng == 'yasil'){
    yellow.style.background = 'white';
    green.style.background = 'green';
    reng = 'qirmizi';

 }


},1000)

var list = document.querySelectorAll('li');
console.log(list);
var style = document.querySelector('#list')

style.style.listStyleType = 'none';
style.style.cursor  = 'pointer';

for(i=0;i<list.length;i++){
   list[i].addEventListener('click',function(){
      alert(this.textContent);
   })
   console.log(list[i]);
}



// var one = document.querySelector('.first');
// var two = document.querySelector('.second');
// var select = document.querySelector('.select');
// var four = document.querySelector('.fourth');
// var five = document.querySelector('.fifth');





var node = document.querySelectorAll('.node div');
console.log(node);

node.forEach(function(item){
     
      if(item.getAttribute('class') == 'select'){
        item.style.background = 'red';
        
      }
})