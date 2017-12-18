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

    // add callback functions for search menu
    $('#binding-search-text-input').on('input', updateSearchTabList);
    $('#binding-search-sort-select').on('change', updateSearchTabList);

    // add callback functions for browse menu
    $('#binding-browse-end-checkbox').on('change', updateBrowseTabList);
    $('#binding-browse-level-select').on('change', updateBrowseTabList);

    // initialize fuzzy set of binder name matches
    fuzzyBinderSet = FuzzySet();
    db.binds.forEach(function(bind) {
        fuzzyBinderSet.add(bind.name);
    });

    // populate list in browse and search tabs
    updateSearchTabList();
    updateBrowseTabList();
    
});

// function to update the list of elements in the search tab
function updateSearchTabList() {

    // clear the searching list
    $('#binding-search-list').empty();

    // get the search string from the search input
    let str = $('#binding-search-text-input').val();
    if (str == "" || str == null) return;

    // perform a fuzzy search with the search string
    let res = fuzzyBinderSet.get(str);
    if (res == null) return;
    
    // get all of the binds that match from the binds database
    let binds = [];
    res.forEach(function(pair) {

        // check that the minimum pairing is met
        if (pair[0] < 0.40) return;

        // get the bind by obtaining its name and id
        let id = db.getIdByName(pair[1]);
        let bind = db.getBindById(id);
        
        // add the bind to the list of valid binds if it was found
        if (id != null) binds.push(bind);

    });

    // sort the elements based on the sort criteria
    let criteria = $('#binding-search-sort-select').val();
    binds.sort(function(bind1, bind2) {

        // handle if sort criteria is 0 (relevancy)
        if (criteria == 0) {
            return 1;
        }

        // handle if sort criteria is 1 (bind level)
        else if (criteria == 1) {
            return bind1.level > bind2.level;
        }

        // handle if sort criteria is 2 (alphabetical)
        else {
            return bind1.name > bind2.name;
        }

    });
    

    // iterate through all the searched binds and add them to the search list
    binds.forEach(function(bind) {

        // format the bind as a list item
        let element = bindToListElement(bind);
        $('#binding-search-list').append(element);

    });

}

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
        let element = bindToListElement(bind);
        $('#binding-browse-list').append(element);

    });

}

// function to translate the bind to a list item for search/browse
function bindToListElement(bind) {

    // format the element's base characteristics
    let element = '<div class="item hoverable"><div class="content" onclick="loadBind(' + bind.id + ');">';

    // determine whether the bind is an end bind or not
    if (bind.end) {
        element += '<div class="end-bind header">' + bind.name + '</div>';
    } else {
        element += '<div class="bind header">' + bind.name + '</div>';
    }

    // tack on the level description for the bind
    element += '<div class="description">Level ' + bind.level + ' Bind</div></div></div>';

    // return the constructed element
    return element;

}

// function to load the bind into the center region by its id
function loadBind(id) {

    // load the bind from the binds database
    let base = db.getBindById(id);
    if (base == null) return;

    // call the population function on the base element
    function populate(bind) {

        // re-build the bind object to prevent errors
        let ret = {
            id: bind.id,
            name: bind.name,
            level: bind.level,
            cost: bind.cost,
            end: bind.end,
        };

        // go through all of the requirements and add then to the new object
        let arr = [];
        for (let i = 0; i < bind.requirements.length; i ++) {
            let b = db.getBindById(bind.requirements[i]);
            arr.push(populate(b));
        }
        
        // return the newly constructed "ret" object
        ret.requirements = arr;
        return ret;

    };

    // populate the base 
    base = populate(base);

    // translate the bind tree to a DOM element

}