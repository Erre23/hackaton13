const petsContainer = document.getElementById('petsContainer');
const petCard = document.getElementsByClassName('card')[0];

var btnAddPet = document.getElementById("btnAddPet");
var frmModalAddPet = document.getElementById("frmModalAddPet");

btnAddPet.addEventListener('click', btnModal_click);
frmModalAddPet.addEventListener('click', frmModal_click);

// When the user clicks on the button, open the modal
function btnModal_click() {
    //frmModal_clear();
    frmModalAddPet.style.display = "block";
}

function frmModal_click(e) {
    if (e.target.classList.contains('modal-close')) {
        frmModal_close();
    }
    else if (e.target.classList.contains('modal-cancel')) {
        frmModal_close();
        alert('Has cancelado los datos');
    }
    else if (e.target.classList.contains('modal-success')) {
        frmModal_read()
    }
}

function frmModal_close() {
    frmModalAddPet.style.display = "none";
    frmModal_clear();
}
//petsContainer.addEventListener('mouseenter', petsContainer_mouseenter);

petCard.addEventListener('mouseenter',petsContainer_mouseenter);
petCard.addEventListener('mouseleave', petsContainer_mouseleave);

function petsContainer_mouseenter(e) {
    e.preventDefault();
    if (e.target.classList.contains('card'))
    {
        const card = e.target;
        const buttonEdit = card.querySelector(".card-edit");
        const buttonDelete = card.querySelector(".card-delete");

        if (buttonEdit) {
            buttonEdit.style.display = "inline-block";
        }
        
        if (buttonDelete) {
            buttonDelete.style.display = "inline-block";
        }
    }
    console.log(e.target);
}


function petsContainer_mouseleave(e) {
    console.log(e);
    if (e.target.classList.contains('card'))
    {
        const card = e.target;
        const buttonEdit = card.querySelector(".card-edit");
        const buttonDelete = card.querySelector(".card-delete");

        if (buttonEdit) {
            buttonEdit.style.display = "none";
        }
        
        if (buttonDelete) {
            buttonDelete.style.display = "none";
        }
        console.log(buttonEdit)
    }
}
//Este evento se usa para que cuando se dé click fuera del modal , el modal se cierre
window.onclick = function(event) {
    if (event.target == frmModalAddPet) {
        frmModalAddPet.style.display = "none";
    }
} 