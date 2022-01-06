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
      let tab = document.createElement("table");
      document.body.appendChild(tab);
      let trow1 = document.createElement("tr");
      tab.appendChild(trow1);

      // ***************** FOR HEADER ************
      let z = Object.keys(Object.assign({}, ...x));
      for (i = 0; i < z.length; i++) {
        var tdata1 = document.createElement("th");
        trow1.appendChild(tdata1);
        var r = z[i];
        var text = document.createTextNode(r);
        tdata1.appendChild(text);
      }

      // // ********************* BODY *********************
      for (let j = 0; j< x.length; j++) {
        let trow2 = document.createElement("tr");
        tab.appendChild(trow2);
        for (const [key, value] of Object.entries(x[j])) {
          let tdata2 = document.createElement("td");
          trow2.appendChild(tdata2);
          let ans = document.createTextNode(value);
          tdata2.appendChild(ans);
        }
      }


//       // *************** BODY ERROR ******************
// for (let j = 0; j < 20; j++) {
//   let trow2 = document.createElement("tr");
//   tab.appendChild(trow2);
//   for (let k = 0; k < r.length + 1; k++) {
//       let tdata2 = document.createElement("td");
//       trow2.appendChild(tdata2);
//       let postid = document.createTextNode(x[k].postId);
//       tdata2.appendChild(postid);
//       let id = document.createTextNode(x[k].id);
//       tdata2.appendChild(id);
//       let name = document.createTextNode(x[k].name);
//       tdata2.appendChild(name);
//       let email = document.createTextNode(x[k].email);
//       tdata2.appendChild(email);
//       let bdy = document.createTextNode(x[k].body);
//       tdata2.appendChild(bdy);
//   }
// }

    });
}


