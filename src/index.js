import $ from "jquery";
import "jquery-autocomplete";
import "jquery-autocomplete/jquery.autocomplete.css";
import "select2";
import "select2/dist/css/select2.css";
import "./test.css";


function initAutoComplete() {

    console.log("initAutoComplete");

    let tags = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL"
    ];

    $("#youCompleteMe").autocomplete({
        source: [tags]
    });
}

function initSelect2() {
    console.log("initSelect2");
    $(".select2Test").select2();
}


$(function () {
    console.log("Init ran");
    initAutoComplete();
    initSelect2();
});