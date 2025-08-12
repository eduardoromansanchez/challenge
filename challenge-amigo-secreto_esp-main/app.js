// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos =[];

function agregarAmigo(){
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if(nombre === ""){
        alert("Por favor, ingrese un nombre");
        return;
    }
    if (amigos.includes(nombre)){
        alert("Este nombre ya fue ingresado en la lista");
        return;
    }
  amigos.push(nombre);
  mostrarLista();
  input.value= "";
  input.focus();
}

function mostrarLista(){
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(amigo =>{
        const li = document.createElement("li");
        li.textContent= amigo;
        lista.appendChild(li);
    });
}
function sortearAmigo(){
    if (amigo.length === 0)  {
        alert("No hay nombres para sortear");
        return;
    }
 const indice = Math.floor(Math.random()* amigos.length);
 const amigoSecreto = amigos[indice];
 amigos.splice(indice,1);

 const resultado = document.getElementById("resultado");
 resultado.innerHTML = `El amigo secreto es: <strong>${amigoSecreto}</strong>`;
 mostrarLista();
}