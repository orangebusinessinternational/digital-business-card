var titles = [
    'IB Automation',
    'Intl Business & Sales Ops',
    'International Business',
    'Orange Business Services'
]
var name = "Mona Ashour"
var responsibilty = "Responsible for managing International Automation team"

var titlesDiv = document.getElementsByClassName("jobTitlesDiv")[0]
for(var i=0; i<titles.length; i++) {
    var label = document.createElement("label")
    label.innerHTML = titles[i]
    titlesDiv.appendChild(label)
}

var fullname = document.getElementById("fullName")
fullname.innerHTML = name

var responsibiltyP = document.getElementById("responsibiltyP")
responsibiltyP.innerHTML = responsibilty
