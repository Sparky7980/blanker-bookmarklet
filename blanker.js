function openBlankPageWithCode() {
    // Prompt the user for the website they want to open
    var website = prompt("What website do you want to open in a new tab?");

    // Open a new window or tab with about:blank
    var newWindow = window.open('about:blank', '_blank');

    // Check if the new window is successfully opened
    if (newWindow) {
        // Write custom code to the new window
        newWindow.document.write('<html><head><link rel="icon" type="image/png" href="/imresizer-1706741917427.jpg"/><title>' + website + '</title></head><body>');
        newWindow.document.write('<iframe allowfullscreen src="' + website + '" style="position:absolute; top:0px; left:0px; width:100%; height:100%; border: none; overflow: hidden;"></iframe>');
        newWindow.document.write('');
        newWindow.document.close(); // Close the document for writing
    } else {
        alert('Unable to open a new window. Turn on popups.');
    }
}
