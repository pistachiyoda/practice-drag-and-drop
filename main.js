let draggedObject;
let dragfrom = document.querySelector(".dragfrom");
let dragto = document.querySelector(".dragto");

dragfrom.addEventListener("dragstart", function(event) {
  console.log("dragstart");
  draggedObject = event.target;
  console.log(draggedObject);
});

dragto.addEventListener("dragenter", function(event) {
  console.log("dragenter");
});

dragfrom.addEventListener("dragend", function(event) {
  console.log("dragend");
  dragfrom.removeChild(draggedObject);
  dragto.appendChild(draggedObject);
});

dragto.addEventListener("dragend", function(event) {
  console.log("dragend");
  dragto.removeChild(draggedObject);
  dragfrom.appendChild(draggedObject);
});
