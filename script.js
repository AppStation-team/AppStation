fetch('./about/about.txt')
    .then(response => response.text())
    .then(text => {
        let cleanedText = text
            .split('\n')
            .filter(line => line.trim() && !/^[= -]+$/.test(line.trim()))
            .join('\n');

        cleanedText = cleanedText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

        document.getElementById('textContent').innerHTML = cleanedText;
    })
    .catch(error => console.error('Error loading text file:', error));
