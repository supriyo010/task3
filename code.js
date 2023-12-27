document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    document.getElementById('submitBtn').innerHTML = 'Loading...';
    document.getElementById('submitBtn').disabled = true;

    // Simulate a 2-second loading state
    setTimeout(function() {
        document.getElementById('submitBtn').innerHTML = 'Submit';
        document.getElementById('submitBtn').disabled = false;
    }, 2000);
});
