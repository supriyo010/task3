document.getElementById('submitBtn').addEventListener('click', async function() {
    // Disable the button and input
    document.getElementById('submitBtn').innerHTML = 'Loading...';
    document.getElementById('submitBtn').disabled = true;
    document.getElementById('username').disabled = true;

    try {
        // Simulate a 2-second loading state using a delay
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Reset button and input state
        document.getElementById('submitBtn').innerHTML = 'Submit';
        document.getElementById('submitBtn').disabled = true;
        document.getElementById('username').disabled = true;

        // You can add code here to handle the form submission using AJAX or any other technique
        // Example: const response = await fetch('your-api-endpoint', { method: 'POST', body: formData });
        // Handle the response as needed
    } catch (error) {
        console.error('An error occurred:', error);
    }
});