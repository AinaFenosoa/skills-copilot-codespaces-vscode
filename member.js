function skillsMember() {
    var member = document.getElementById("member").value;
    var skills = document.getElementById("skills").value;
    var skillsArray = skills.split(", ");
    var memberSkills = members[member].skills;
    for (var i = 0; i < skillsArray.length; i++) {
        if (memberSkills.indexOf(skillsArray[i]) == -1) {
            memberSkills.push(skillsArray[i]);
        }
    }
    document.getElementById("member").value = "";
    document.getElementById("skills").value = "";
    return memberSkills;
}