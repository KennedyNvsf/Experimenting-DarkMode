

let icon = document.getElementById("icon");




function changeTheme () {

    icon.addEventListener("click", () =>{

        document.body.classList.toggle("darkTheme");

        if(document.body.classList.contains("darkTheme")){

            icon.src = "images/sun.png";

        } else {

            icon.src = "images/moon.png";
        }
    })
}

changeTheme();