let el, i;
let data = [
];
let panel = document.querySelector("#panel");


function clearForm() {
  document.querySelector("#nombre").value = "";
  document.querySelector("#pApellido").value = "";
  document.querySelector("#sApellido").value = "";
}

function renderItem() {

  panel.textContent = "";
  data.forEach(x => {
    el = document.createElement("option");
    el.innerText = `${x.nombre} ${x.pApellido} ${x.sApellido}`;
    panel.append(el);
  });
}

function create() {
  let fn = document.querySelector("#nombre").value;
  let ln = document.querySelector("#pApellido").value;
  let ln2 = document.querySelector("#sApellido").value;
  data = [...data, { nombre: fn, pApellido: ln,  sApellido: ln2}];
  clearForm();
  console.log(data)
  renderItem();
}

function panelClick() {
  i = panel.selectedIndex;
  document.querySelector("#nombre").value = data[i].nombre;
  document.querySelector("#pApellido").value = data[i].pApellido;
  document.querySelector("#sApellido").value = data[i].sApellido;
}

function update() {
  data[i].nombre = document.querySelector("#nombre").value;
  data[i].pApellido = document.querySelector("#pApellido").value;
  data[i].sApellido = document.querySelector("#sApellido").value;
  renderItem();
}

function deleteItem() {
  data.splice(i, 1);
  renderItem();
}

 renderItem();