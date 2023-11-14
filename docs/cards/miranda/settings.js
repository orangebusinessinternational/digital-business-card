var name = "Miranda Verneulen"
var responsibility = 'Strong conceptual strategist. Ability to process and reproduce complex issues to provide pragmatic business solutions'
var linkedIn = "https://www.linkedin.com/in/miranda-vermeulen-07355311/overlay/about-this-profile/"
var mailto = "mailto:miranda.vermeulen@orange.com"
var titles = [
    'Strategic Business Liaison',
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
