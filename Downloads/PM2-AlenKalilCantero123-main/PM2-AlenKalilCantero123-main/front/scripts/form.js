$(document).ready(function() {
    $('#clearBtn').click(function() {
        $('#movieForm')[0].reset();
    });

    $('#movieForm').submit(function(event) {
        event.preventDefault();
        if (validateForm()) {
            sendForm();
        }
    });

    function validateForm() {
        const titulo = $('#titulo').val();
        const anio = $('#anio').val();
        const director = $('#director').val();
        const genero = $('#genero').val();
        const rating = $('#rating').val();
        const poster = $('#poster').val();

        if (!titulo || !anio || !director || !genero || !rating || !poster) {
            alert('Todos los campos son obligatorios');
            return false;
        }

        return true;
    }

    function sendForm() {
        const formData = {
            title: $('#titulo').val(),
            year: $('#anio').val(),
            director: $('#director').val(),
            genre: $('#genero').val(),
            rate: $('#rating').val(),
            poster: $('#poster').val()
        };

        console.log('Formulario enviado:', formData);

        // Llamada AJAX para enviar datos al backend
        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/movies',
            data: formData,
            success: function(response) {
                console.log('Respuesta del servidor:', response);
                alert('Película creada exitosamente');
                $('#movieForm')[0].reset(); // Limpiar el formulario después de enviarlo
            },
            error: function(error) {
                console.error('Error al enviar el formulario:', error);
                alert('Error al crear la película');
            }
        });
    }
});

