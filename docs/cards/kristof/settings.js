var name = "Kristof Symons"
var responsibility = 'Proven competencies in sales, sourcing, professional and integration services, operations and profitability programs in the digital age'
var linkedIn = "https://www.linkedin.com/in/kristof-symons-b5343a/overlay/about-this-profile/"
var mailto = "mailto:kristof.symons@orange.com"
var titles = [
    'Executive Vice President',
    'International Business',
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
