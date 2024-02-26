function generateCode() {
    var letters = 'АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ';
    var digits = '0123456789';
    var code = '';
    
    for (var i = 0; i < 2; i++) {
        code += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    
    for (var j = 0; j < 2; j++) {
        code += digits.charAt(Math.floor(Math.random() * digits.length));
    }
    
    return code;
}

function generateCodeWithInterval() {
    setInterval(function() {
        var code = generateCode();
        var newH2 = document.createElement('h2');
        newH2.innerHTML = code;
        document.body.appendChild(newH2);
    }, 3000);
}

generateCodeWithInterval();