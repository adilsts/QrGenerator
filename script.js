const apiUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example";
let imgBox = document.getElementById('img-box');
let qrImg = document.getElementById('qrimg');
let inputBox = document.getElementById('input-box');



function generateQr(){

    if(inputBox.value.length > 0){
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputBox.value;
        imgBox.classList.add("show-img");
    }


}

