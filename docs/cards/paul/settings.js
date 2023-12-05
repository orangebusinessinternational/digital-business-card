var name = "Paul Joyce"
var responsibility = ''
var linkedIn = "https://www.linkedin.com/in/paul-joyce-3418ab7/"
var mailto = "mailto:paul.joyce@orange.com"
var titles = [
    'Retired Global IT and Telecom Executive',
    'Orange Business',
]
var folderName = "paul"

var lightMode = `https://orangebusinessinternational.github.io/digital-business-card/cards/${folderName}/light.pdf`
var darkMode = `https://orangebusinessinternational.github.io/digital-business-card/cards/${folderName}/dark.pdf`
var vcf = `https://orangebusinessinternational.github.io/digital-business-card/cards/${folderName}/contacts.vcf`
var qr = `https://raw.githubusercontent.com/orangebusinessinternational/digital-business-card/main/docs/cards/${folderName}/qr.jpg`


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

var lightModeLink = document.getElementById("toLight")
var darkModeLink = document.getElementById("toDark")
var vcfLink = document.getElementById("vcf")
var qrLink = document.getElementById("qr")

fullname.innerHTML = name
responsibiltyP.innerHTML = responsibility
linkedinLink.href = linkedIn
email.href = mailto

if (lightModeLink){
    lightModeLink.href = lightMode
}
if (darkModeLink){
    darkModeLink.href = darkMode
}
vcfLink.href = vcf
qrLink.href = qr