
 var users = [
    { email: "joro@gmail.com", password: "joro" },
    { email: "dinko@gmail.com", password: "dinko" }
  ];

  // Function to handle form submission
  function login() {
    console.log("a");
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Check if the email and password match any user in the array
    var foundUser = users.find(function(user) {
      return user.email === email && user.password === password;
    });

    if (foundUser) {
      alert("Login successful!");
      // You can redirect the user to another page or perform other actions here
    } else {
      alert("Incorrect email or password.");
    }

    // Prevent form submission
    return false;
  }

  // Function to validate email address
function isValidEmail(email) {
    // Regular expression for email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Function to validate password
  function isValidPassword(password) {
    // Password length should be at least 8 characters
    return password.length >= 8;
  }
  
  // Function to validate confirm password
  function isMatchPassword(password, confirmPassword) {
    return password === confirmPassword;
  }

  function writeUserDataToFile(username, email) {
    // Create a new file entry
    const file = 'data.txt';
    var fileEntry = new Blob(["Username: " + username + "\nEmail: " + email + "\n"], { type: "text/plain" });
    writeToFile(file, fileEntry);
}
  
  // Function to handle registration form submission
  function handleRegistration(event) {
    event.preventDefault();
  
    // Get form inputs
    var username = document.getElementById("username-reg").value.trim();
    console.log(username);
    var email = document.getElementById("email-reg").value.trim();
    console.log(email);
    var password = document.getElementById("password-reg").value;
    console.log(password);
    var confirmPassword = document.getElementById("confirmPassword-reg").value;
    console.log(password);
  
    // Validation checks
    if (username === "" || email === "" || password === "" || confirmPassword === "") {
      alert("Please fill in all fields.");
      return;
    }
  
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    if (!isValidPassword(password)) {
      alert("Password must be at least 8 characters long.");
      return;
    }
  
    if (!isMatchPassword(password, confirmPassword)) {
      alert("Passwords do not match.");
      return;
    }
  
    // Registration successful
    alert("Registration successful!\nUsername: " + username + "\nEmail: " + email);
  
     // Write user data to file
    writeUserDataToFile(username, email);
  }

  document.getElementById("registrationForm").addEventListener("submit", handleRegistration);


  // Add submit event listener to the form
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    login(); // Call the login function
  });

  // JavaScript code to handle showing/hiding forms
  document.getElementById("showRegistration").addEventListener("click", function(event) {
    localStorage.setItem("registered", "true");
    event.preventDefault();
    document.getElementById("loginContainer").style.display = "none";
    document.getElementById("registrationContainer").style.display = "block";
  });

  document.getElementById("showLogin").addEventListener("click", function(event) {
    localStorage.setItem("registered", "false");
    event.preventDefault();
    document.getElementById("loginContainer").style.display = "flex";
    document.getElementById("registrationContainer").style.display = "none";
  });



 // Function to write data to a file
 function writeToFile(filename, data) {
   fs.writeFile(filename, data, (err) => {
     if (err) {
       console.error('Error writing to file:', err);
     } else {
       console.log('Data written to file:', filename);
     }
   });
 }
 
 // Function to read data from a file
 function readFromFile(filename) {
   fs.readFile(filename, 'utf8', (err, data) => {
     if (err) {
       console.error('Error reading from file:', err);
     } else {
       console.log('Data read from file:', filename);
       console.log('File content:', data);
     }
   });
 }