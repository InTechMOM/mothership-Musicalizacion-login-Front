$(document).ready(function () {
    function showPopup(popupSelector) {
        $(popupSelector).addClass('show');
        $(popupSelector + ' .pop-wrap').addClass('show');
    }

    function hidePopup(popupSelector) {
        $(popupSelector).removeClass('show');
        $(popupSelector + ' .pop-wrap').removeClass('show');
    }

    $("#close").click(function () {
        hidePopup('.pop-up');
        hidePopup('.register');
    });

    $(".header-button-inicio").click(function () {
        hidePopup('.register');  // Oculta el pop-up de registro si está abierto
        showPopup('.pop-up');
    });

    $(".registro").click(function () {
        hidePopup('.pop-up');  // Oculta el pop-up de inicio si está abierto
        showPopup('.register');
    });
});



document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.querySelector('.sub-email[type="email"]').value;
    var password = document.querySelector('.sub-email[type="password"]').value;

    fetch('tu_endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, password: password }),
    })
    .then(response => response.json())
    .then(data => {
        // Maneja la respuesta aquí
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});


document.querySelector('.register form').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.querySelector('.register input[type="email"]').value;
    var password = document.querySelector('.register input[type="password"]').value;
    var username = document.querySelector('.register input[name="username"]').value;

    fetch('tu_endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, password: password, username: username }),
    })
    .then(response => response.json())
    .then(data => {
        // Maneja la respuesta aquí
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});