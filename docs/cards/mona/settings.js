var name = "Mona ASHOUR"
var responsibilty = 'Head of International Digital and Automation with 20+ years of global IT experience, excels in Agile Project Management, Business Analysis, and People Management. She fosters vital partnerships, supports digital transformation, and adds a creative flair, aligning designs with brand identity'
var linkedIn = "https://eg.linkedin.com/in/mona-ashour-61570522"
var mailto = "mailto:mona.ashour@orange.com"
var titles = [
    'International Automation Head',
    'International Zone',
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
responsibiltyP.innerHTML = responsibilty
linkedinLink.href = linkedIn
email.href = mailto
