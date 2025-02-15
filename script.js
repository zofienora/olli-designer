// Function to change the background color when navigation item is clicked
function navigationBackground() {
    const links = document.querySelectorAll(".link__navigation"); // Select all links
    const items = document.querySelectorAll(".item__navigation"); // Select all navigation items

    links.forEach((link, index) => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent the default link behavior
            items.forEach(item => item.style.backgroundColor = "transparent"); // Reset all backgrounds
            items[index].style.backgroundColor = "white"; // Change background of clicked item
        });
    });
}

// Call the function
navigationBackground();


/* 	
✅ .forEach() → Loops through each navigation link.
✅ link.addEventListener("click", function(event) { ... }) → Adds a click event to each link.
✅ event.preventDefault(); → Prevents the link from reloading the page.
✅ items.forEach(item => item.style.backgroundColor = "transparent"); → Resets all navigation item backgrounds before setting a new one.
✅ items[index].style.backgroundColor = "white"; → Uses the index from .forEach() to match the clicked link with its corresponding navigation item. 
*/

//-----------------------------------------------------------------------------------------