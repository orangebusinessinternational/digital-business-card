var name = "Kristof Symons"
var responsibility = 'Passionate and Experienced International Sales, Sourcing and Digital Services Leader'
var linkedIn = "https://www.linkedin.com/in/kristof-symons-b5343a/"
var mailto = "mailto:kristof.symons@orange.com"
var titles = [
    'CEO International',
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
