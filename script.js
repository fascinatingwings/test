$(document).ready(function () {
    $("#glyphicon glyphicon-envelope").hover(function () {
        $(this).css("font-size", "50px");
    }, function () {
        $(this).css("default");
    }); //pseudo-class 1.5em, normal?/true?/full-class
});
$(document).ready(function () {
    $("#glyphicon glyphicon-fire").hover(function () {
        $(this).css("font-size", "75px");
    }, function () {
        $(this).css("default");
    });
});
$(document).ready(function () {
    $(".jobs").hover(function () {
        $(this).css("font-size", "100px");
    }, function () {
        $(this).css("default");
    });
});
function loadRepo() {
    const gitHub = new XMLHttpRequest();
    gitHub.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            results = JSON.parse(this.responseText);
            for (var i = 0; i < results.length; i++) {
                console.log(results[i].name);

                let ul = document.getElementById("gitHubRepo");
                let li = document.createElement("li");
                let a = document.createElement("a");

                li.appendChild(document.createTextNode(results[i].name));

                a.appendChild(li);
                a.setAttribute("href", results[i].html_url);
                ul.appendChild(a);
            }
        }
    }
    gitHub.open("GET", "https://api.github.com/users/fascinatingwings/repos", true);
    gitHub.send();
}
// let gitHub = new XMLHttpRequest();
// gitHub.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         let repository = JSON.parse(this.responseText);
//         document.getElementById("gitHubRepo") = repository.gitHub;
//     }
// };
// gitHub.open("GET", "https://api.github.com/users/fascinatingwings/repos", true);
// gitHub.send();