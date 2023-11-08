var name = "Sebastien Vanhoutte"
var responsibility = ''
var linkedIn = "https://www.linkedin.com/in/sebastien-vanhoutte-19b15b17/"
var mailto = "mailto:sebastien.vanhoutte@orange.com"
var titles = [
    'Head of Consulting, AME',
    'Americas Business Management',
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
