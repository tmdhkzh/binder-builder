"use strict"

// variable reference to the fuzzyset matcher
var fuzzyBinderSet;

// loaded window callback
$(window).load(function() {

    // initialize semantic ui behaviors
    $('.menu .item').tab();
    $('.ui.checkbox').checkbox();
    $('.ui.dropdown').dropdown({
        maxSelections: 3
    });

    // add callback functions for browse menu
    $('#binding-browse-end-checkbox').on('change', updateBrowseTabList);
    $('#binding-browse-level-select').on('change', updateBrowseTabList);

    // initialize fuzzy set of binder name matches
    fuzzyBinderSet = FuzzySet();
    db.binds.forEach(function(bind) {
        fuzzyBinderSet.add(bind.name);
    });

    // populate list in browse window
    updateBrowseTabList();
    
});

// function to update the list of elements in the browse tab
function updateBrowseTabList() {

    // clear the browsing list
    $('#binding-browse-list').empty();

    // get the browse tab options
    let onlyEnds = $('#binding-browse-end-checkbox').prop('checked');
    let levels = $('#binding-browse-level-select').val();

    // get all of the elements from the database
    db.binds.forEach(function(bind) {

        // check if the level is valid
        if (levels != null) {
            if (levels.indexOf(bind.level.toString()) == -1) return;
        }

        // check if only end binds are requested
        if (onlyEnds) {
            if (!bind.end) return;
        }

        // format the bind as a list item
        let element = '<div class="item">' +
                        '<div class="content">' +
                          '<a class="header">' + bind.name + '</a>' +
                          '<div class="description">Level ' + bind.level + ' Bind</div>' +
                        '</div>';
                      '</div>';
        
        // add the item to the list
        $('#binding-browse-list').append(element);

    });

}
