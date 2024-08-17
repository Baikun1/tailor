
function searchFunction() {
    const query = document.getElementById('searchInput').value;
    alert(`You searched for: ${query}`);
    // You can implement a real search function here
}
let loginbtn = document.getElementById('loginbtn');
let loginSection = document.getElementById('login');

loginbtn.addEventListener('click', function () {
    loginSection.style.display = "flex";
});

function show() {
    let closeBtn = document.querySelector(".close-btn");
    let togglePassword = document.querySelector(".toggle-password");
    let passwordInput = document.getElementById("psw");

    // Close the card on clicking the "X" button
    closeBtn.addEventListener("click", function () {
        loginSection.style.display = "none";
    });

    // Toggle password visibility
    togglePassword.addEventListener("click", function () {
        const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
        passwordInput.setAttribute("type", type);

        // Toggle the eye icon
        this.innerHTML = type === "password" ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
    });
}

show();

function signin() {
    // alert('Sign In button clicked!');
    console.log('sign in')
    // Implement your sign in logic here
}