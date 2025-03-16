// Load and clean text file content
fetch('./about/about.txt')
    .then(response => response.text())
    .then(text => {
        // Remove empty lines and lines with only '=' or '-'
        let cleanedText = text
            .split('\n')
            .filter(line => line.trim() && !/^[= -]+$/.test(line.trim()))
            .join('\n');

        // Convert **bold** to <strong> for proper formatting
        cleanedText = cleanedText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

        // Set content with HTML parsing
        document.getElementById('textContent').innerHTML = cleanedText;
    })
    .catch(error => console.error('Error loading text file:', error));

// APK Install Button Click Event
document.getElementById("installApk").addEventListener("click", function () {
    let apkUrl = "https://raw.githubusercontent.com/AppStation-team/AppStation/main/apk%20file/HappyPocket.apk";

    // Create a hidden <a> element to force download
    let link = document.createElement("a");
    link.href = apkUrl;
    link.download = "HappyPocket.apk"; // Suggested filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Show a user-friendly alert
    alert("Downloading APK... After download, open the file to install.");
});
