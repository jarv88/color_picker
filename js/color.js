const color = document.querySelector("#color");
const salida = document.querySelector("#salida");
const storage = localStorage.getItem("colorValue") || "#FFFFFF";
const guardar = document.querySelector("#guardar");
const colorList = document.querySelector("#colorList");
//localStorage.setItem("colorValue", "#FFFFFF");
document.querySelector("#salida").style.color="#FFFFFF";
document.querySelector("#salida").style.backgroundColor=storage;
document.querySelector("#salida").innerHTML=storage;
document.querySelector("#color").value=storage;


color.addEventListener("input",()=>{
    const value = color.value;
    document.querySelector("#salida").innerHTML=value;
    document.querySelector("#salida").style.backgroundColor=value;
    //localStorage.setItem("colorValue", value);
})

color.addEventListener("change",()=>{ localStorage.setItem("colorValue", color.value)  });

guardar.addEventListener("click",()=>{
    let li = document.createElement("li");
    li.style.backgroundColor=color.value;
    li.appendChild(document.createTextNode(color.value));
    colorList.appendChild(li);
});