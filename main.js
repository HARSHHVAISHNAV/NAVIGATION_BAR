document.addEventListener("DOMContentLoaded", function() {
    // Find the button element by its id
    var redirectButton = document.getElementById("itemb");
  
    // Add a click event listener to the button
    redirectButton.addEventListener("click", function() {
        // Redirect the user to another page within the same project
        window.location.href = "../about.html"; // Replace "another-page.html" with the path to your desired page
    });
    var redirectButtona = document.getElementById("itemc");
  
    // Add a click event listener to the button
    redirectButtona.addEventListener("click", function() {
        // Redirect the user to another page within the same project
        window.location.href = "../service.html"; // Replace "another-page.html" with the path to your desired page
    });
    var redirectButtonb = document.getElementById("itemd");
  
    // Add a click event listener to the button
    redirectButtonb.addEventListener("click", function() {
        // Redirect the user to another page within the same project
        window.location.href = "../contact.html"; // Replace "another-page.html" with the path to your desired page
    });
    var redirectButtonc = document.getElementById("itema");
  
    // Add a click event listener to the button
    redirectButtonc.addEventListener("click", function() {
        // Redirect the user to another page within the same project
        window.location.href = "../main.html"; // Replace "another-page.html" with the path to your desired page
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.navmenu button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove the 'active' class from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));
            // Add the 'active' class to the clicked button
            this.classList.add('active');
            
            // Scroll to the corresponding section
            const sectionId = this.id.substring(4).toLowerCase(); // Get the section id
            document.getElementById(sectionId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
