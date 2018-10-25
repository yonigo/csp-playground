document.getElementById('result').innerHTML = 'Main Script Works';

var childScript = document.createElement('script');
childScript.type = 'text/javascript';
childScript.appendChild(document.createTextNode(
    "var p = document.createElement('p');" + 
    "p.textContent = 'Child Script Works';" +
    "document.getElementById('result').appendChild(p);"
));

document.head.appendChild(childScript);