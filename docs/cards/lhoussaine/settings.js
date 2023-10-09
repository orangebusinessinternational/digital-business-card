var name = "Lhoussaine BOUAMRAOUI"
var responsibility = 'Oversees Global Delivery and Operations  as Site Leader of Cairo Major Customer Center'
var linkedIn = "https://www.linkedin.com/in/lhoussaine-bouamraoui-3735364b/"
var mailto = "mailto:lhoussaine.bouamraoui@orange.com"
var titles = [
    'Head of CS&O Regional Ops'
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
