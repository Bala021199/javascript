// getText("fetch_info.txt");

// async function getText(file) {
//   let myObject = await fetch(file);
//   let myText = await myObject.text();
//   document.getElementById("demo").innerHTML = myText;
// }

// *************** Sample FETCH****************
// function getText() {
//   fetch("https://jsonplaceholder.typicode.com/comments/")
//     .then((res) => res.json())
//     .then((x) => console.log(x));
// }

// -------------------- HTML FORMAT TO GET DATA USING JS ---------------------------

// function getText(){
//   fetch('https://jsonplaceholder.typicode.com/comments/').then(res=>res.json())
//   .then(x =>
//     {
//         for(let i=1;i<x.length;i++){
//             // document.write(x[i].body);              // // for Write in html page

//             let a=document.createElement('P')
//             let b=document.createTextNode(x[i].email);
//             a.appendChild(b)
//             let c=document.createTextNode(x[i].body);
//             a.appendChild(c)
//             document.body.appendChild(a)
//         }
//  })
// }

// ------------------------- TABLE FORMAT TO GET DATAS USING JS---------------------

function getText() {
  fetch("https://jsonplaceholder.typicode.com/comments/")
    .then((res) => res.json())
    .then((x) => {
      let tab = document.getElementById("table");
      let trow1 = document.createElement("tr");
      tab.appendChild(trow1);
      var tdata1 = document.createElement("th");
      trow1.appendChild(tdata1);
      

      // ***************** FOR HEADER ************
      let z = Object.keys(Object.assign({}, ...x));
      for (s = 0; s < z.length; s++) {
        var r = z[s];
        console.log(r);
        var text = document.createTextNode(r);
        tdata1.appendChild(text);
        console.log(text);
      }

      
      

     
      

      for (let i = 1; i < x.length; i++) {
        let id = document.createTextNode(x[i].id);
        tdata2.appendChild(id);
        let name = document.createTextNode(x[i].name);
        tdata2.appendChild(name);
        let email = document.createTextNode(x[i].email);
        tdata2.appendChild(email);
        let bdy = document.createTextNode(x[i].body);
        tdata2.appendChild(bdy);
        let trow2 = document.createElement("tr");
        tab.appendchid(trow2);
        let tdata2 = document.createElement("td");
        trow1.appendChild(tdata2)
        
        

      }
    });
  // document.body.appendChild(tab);
}
