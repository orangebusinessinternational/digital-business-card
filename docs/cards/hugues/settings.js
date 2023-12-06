var name = "Hugues Foulon"
var responsibility = ''
var linkedIn = "https://www.linkedin.com/in/hugues-foulon-3a4202b/"
var mailto = "mailto:hugues.foulon@orange.com"
var titles = [
    'Executive Director of Strategy and Cybersecurity',
    'Orange Business',
]
var folderName = "hugues"

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