var name = "Nadine FOULON-BELKACÉMI"
var responsibility = ''
var linkedIn = "https://www.linkedin.com/in/nadine-foulon-belkac%C3%A9mi/"
var mailto = "mailto:nadine.foulonbelkacemi@orange.com"
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
