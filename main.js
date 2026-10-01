let drinksList = [
  {name: "Coca-Cola", price: 500},
  {name: "Coca-Cola Zero", price: 550},
  {name: "Fanta", price: 500},
  {name: "Sprite", price: 500},
  {name: "Jeges tea", price: 600},
];

const table = document.getElementById("tartalom");

for (const drinks of drinksList) {

  const sor = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = drinks.name;
  sor.appendChild(nameCell);

  const priceCell = document.createElement("td");
  priceCell.textContent = drinks.price;
  sor.appendChild(priceCell);

  table.appendChild(sor);
}

function Add() {

  let name = document.getElementById("name").value;
  let price = document.getElementById("price").value;
  if (validate(true)){
    let drinks = {
      name: name,
      price: price,
    }


    drinksList.push(drinks);

    const sor = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = drinks.name;
    sor.appendChild(nameCell);

    const priceCell = document.createElement("td");
    priceCell.textContent = drinks.price;
    sor.appendChild(priceCell);

    table.appendChild(sor);

    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
  }
  

}

const fields = ["name", "price"]; 

fields.forEach(id => { 
  const element = document.getElementById(id); 
  element.dataset.touched = "false"; 
  element.addEventListener("input", () => { 
    element.dataset.touched = "true"; 
    validate(); 
  }); 
  element.addEventListener("change", () => { 
    element.dataset.touched = "true"; 
    validate(); 
  }); 
}); 
function setMsg(id, text, ok = false) { 
  const span = document.getElementById(id + "Msg"); 
  span.textContent = text; 
  if (ok) { 
    span.className = "msg success"; 
  } else { 
    span.className = "msg error"; 
  } 
} 
function validate(submit = false) { 
  const name = document.getElementById("name").value.trim(); 
  const price = document.getElementById("price").value; 
  let valid = true; 
  if (submit || document.getElementById("name").dataset.touched === "true") { 
    if (name.length < 3 || name.length > 100) { 
      setMsg( "name", "A névnek legalább 3 karakter hosszúnak kell lennie!" ); 
      valid = false; 
    } else { 
      setMsg("name", "✔", true); 
    } 
  } 
  if (submit || document.getElementById("price").dataset.touched === "true") { 
    if (price < 1 || price > 10000 || price === "") { 
      setMsg( "price", "Az árnak 1 és 10000 között kell lennie!" ); 
      valid = false; 
    } else { 
      setMsg("price", "✔", true); 
    } 
  } return valid; 
} 
