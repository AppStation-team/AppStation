let apkUrl = "./apk%20file/HappyPocket.apk"; // Encode space properly

// Load and clean text file content
fetch('./about/about.txt')
    .then(response => response.text())
    .then(text => {
        // Remove lines with only '=' or '-' characters
        let cleanedText = text
            .split('\n')
            .filter(line => !/^[= -]+$/.test(line.trim()))
            .join('\n');

        // Convert **bold** to <strong> for proper formatting
        cleanedText = cleanedText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

        // Set content with HTML parsing
        document.getElementById('textContent').innerHTML = cleanedText;
    })
    .catch(error => console.error('Error loading text file:', error));

// APK Install Button Click Event
document.getElementById("installApk").addEventListener("click", function () {
    let apkUrl = "./apk%20file/HappyPocket.apk"; // Fix space issue

    // Create a hidden <a> element to force download
    let link = document.createElement("a");
    link.href = apkUrl;
    link.download = "HappyPocket.apk"; // Suggest filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Optional: Show an alert to guide the user
    alert("Downloading APK... After download, open the file to install.");
});
