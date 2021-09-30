const color = document.querySelector("#color");
const salida = document.querySelector("#salida");
const storage = JSON.parse(localStorage.getItem("colorValue")) || "#ffffff";
const guardar = document.querySelector("#guardar");
const colorList = document.querySelector("#colorList");
const arrayList=JSON.parse(localStorage.getItem("colorValue")) || [];
//localStorage.setItem("colorValue", "#FFFFFF");
document.querySelector("#salida").style.color="#FFFFFF";
document.querySelector("#salida").style.backgroundColor=storage[storage.length-1];
document.querySelector("#salida").innerHTML=storage[storage.length-1];
document.querySelector("#color").value=storage[storage.length-1];



(function(arrayList) {
    for (const color of arrayList) {
        let li = document.createElement("li");
        li.style.backgroundColor=color;
        li.appendChild(document.createTextNode(color));
        colorList.appendChild(li);
    }
})(arrayList)



color.addEventListener("input",()=>{
    const value = color.value;
    document.querySelector("#salida").innerHTML=value;
    document.querySelector("#salida").style.backgroundColor=value;
    //localStorage.setItem("colorValue", value);
})

//color.addEventListener("change",()=>{ localStorage.setItem("colorValue", color.value)  });

guardar.addEventListener("click",()=>{
    let li = document.createElement("li");
    li.style.backgroundColor=color.value;
    li.appendChild(document.createTextNode(color.value));
    colorList.appendChild(li);
    arrayList.push(color.value);
    localStorage.setItem("colorValue", JSON.stringify(arrayList));
});