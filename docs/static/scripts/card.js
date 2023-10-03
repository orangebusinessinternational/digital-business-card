var titles = [
    'Managing Consultant - RPA'
    'Intl Professional Svcs'
    'Intl Sales'
    'International Business'
    'Orange Business Services'
]
var name = "Neha Prasad"
var responsibilty = 'Global Hyperautomation Practice Lead I Value Driven Digital Transformation I Business Innovation & Automation Services'

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
