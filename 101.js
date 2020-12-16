const keyValueId = document.getElementById("keyValue");
const keyCodeId = document.getElementById("keyCode");
const charCodeId = document.getElementById("charCode");

document.addEventListener("keydown", (event) =>{
    keyValueId.innerHTML=event.key;
    keyCodeId.innerHTML=event.code;
    charCodeId.innerHTML=event.keyCode;
});