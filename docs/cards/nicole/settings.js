var name = "Nicole Limbocker"
var responsibility = ''
var linkedIn = "https://www.linkedin.com/in/nicole-limbocker-a358b437/"
var mailto = "mailto:nicole.limbocker@orange.com"
var titles = [
    'Sales Director',
    'West America',
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
