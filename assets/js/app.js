const petsContainer = document.getElementById('petsContainer');
const petCard = document.getElementsByClassName('card')[0];
let petCardSelected;

const btnAddPet = document.getElementById("btnAddPet");
const frmModalAddPet = document.getElementById("frmModalAddPet");
const frmModalDeletePet = document.getElementById("frmModalDeletePet");

petsContainer.addEventListener('click', petsContainer_Click)
btnAddPet.addEventListener('click', btnModal_click);
frmModalAddPet.addEventListener('click', frmModal_click);
frmModalDeletePet.addEventListener('click', frmModalDelete_click);

// When the user clicks on the button, open the modal
function btnModal_click() {
    //frmModal_clear();
    frmModalAddPet.style.display = "block";
}

function petsContainer_Click(e) {
    if (e.target.classList.contains('card-delete')) {
        petCardSelected = e.target;
        //container.remove(e.target);
        frmModalDeletePet_Open();
    }
}

function frmModal_click(e) {
    if (e.target.classList.contains('modal-close')) {
        frmModal_close();
    }
    else if (e.target.classList.contains('modal-cancel')) {
        frmModal_close();
    }
    else if (e.target.classList.contains('modal-success')) {
        frmModal_read()
    }
}
// When the user clicks on the button, open the modal
function frmModalDeletePet_Open() {
    //frmModal_clear();
    frmModalDeletePet.style.display = "block";
}



function frmModalDelete_click(e) {
    if (e.target.classList.contains('modal-close')) {
        frmModalDelete_close();
    }
    else if (e.target.classList.contains('modal-cancel')) {
        frmModalDelete_close();
    }
    else if (e.target.classList.contains('modal-success')) {
        const container = petCardSelected.parentElement;
        container.remove(petCardSelected);
        frmModalDelete_close()
    }
}

function frmModal_read() {
    const nombre = frmModalAddPet.querySelector('[name=nombre]').value.trim();
    const apellido = frmModalAddPet.querySelector('[name=apellido]').value.trim();
    const raza = frmModalAddPet.querySelector('[name=raza]').value.trim();
    const celular = frmModalAddPet.querySelector('[name=celular]').value.trim();
    const pais = frmModalAddPet.querySelector('[name=pais]').value.trim();
    const imagen = frmModalAddPet.querySelector('[name=imagen]').value.trim();
    const acerca = frmModalAddPet.querySelector('[name=acerca]').value.trim();

    if (frmModal_validarDatos(nombre, apellido, raza, celular, pais, imagen, acerca)) {
        frmModal_AddPet(nombre, apellido, raza, celular, pais, imagen, acerca);
    }
}

function frmModal_AddPet(nombre, apellido, raza, celular, pais, imagen, acerca) {
    const containerBody = petsContainer.querySelector(".container-body");

     const card = document.createElement('div');
     card.className = 'card';
     card.innerHTML = `
     <button class="card-edit">Edit</button>
     <div class="card-content">
         <img src="${imagen}" class="card-image"></img>
         <p>${nombre + ' ' + apellido}</p>
         <p>${raza} | ${celular}</p>
         <p>${pais}</p>
         <p>${acerca}</p>
     </div>
     <button class="card-delete">Delete</button>
     `;     
     card.addEventListener('mouseenter',petsContainer_mouseenter);
     card.addEventListener('mouseleave', petsContainer_mouseleave);

     containerBody.appendChild(card);
     frmModal_close();
}

function frmModal_clear() {
    Array.from(frmModalAddPet.querySelectorAll('input')).forEach(e => {
        e.value = '';
    });

    Array.from(frmModalAddPet.querySelectorAll('textarea')).forEach(e => {
        e.value = '';
    });
}

function frmModal_validarDatos(nombre, apellido, raza, celular, pais, imagen, acerca) {
    let msgError = '';
    if (!nombre) {
        msgError += '\n- Olvidó ingresar el Nombre'; 
    }
    if (!apellido) {
        msgError += '\n- Olvidó ingresar el Apellido'; 
    }
    if (!raza) {
        msgError += '\n- Olvidó ingresar la raza'; 
    }
    if (!celular || celular.length !== 9 || Number.isNaN(Number.parseInt(celular))) {
        msgError += '\n- El n° de Celular debe contener 9 dígitos'; 
    }
    if (!pais) {
        msgError += '\n- Olvidó ingresar el País'; 
    }
    if (!imagen) {
        msgError += '\n- Olvidó ingresar la URL de la imagen'; 
    }
    if (!acerca) {
        msgError += '\n- Olvidó ingresar datos acerca de la mascota'; 
    }

    if (msgError) {
        alert(`Por favor lea con atención las siguientes observaciones:\n${msgError}`);
        return false;
    }

    return true;
}

function frmModal_close() {
    frmModalAddPet.style.display = "none";
    frmModal_clear();
}

function frmModalDelete_close() {
    frmModalDeletePet.style.display = "none";
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
}


function petsContainer_mouseleave(e) {
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
    }
}
//Este evento se usa para que cuando se dé click fuera del modal , el modal se cierre
window.onclick = function(event) {
    if (event.target == frmModalAddPet) {
        frmModalAddPet.style.display = "none";
    }
    else if (event.target == frmModalDeletePet) {
        frmModalDeletePet.style.display = "none";
    }
} 