// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let friends = [];

function addFriend() {
    let newFriend = document.querySelector('#amigo').value;
    if (newFriend === '' || newFriend.trim() === '') {
        alert('Por favor, ingresa un nombre.');
    } else if (friends.includes(newFriend)) {
        alert('Este amigo ya está en la lista.');
    } else {
        friends.push(newFriend);
        let friendList = document.querySelector('.name-list');
        let listItem = document.createElement('li');
        listItem.textContent = newFriend;
        friendList.appendChild(listItem);
    }

    document.querySelector('#amigo').value = '';
    // console.log(friends);
}

function drawFriend() { 
    if (friends.length < 2) {
        alert('Agrega por lo menos 2 amigos para sortear un ganador.');
        return;
    }
    let randomWinnerIndex = Math.floor(Math.random() * friends.length);
    let resultList = document.querySelector('.result-list');
    resultList.textContent = `El amigo secreto es: ${friends[randomWinnerIndex]}`;

    // console.log('Índice del ganador:', randomWinnerIndex);
    // console.log('Amigo secreto:', friends[randomWinnerIndex]);

    // Eliminar el amigo secreto de la lista para que no pueda ser seleccionado nuevamente
    friends.splice(randomWinnerIndex, 1);
    let friendList = document.querySelector('.name-list');
    friendList.removeChild(friendList.childNodes[randomWinnerIndex]);

}


function restartRaffle() {
    friends = [];
    document.querySelector('.name-list').innerHTML = '';
    document.querySelector('.result-list').innerHTML = '';
}
