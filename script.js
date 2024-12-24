let container = document.getElementById('container');
let icon =  document.getElementById('heart');
container.addEventListener('dblclick' , function(event){
    let newImage = document.createElement('img');
    newImage.src = "heart.webp";
    newImage.style.width = "200px";
    newImage.style.height = "200px";
    container.appendChild(newImage);
    icon.style.color = "red";
    setTimeout(function(){
        newImage.remove();
    }, 2000);
});