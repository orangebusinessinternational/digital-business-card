var titles = [
    'Hyperautomation Practice Lead',
    'Orange Business',
]
var name = "Neha PRASAD"
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

var linkedinLink = document.getElementById("linkedinLink")
linkedinLink.href = "https://www.linkedin.com/in/neha-prasad-49555935"

var email = document.getElementById("locationLink")
email.href = "mailto:neha.prasad@orange.com"