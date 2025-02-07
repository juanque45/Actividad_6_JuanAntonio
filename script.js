document.getElementById("image1").addEventListener("click", function () {
    handleClick("image1", "image2");
});

document.getElementById("image2").addEventListener("click", function () {
    handleClick("image2", "image1");
});

function handleClick(selectedId, hiddenId) {
    document.getElementById(hiddenId).classList.add("hidden");
    document.getElementById(selectedId).classList.add("selected");
    document.getElementById("button-container").style.display = "block";
}

function changePerspective(perspective) {
    let selectedImage = document.querySelector(".selected");
    selectedImage.src = `./Imegenes/${selectedImage.id}_${perspective}.png`;
}

function reset() {
    document.getElementById("image1").src = "./Imegenes/image1_de_frente.png";
    document.getElementById("image1").classList.remove("hidden", "selected");
    document.getElementById("image2").src = "./Imegenes/image2_de_frente.png";
    document.getElementById("image2").classList.remove("hidden", "selected");
    document.getElementById("button-container").style.display = "none";
}
