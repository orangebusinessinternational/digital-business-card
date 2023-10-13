var name = "Dheeraj Saxena"
var responsibility = 'Automation & Digital Business Consulting | Automation & RPA | International Consulting | Americas'
var linkedIn = "https://www.linkedin.com/in/dheerajdigitalautomation"
var mailto = "mailto:dheeraj.saxena@orange.com"
var titles = [
    'Digital Business Consultant',
    'International Consulting - Americas',
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
