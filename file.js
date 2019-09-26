const employees = [
    { id: 1, name: 'moe'},
    { id: 2, name: 'larry'},
    { id: 4, name: 'shep'},
    { id: 3, name: 'curly'},
    { id: 5, name: 'groucho'},
    { id: 6, name: 'harpo'},
    { id: 8, name: 'shep Jr.'},
    { id: 99, name: 'lucy'}
  ];

//   const clickBox = document.querySelector('div button');
  
//   clickBox.addEventListener('click', () =>{
//     console.log ("i have been clicked")    
//   });


let count = 0;
demos= document.getElementsByClassName("people");
nodes= document.getElementsByClassName("div .people");

for (var i = 0; i < demos.length; i++) {
   demos[i].addEventListener("click",() =>{
      count++;
      console.log(count);
      console.log("I've been clicked")
      if (count > 3) {
         warning();
      }
   });
}
const warning = () => {
   alert("You've picked too many!")
}


// const changeColor = () => {
//    var count = i;
//    console.log(count);
// }

//   const main = document.getElementById('main')
//   //querySelector('div')
//   const boxContainer = document.querySelector('div div')
//   const button = document.querySelector('div button');

//   let boxCount = 0;
//   const addColoredBox = () => {
//       boxCount++; 
//       const box = document.createElement('div');
//       box.classList.add('box');
//       box.addEventListener('click', ()=>{
//           console.log(boxCount);

//           // ev => 
//       })
//       boxContainer.appendChild(box);
//   };

//   button.addEventListener('click', addColoredBox);
//   button.addEventListener('click', () => {
//       console.log('Button was clicked')
//   })
