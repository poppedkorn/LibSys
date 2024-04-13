/*---------------------------------------------------------------------index--------------------------------------------------------------------------------------------------------------------*/
document.getElementById('myForm').addEventListener('submit', function(event) {
    // Prevent default form submission
    event.preventDefault();

    // Get form values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Create an object to store form data
    var userData = {
        username: username,
        password: password
    };

    // Convert object to JSON string
    var userDataJSON = JSON.stringify(userData);

    // Store form data in local storage
    localStorage.setItem('userData', userDataJSON);

    // Redirect to homePage.html
    window.location.href = "homePage.html";
});

/*---------------------------------------------------------------------homePage---------------------------------------------------------------------------------------------------------------- */
// document.getElementById("searchForm").addEventListener("submit", function(event) {
//     event.preventDefault();
    
//     // Get the search query from the input field
//     var query = document.getElementById("searchInput").value;
    
//     // Perform the search (In this example, we just display the search query)
//     document.getElementById("searchResults").innerText = "You searched for: " + query;
//     });

function logout() {
    console.log("test");
    window.location.href = "Index.html";
}
/*-----------------------------------------------------------------------window--------------------------------------------------------------------------------------------------------------- */
function showHome() {
    window.location.href="homePage.html";
}

function showHolds() {
    window.location.href="memberHolds.html";
}

function showOverdue() {
    window.location.href="MemberOverdue.html"
}

function getUsername() {
            // Retrieve user data from local storage
            var userDataJSON = localStorage.getItem('userData');

            // Parse the JSON string back to an object
            var userData = JSON.parse(userDataJSON);
            
            // Access the username
            var username = userData.username;
            
            // Display the username
            var div = document.getElementById('usernameDisplay');

            div.textContent = "Welcome, " + username + "!";
}