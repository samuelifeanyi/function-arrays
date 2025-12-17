const webStudents = ["Conquered", "Ifeanyi", "Amadi", "Emmanuel", "Joshua", "Precious"];
const designStudents = ["Nk", "Bob", "Joy", "Khloe", "Kunle"];
const allStudents = webStudents.concat(designStudents);

// grab the html elements
const searchInputElem = document.getElementById("searchInput");
const searchBtnElem = document.getElementById("btn");
const listContainerElem = document.getElementById("list-container")


function displayResults(injectedArray) {
    // clear previous results
    listContainerElem.innerHTML = "";
    if(injectedArray.length === 0) {
        listContainerElem.innerHTML = "<li>No matching names found</li>";
        return;
    }






// create function to handle search logic
function handleSearch() {
    // grab user's search input
    // trim empty spaces and covert to a lower case
    const searchQuery = event.target.value.trim().toLowerCase();

    if(searchQuery.length > 0) {
        // filter the allStudents array, based on the user's input query
        const filterBySearch = allStudents.filter((student) => {
            return allStudents.toLowerCase().includes(searchQuery)
        });

        // display the filtered names
        displayResults(filterBySearch);
    } else {
        // if the input is empty, display all the names
        displayResults(allStudents);
    }
}

// add an eventlistener to the input box
searchBtnElem.addEventListener("click", handleSearch);