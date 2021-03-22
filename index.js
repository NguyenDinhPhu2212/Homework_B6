//=========================Bai 1=======================
function js_style() {
  let jsstyle = document.getElementById("text");
  jsstyle.style.fontSize = "25px";
  jsstyle.style.fontFamily = "Arial, Helvetica, sans-serif";
  jsstyle.style.color = "red";
}
//=========================Bai 2===========================
function getFormvalue() {
  var tmp = document.getElementById("form1");
  let fullName = "";
  for (let i = 0; i < tmp.length; i++) {
    if (tmp.elements[i].value != "Submit") {
      console.log(tmp.elements[i].value);
    }
  }
}
//========================Bai 3==================
function setBGC() {
  let tagP = document.getElementsByTagName("p");
  for (let i = 0; i < tagP.length; i++) {
    tagP[i].style.backgroundColor="red";
  }
}
//=========================Bai 4================
function getAttributes() {
  let tagA = document.getElementsByTagName("a")[0];
  console.log(tagA.type);
  console.log(tagA.href);
  console.log(tagA.hreflang);
  console.log(tagA.rel);
  console.log(tagA.target);
}
//========================Bai 5================
function insert_Row() {
  let table = document.getElementById("sampleTable");
  let newRow = table.insertRow(table.length);
  let cell1 = newRow.insertCell(0);
  cell1.innerHTML = "Row 3 cell 1";
  let cell2 = newRow.insertCell(1);
  cell2.innerHTML = "Row 3 cell 2";
}
//=======================Bai 6===================
function removecolor() {
  let slt = document.getElementById("colorSelect");
  let rc = slt.remove(slt.selectedIndex);
}
//======================Bai 7======================
function showImg() {
  let imgList = [
    {
      src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
      width: "240",
      height: "160",
    },
    {
      src: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
      width: "320",
      height: "195",
    },
    {
      src: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
      width: "500",
      height: "343",
    },
  ];
  function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  let removeImg = document.getElementsByTagName("img");
  for (let i = 0; i < removeImg.length; i++) {
    document.body.removeChild(removeImg[i]);
  }

  let index = rand(1, 3) - 1;
  let selectedImg = document.createElement("IMG");
  let imgInfo = imgList[index];
  selectedImg.setAttribute("src", imgInfo.src);
  selectedImg.setAttribute("width", imgInfo.width);
  selectedImg.setAttribute("height", imgInfo.height);

  document.body.appendChild(selectedImg);
}
//============================Bai 8===========================
function showSize() {
let wh =window.innerHeight;
let ww= window.innerWidth;
let removeTagP= document.getElementsByTagName("p");
  for (let i = 0; i < removeTagP.length; i++) {
    document.body.removeChild(removeTagP[i]);
  }
let newP = document.createElement('P');
newP.innerHTML=`<h1> Width: ${ww} </h1><br><h1>Height: ${wh}</h1> `;
document.body.appendChild(newP);
}