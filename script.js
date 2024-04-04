let modeBtn=document.querySelector("#mode");
let body=document.querySelector("body");
let currMode="light";

modeBtn.addEventListener("click",()=>{
    if(currMode==="light"){
        currMode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
   
    }
    else{
        currMode="light";
        body.classList.add("light");
        body.classList.remove("dark")
        
    }
})
document.addEventListener("DOMContentLoaded", function() {
    var modeButton = document.getElementById('mode');

    modeButton.addEventListener('click', function() {
        var iconSpan = modeButton.querySelector('span.material-symbols-outlined');
        
        if (iconSpan.textContent.trim() === "dark_mode") {
            iconSpan.textContent = "light_mode";
        } else {
            iconSpan.textContent = "dark_mode";
        }
    });
});
const themeMode = localStorage.getItem('themeMode');
const modeButton = document.getElementById('mode');

// Apply the stored theme mode
if (themeMode) {
    document.body.classList.toggle('dark-mode', themeMode === 'dark');
}

// Event listener for theme button click
modeButton.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');

    // Update the theme mode in localStorage
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('themeMode', isDarkMode ? 'dark' : 'light');
});
document.addEventListener('touchstart', function(event) {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    // Check if the touch event is outside the navbar toggle button and its associated dropdown
    if (!navbarToggler.contains(event.target) && !navbarCollapse.contains(event.target)) {
        // Reset the toggle button to its initial state
        // Example: Close the navbar if it's open
        // You can adjust this based on your specific requirements
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        }
    }
});