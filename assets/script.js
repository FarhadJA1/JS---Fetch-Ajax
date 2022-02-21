// let arr = [1,2,3,4];



// function getDatas() {
//     setTimeout(() => {
//         arr.forEach(m=>{
//             console.log(m);
//         });
        
//     }, 2000);
// }

// function setDatas() {
//     let promise = new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             arr.push(6);
//             let isMarried = false;
//             if(isMarried){
//                 resolve();
//             }
//             else{
//                 reject("Something went wrong!");
//             }
            
//         }, 4000);
//     })
//     return promise;
// }

// setDatas().then(res=>{
//     getDatas();
// }).catch(error=>{
//     console.log(error);
// })


//   function getDatas() {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(json => console.log(json))
//   }

// async function getDatas() {
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts').then(res=>res);
//     let data = await response.json();

//     console.log(data);
// }

let row = document.getElementById("parent");

  function getDatas() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data=>{
        data.forEach(post => {
            let elem = `<div class="col-3 mt-3">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">UserId: ${post.userID}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">ID: ${post.id}</h6>
                  <p class="card-text">Title: ${post.title}</p>
                  
                </div>
              </div>
        </div>`

        
        row.innerHTML += elem;

        });
    })
  }
  

  getDatas();
