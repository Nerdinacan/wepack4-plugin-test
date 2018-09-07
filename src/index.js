import $ from "jquery";
import "jquery-autocomplete";
import "jquery-autocomplete/jquery.autocomplete.css";
import "./test.css";

const tags = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL"
];

$(function () {
    $("#youCompleteMe").autocomplete({
        source: [tags]
    });
});
