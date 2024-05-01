let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
}

// Добавяне на функционалност към бутона "Вход"
document.getElementById('loginBtn').addEventListener('click', function() {
    document.getElementById('loginModal').style.display = 'block'; // Показване на прозореца при клик
});

// Затваряне на прозореца при клик върху X бутона
document.getElementsByClassName('close')[0].addEventListener('click', function() {
    document.getElementById('loginModal').style.display = 'none';
});

// Затваряне на прозореца при клик върху външния му обект
window.onclick = function(event) {
    if (event.target == document.getElementById('loginModal')) {
        document.getElementById('loginModal').style.display = 'none';
    }
}
