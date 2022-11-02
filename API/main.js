let btn = document.querySelector("button");

btn.addEventListener("click", (r) => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => {
            response.json()
                .then(value => {
                    let data = `<tr>
                                 <th scope="col">userID</th>
                                 <th scope="col">id</th>
                                 <th scope="col">title</th>
                                 <th scope="col">body</th>
                               </th>`
                    for (let i = 0; i < value.length; i++) {
                        data += `
            <tr>
             <th scope="row">${value[i].userID}</th>
             <th>${value[i].id}</th>
             <th>${value[i].title}</th>
             <th>${value[i].body}</th>
             </tr > `
                    } 
                    document.querySelector('table').innerHTML=data;
                })
                .catch(err => { console.log(err); })
        })
        .catch(err => console.log(err));
})
let btnn=document.querySelector('btnn');
let form = document.querySelector('form');
form.addEventListener('submit', async (r)=>{
    r.preventDefault();
    document.querySelector("img").src="https://media.tenor.com/wazb7Xpzs6IAAAAC/stephen-curry-123.gif";
    let inp=document.querySelector('input');
   let response= await fetch(`https://source.unsplash.com/random/?${inp.value}`)
   document.querySelector('img').src=response.url;
})




