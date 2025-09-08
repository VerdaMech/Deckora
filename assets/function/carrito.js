

/* //Local storage (primero para ver si funciona) 
if (typeof (Storage) !== 'undefined') {
    //guardar
    const producto = ["a", "b", "c"];
    const objeto = [{
        nombre: 'carta de prueba',
        precio: '3000'
    }, {
        nombre: 'carta de prueba2',
        precio: '3000'
    }];
    localStorage.setItem("probando", JSON.stringify(objeto)); //Guardando un item
    console.log('funciona localstorage')
    //sacar
    const recibido = localStorage.getItem("probando");
    console.log(JSON.parse(recibido)[0].nombre)
    localStorage.removeItem("probando")
} else {
    console.log('no funciona localstorage')
} */


//agregar datos
document.addEventListener("DOMContentLoaded", function () {
    const addCarritoBtn = document.getElementsByClassName('anadir-carrito');
    let items = [];
    console.log(addCarritoBtn); // should now be 9
    for (let i = 0; i < addCarritoBtn.length; i++) {
        addCarritoBtn[i].addEventListener("click", function (e) {
            if (typeof (Storage) !== 'undefined') {
                let item = {
                    id: i + 1,
                    nombre: e.target.closest('.desc').children[2].textContent,
                    precio: e.target.closest('.desc').children[3].children[0].textContent,
                    cantidad: 1
                };
                if (JSON.parse(localStorage.getItem('items')) === null) {
                    items.push(item);
                    localStorage.setItem("items", JSON.stringify(items));
                    window.location.reload();
                } else {
                    const ItemsPresentes = JSON.parse(localStorage.getItem("items"));
                    ItemsPresentes.map(data => {
                        if (item.id == data.id) {
                            item.cantidad = data.cantidad + 1;
                            console.log(item)

                        } else {
                            items.push(data);
                        }
                    }
                    );
                    items.push(item);
                    localStorage.setItem('items', JSON.stringify(items));
                    window.location.reload();
                }

            } else {
                alert('Localstorage no esta funcioando')
            }
        });
    }
});

//agregar productos al carrito

const carritoImg = document.querySelector('.listaCarrito p');
let numb = 0;

JSON.parse(localStorage.getItem('items')).map(data => {
    numb = numb + data.cantidad;
});

carritoImg.innerHTML = numb;

//añadir prod al carrito (que se vea)
let items = localStorage.getItem('items');

if (items) {
    let parsedItems = JSON.parse(items);
    document.getElementById('nombreCarta').innerHTML = parsedItems[1].nombre;
}

if (items) {
    let parsedItems = JSON.parse(items);
    document.getElementById('precioCarta').innerHTML = parsedItems[1].precio;
}

if (items) {
    let parsedItems = JSON.parse(items);

    let precioCarta = parseFloat(document.getElementById('precioCarta').innerHTML = parsedItems[1].precio);
    let cantidad = parseInt(document.getElementById('cantidad').value);

    let subtotal = precioCarta * cantidad;

    document.getElementById('subTotal').textContent = subtotal;
}






