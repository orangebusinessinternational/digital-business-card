var name = "Katya SMIRNOVA"
var responsibility = 'Head of Data & Automation | International | Orange Business'
var linkedIn = "https://www.linkedin.com/in/katya-smirnova-509553106/"
var mailto = "mailto:ekaterina.smirnova@orange.com"
var titles = [
    'International Data & Automation',
    'International Zone',
    'Orange Business',
]


var titlesDiv = document.getElementsByClassName("jobTitlesDiv")[0]
for(var i=0; i<titles.length; i++) {
    var label = document.createElement("label")
    label.innerHTML = titles[i]
    titlesDiv.appendChild(label)
}

var fullname = document.getElementById("fullName")
var responsibiltyP = document.getElementById("responsibiltyP")
var linkedinLink = document.getElementById("linkedinLink")
var email = document.getElementById("locationLink")

fullname.innerHTML = name
responsibiltyP.innerHTML = responsibility
linkedinLink.href = linkedIn
email.href = mailto
