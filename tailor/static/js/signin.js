function submitForm() {
    const form = document.getElementById('signInForm');
    const formData = new FormData(form);

    fetch('signin/', {
        method: 'POST',
        body: formData,
        headers: {
            'X-CSRFToken': getCookie('csrftoken')
        }
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('User registered successfully! Your User ID is ' + data.user_id);
                // Redirect or clear form fields as needed
            } else {
                alert('There was an error registering the user.');
            }
        })
        .catch(error => console.error('Error:', error));
}

// Helper function to get CSRF token
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
