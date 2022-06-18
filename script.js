

 window.addEventListener('scroll', function(){
     const header =document.querySelector('header');
     header.classList.toggle("sticky", window.scrollY > 0 );
 });

 function toggleMenu(){
     const tmenuToggle = document.querySelector('.menuToggle');
     const navbar = document.querySelector('.navbar');
     navbar.classList.toggle('active');
     menuToggle.classList.toggle('active');
 }






const baseStorageKey = 'account~';
function initOnLoad() {
  const allLocalStorageKeys = Object.keys(localStorage);
  const keysWithIntereset = allLocalStorageKeys.filter(key => key.startsWith(baseStorageKey));

  keysWithIntereset.forEach(key => {
    const retrievedItem = localStorage.getItem(key);
    if (retrievedItem) {
      create_Tr_Td(JSON.parse(retrievedItem), key);
    }
  })

}


// Init table with values from localstorage
window.addEventListener("DOMContentLoaded", () =>{
  initOnLoad();
});

let selectedRow = null;
let btn = document.querySelector(".button")
btn.addEventListener("click", namedata);





function namedata(){
  let ax = read_Input_Value();

  
  if (selectedRow == null){
    const dataKey = baseStorageKey+Date.now();
    localStorage.setItem(dataKey, JSON.stringify(ax));

    create_Tr_Td(ax, dataKey);
    remove_input_value()
  }
  else{     
    updatefunc(ax, ); 
    remove_input_value(); 
    selectedRow = null;
  }

}

function read_Input_Value(){
  let redemp={} 
  redemp["parr"] = document.querySelector(".parrain").value;
  redemp["suc"] = document.querySelector(".sucesseur").value;
  redemp["avo"] = document.querySelector(".avocat").value;
  redemp["bank"] = document.querySelector(".banquier").value;
  return redemp
}
function create_Tr_Td(x, id){
  let empTable = document.querySelector(".list");
  let emp_tr = empTable.insertRow(empTable.length);
  emp_tr.setAttribute('id', id);

  let emp_td1 = emp_tr.insertCell(0);
  let emp_td2 = emp_tr.insertCell(1);
  let emp_td3 = emp_tr.insertCell(2);
  let emp_td4 = emp_tr.insertCell(3);
  let emp_td5 = emp_tr.insertCell(4);
  let emp_td6 = emp_tr.insertCell(5);
  let totalRowCount = document.querySelector(".list tr").length;
  emp_td1.innerHTML = empTable.rows.length-1;
  

  emp_td2.innerHTML = x.parr;   
    emp_td3.innerHTML = x.suc;
    emp_td4.innerHTML = x.avo;
  emp_td5.innerHTML = x.bank;
  
  emp_td6.innerHTML = '<a class="edt" onClick="onEdit(this)">Edit</a>  / <a class="dlt" onClick="onDelete(this)">Delete</a>';
}

function remove_input_value(){
  document.querySelector(".parrain").value= " ";
  document.querySelector(".sucesseur").value= " ";
  document.querySelector(".avocat").value= " ";
  document.querySelector(".banquier").value= " ";  
}

function onEdit(y){
  console.log(y);

  
    selectedRow = y.parentElement.parentElement;
    
    document.querySelector(".parrain").value = selectedRow.cells[1].innerHTML;
    document.querySelector(".sucesseur").value = selectedRow.cells[2].innerHTML;
     document.querySelector(".avocat").value = selectedRow.cells[3].innerHTML;
    document.querySelector(".banquier").value = selectedRow.cells[4].innerHTML;
}

function updatefunc(redemp){
  const editionId = selectedRow.id;
  localStorage.setItem(editionId, JSON.stringify(redemp));

  selectedRow.cells[1].innerHTML = redemp.parr;
  selectedRow.cells[2].innerHTML = redemp.suc;
  selectedRow.cells[3].innerHTML = redemp.avo;
  selectedRow.cells[4].innerHTML = redemp.bank;
  
}


function onDelete(deleteLinkElement) {
    if (confirm('Es tu sure ?')) {
      const selectedRow = deleteLinkElement.parentElement.parentElement;
      const deletionKey = selectedRow.id;
      localStorage.removeItem(deletionKey);
      
      selectedRow.remove()
    }
}


let constraints = { video: { facingMode: "environment" }, audio: false };
let track = null;
const cameraView = document.querySelector("#camera--view"),
    cameraOutput = document.querySelector("#camera--output"),
    cameraSensor = document.querySelector("#camera--sensor"),
    cameraTrigger = document.querySelector("#camera--trigger");
function cameraStart() {
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(stream) {
            track = stream.getTracks()[0];
            cameraView.srcObject = stream;
        })
        .catch(function(error) {
            console.error("Oops. Something is broken.", error);
        });
}
cameraTrigger.onclick = function() {
    cameraSensor.width = cameraView.videoWidth;
    cameraSensor.height = cameraView.videoHeight;
    cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
    cameraOutput.src = cameraSensor.toDataURL("image/webp");
    cameraOutput.classList.add("taken");
};
window.addEventListener("load", cameraStart, false);

function Clean() {
  document.getElementById("ok").style.visibility = "hidden";
}
function Ajout() {
  document.getElementById("ok").style.visibility = "visible";
}
function Clean1() {
  document.getElementById("ok1").style.visibility = "hidden";
}
function Ajout1() {
  document.getElementById("ok1").style.visibility = "visible";
}
function Clean2() {
  document.getElementById("ok2").style.visibility = "hidden";
}
function Ajout2() {
  document.getElementById("ok2").style.visibility = "visible";
}
function Clean3() {
  document.getElementById("ok3").style.visibility = "hidden";
}
function Ajout3() {
  document.getElementById("ok3").style.visibility = "visible";
}
function Clean4() {
  document.getElementById("ok4").style.visibility = "hidden";
}

function Ajout4() {
  document.getElementById("ok4").style.visibility = "visible";
}
function Clean5() {
  document.getElementById("ok5").style.visibility = "hidden";
}
function Ajout5() {
  document.getElementById("ok5").style.visibility = "visible";
}
function Clean6() {
  document.getElementById("ok6").style.visibility = "hidden";
}
function Ajout6() {
  document.getElementById("ok6").style.visibility = "visible";
}
function Clean7() {
  document.getElementById("ok7").style.visibility = "hidden";
}
function Ajout7() {
  document.getElementById("ok7").style.visibility = "visible";
}























































