 function calculateArea() {
    // Get the radius from the user using the prompt() function
    let radius = prompt("Enter the radius of the circle:");

    // Parse the input to a floating-point number
    radius = parseFloat(radius);

    // Check if the input is a valid positive number
    if (!isNaN(radius) && radius > 0) {
        // Calculate the area of the circle (rounded to two decimal places)
        const area = Math.PI * Math.pow(radius, 2);
        const roundedArea = area.toFixed(2);

        // Display the result to the user
        alert(`The area of the circle with radius ${radius} is ${roundedArea}`);
    } else {
        // Display an error message for invalid input
        alert("Invalid input. Please enter a valid positive number for the radius.");
    }
}

// Call the function to start the program
calculateArea();
