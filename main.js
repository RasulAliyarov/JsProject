const nameInput = document.getElementById("name");
const surnameInput = document.getElementById("surname");
const ageInput = document.getElementById("age");
const nationInput = document.getElementById("nation");
const positionInput = document.getElementById("position");
const experienceInput = document.getElementById("experience");
const btn = document.getElementById("add_btn");




function addElement(e) {

    e.preventDefault()

    if (nameInput.value == "" && surnameInput.value == "" && ageInput.value == "" && experienceInput.value == "") {
        alert("You must fill inputs!!!!")
    }
    else {

        const tBody = document.getElementsByTagName("tbody")[0]

        const trElement = document.createElement("tr")
        const name_tdElement = document.createElement("td")
        const surname_tdElement = document.createElement("td")
        const age_tdElement = document.createElement("td")
        const nation_tdElement = document.createElement("td")
        const position_tdElement = document.createElement("td")
        const exp_tdElement = document.createElement("td")
        const del_btn_tdElement = document.createElement("td")

        const del_btn = document.createElement("button");

        name_tdElement.innerHTML = nameInput.value
        surname_tdElement.innerHTML = surnameInput.value
        age_tdElement.innerHTML = ageInput.value
        nation_tdElement.innerHTML = nationInput.value
        position_tdElement.innerHTML = positionInput.value
        exp_tdElement.innerHTML = experienceInput.value
        del_btn.innerHTML = "Sil"
        del_btn.className ="del_btn"
        del_btn_tdElement.appendChild(del_btn);

        trElement.append(name_tdElement, surname_tdElement, age_tdElement, nation_tdElement, position_tdElement, exp_tdElement, del_btn_tdElement);
        tBody.appendChild(trElement)


        del_btn.addEventListener('click', () => {
            trElement.innerHTML = " "
        })

    }
}


btn.onclick = addElement



