var name = "Mona ASHOUR"
var responsibility = 'A leader with over two decades of global IT expertise, catalyzing international digital transformations to enhance efficiency and infuse innovative creativity'
var linkedIn = "https://eg.linkedin.com/in/mona-ashour-61570522"
var mailto = "mailto:mona.ashour@orange.com"
var titles = [
    'International Automation Head',
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
