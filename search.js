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

    // check if the length of the injectedArray (allStudents array is empty)
    if (injectedArray.length === 0) {
        // when there is no element in the array, inject an <li> no matching names found!
        listContainerElem.innerHTML = "<li>No matching names found</li>";
        return; // terminate the code block
    }

    // iterate over the allStudents array
    injectedArray.forEach((name) => {
        // create a new list item (li)
        const listElem = document.createElement("li");
        // after creating an li, assign the name of each student as the text content
        listElem.textContent = name;
        // append(add to) / add the <li> you created to the container (ul)
        listContainerElem.appendChild(listElem);
    })
}


// create function to handle search logic
function handleSearch(event) {
    // grab user's search input
    // trim empty spaces and covert to a lower case
    const userSearchQuery = event.target.value.trim().toLowerCase();

    if (userSearchQuery.length > 0) {
        // filter the allStudents array, based on the user's input query
        const filterBySearch = allStudents.filter((student) => {
            return student.toLowerCase().includes(userSearchQuery)
        });

        // display the filtered names
        displayResults(filterBySearch);
    } else {
        // if the input is empty, display all the names
        displayResults(allStudents);
    }
}

// add an eventlistener to the input box
searchInputElem.addEventListener("input", handleSearch);

displayResults(allStudents);