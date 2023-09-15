let oLastModif = new Date(document.lastModified);
let month = oLastModif.getMonth()+1;
document.getElementById('lastModified').innerHTML = "Last modified on " + month + "/" + oLastModif.getDate() + "/" + oLastModif.getFullYear();