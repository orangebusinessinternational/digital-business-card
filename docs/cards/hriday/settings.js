var name = "Hriday RAVINDRANATH"
var responsibility = ''
var linkedIn = "https://in.linkedin.com/in/hriday-ravindranath-ab10272"
var mailto = "mailto:hriday.ravindranath@orange.com"
var titles = [
    'Chief Technology Information Office (CTIO)',
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
