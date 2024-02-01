function openBlankPageWithCode() {
    // Prompt the user for the website they want to open
    var website = prompt("What website do you want to open in a new tab?");
function openBlankPageWithCode() {
    // Prompt the user for the website they want to open
    var website = prompt("Enter the website URL you want to open in a new tab (e.g., https://example.com)");

    if (website) {
        // Check if the URL starts with http:// or https://
        if (!website.startsWith('http://') && !website.startsWith('https://')) {
            // Prepend http:// to the URL
            website = 'http://' + website;
        }

        // Create a new iframe element
        var iframe = document.createElement('iframe');
        iframe.src = website;
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = 'none';

        // Append the iframe to the current document's body
        document.body.appendChild(iframe);
    } else {
        alert('Invalid website URL.');
    }
}
openBlankPageWithCode()
