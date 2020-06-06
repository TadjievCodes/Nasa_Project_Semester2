//'use strict';
/*
// Test for local storage
function supportsLocalStorage() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
}

*/
/*
// Retrieve searches from Local Storage, return an array
function getRecentSearches() {
    nasaDays = localStorage.getItem('recentSearches');
    if (nasaDays) { // if equals true
        return JSON.parse(nasaDays);
    }
    return []; // else return empty array
}

// Validate and save strings to store of past searches
function saveSearchString(str) {
    nasaDays = getRecentSearches();
    if (nasaDays.indexOf(str) > -1 || !str) {
        return false;
    }
    nasaDays.push(str);
    localStorage.setItem('recentSearches', JSON.stringify(nasaDays));
    return true;
}

// Clear out searches
function removeSearches() {
    localStorage.removeItem('recentSearches');
}

/*
// Create an li, given string contents, append to the supplied ul
function appendListItem(listElement, string) {
    var listItemElement = document.createElement('LI');
    listItemElement.innerHTML = string;
    listElement.appendChild(listItemElement);
}

// Empty the contents of an element (ul)
function clearList(listElement) {
    listElement.innerHTML = '';
}
*/

/*

window.onload = function() {
    // Make sure Local Storage exists before trying to use it
    if (supportsLocalStorage()) {
        // Get references to DOM elements
        var searchForm = document.getElementById('searchForm');
        var searchBar = document.getElementById('searchBar');
        var recentSearchList = document.getElementById('recentSearchList');
        var clearButton = document.getElementById('clearStorage');

        // Initialize display list
        var recentSearches = getRecentSearches();
        recentSearches.forEach(function(searchString) {
            appendListItem(recentSearchList, searchString);
        });

        /*
        // Set event handlers
        searchForm.addEventListener('submit', function(event) {
            var searchString = searchBar.value;
            if (saveSearchString(searchString)) { // if storage includes this

                //appendListItem(recentSearchList, searchString);
            }
        });
        */
/*
        clearButton.addEventListener('click', function(event) {
            removeSearches();
            clearList(recentSearchList);
        });
    }
};

*/