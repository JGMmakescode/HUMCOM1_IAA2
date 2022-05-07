function validateForm() {
    var x = document.forms["form1"]["fname"]["age"].value;
    if (x == "") {
        alert("Name and age must be filled out");
        return false;
    }
    var x = document.forms["form2"]["pnum"]["Eadd"]["Madd"].value;
    if (x == "") {
        alert("Phone number and email and mail address must be filled out");
        return false;
    }
    var x = document.forms["form3"]["pgram"]["IDN"]["Ylvl"]["Sect"].value;
    if (x == "") {
        alert("Phone number and email and mail address must be filled out");
        return false;
    }
}