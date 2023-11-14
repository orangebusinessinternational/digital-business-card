var name = "Vincent Garnier"
var responsibility = 'Connected to the digital ecosystem, innovation and business development'
var linkedIn = "https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAALyJCUBoqxCxYQuyTuesMp2asYdP7aVWog&keywords=vincent%20garnier&origin=RICH_QUERY_SUGGESTION&position=0&searchId=afb22ac7-f183-49a9-a556-e92ea25cf7ea&sid=K_P&spellCorrectionEnabled=false"
var mailto = "mailto:vincent1.garnier@orange.com"
var titles = [
    'Head of Data-AI',
    'Chief Data Officer',
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
