var name = "Aliette MOUSNIER-LOMPRE"
var responsibility = ''
var linkedIn = "https://www.linkedin.com/in/aliette-mousnier-lompr%C3%A9-6787114/"
var mailto = "mailto:aliette.mousnierlompre@orange.com"
var titles = [
    'Top Management',
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
