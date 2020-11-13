import "./materialize";
import "./pages"
import "./nav";
import "../css/materialize.css";
import loadPage from "./pages";
import {getAllTeams, getTeams} from "./api";
//babel async error fix :)
import 'regenerator-runtime/runtime'
import {tampilsemuafav} from "./model";
import {getall} from "./db";

// Load page content
var page = window.location.hash.split('?')[0].substr(1);
if (page == "") page = "home";
loadPage(page);

if (page == "team") {
        getTeams()
}
if (page == 'favclub'){
    tampilsemuafav()
}
if (page == "allclub") {
    getAllTeams()
}

console.log(page)
//agar semua link dapat bekerja
window.onhashchange = function () {
    var page = window.location.hash.split('?')[0].substr(1);
    if (page == "") page = "home";
    loadPage(page);

    if (page == "team") {
            getTeams()
    }
    if (page == 'favclub'){
        tampilsemuafav()
    }
    if (page == "allclub") {
        getAllTeams()
    }
}