// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let friends = [];

function addFriend(name) {
    let newFriend = document.querySelector('#amigo').value;
    if (newFriend === '') {
        alert('Por favor, ingresa un nombre.');
    } else if (friends.includes(newFriend)) {
        alert('Este amigo ya está en la lista.');
    } else {
        friends.push(newFriend);
        let friendList = document.querySelector('.name-list');
        let listItem = document.createElement('li');
        listItem.textContent = newFriend;
        friendList.appendChild(listItem);
        document.querySelector('#amigo').value = ''; 
    }
}