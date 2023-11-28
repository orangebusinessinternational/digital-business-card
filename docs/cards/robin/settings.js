var name = "Robin De Keyser"
var responsibility = 'Experienced VP Communication Services | Strategy, Leader, Innovator, out of the box thinker'
var linkedIn = "https://www.linkedin.com/in/robin-de-keyser-9359a92/"
var mailto = "mailto:robin.dekeyser@orange.com"
var titles = [
    'Vice President',
    'Communication Services Europe',
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
