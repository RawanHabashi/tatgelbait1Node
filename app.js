//השותפות: רואן ו רואיה 
const fs = require('fs');
const path = require('path');

// פונקציה לקרוא שורות מקובץ ולהחזיר מספר שורות בהתאם לערך i
function appendToOutput(filePath, i) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const linesToWrite = fileContent.split('\n');
    return linesToWrite.slice(0, i);
}

// קריאה וכתיבה לפלט
function addTo() {
    let brr = [];
    for (let i = 1; i <= 10; i++) {
        const fileName = `file${i}.txt`;
        const filePath = path.join(__dirname, fileName);

        if (fs.existsSync(filePath)) {
            const lines = appendToOutput(filePath, i);
            brr = brr.concat(lines);
        }
    }

    fs.writeFileSync("output.txt", brr.join("\n"), "utf-8");
}

addTo();
