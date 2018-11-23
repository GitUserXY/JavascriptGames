const NumberZufallsZahlenDataFieldName = "NumberZufallsZahlen";
const FormGeneratedFieldsName = "formGenerierteDatenfelder";
const btnDatenFelderErstellen = "btnDatenFelderErstellen";
const inpZufallsZahlVon = "inpZufallVon";
const inpZufallsZahlBis = "inpZufallBis";
const inpZiehungen = "inpZiehungen";
const btnStarten ="btnStarten";

//Auf diese Weise registrieren, weil andere das Event schon abonniert haben könnten
document.addEventListener("DOMContentLoaded", function() {DOMContentLoaded();});

function DOMContentLoaded()
{
    var datenfelderErstellen = document.getElementById(btnDatenFelderErstellen);
    datenfelderErstellen.onclick = ErzeugeDatenfelder;
    document.getElementById(btnStarten).onclick = ZiehungStarten;
}

function ZiehungStarten()
{
    var ok = Valdidateinput
}

function ErzeugeDatenfelder() 
{
    var form = document.getElementById(FormGeneratedFieldsName);
    //Zunächst mal alle Kinder löschen
    while (form.firstChild) 
    {
        form.removeChild(form.firstChild);
    }

    var numberFields = document.getElementById(NumberZufallsZahlenDataFieldName);
    var numberDatafields = numberFields.value;
    if (numberDatafields.length > 0)
    {
        var html = "";
        for(i=1; i <= numberDatafields; i++)
        {
            html += "<label>Element" + i +"</label>";
            html += "<input type = \"number\"></input>"; 
            html += "<br>";
        }
        form.innerHTML = html;
        var hugo = "";
    }
}
