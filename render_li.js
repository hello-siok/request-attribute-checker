// Find the parent element where you want to append the new element
var container = document.getElementById('list-item');
var parent = "";
var jason = getJason({});

// Create a new element
for (row of jason){
    attribute = row['attribute'];
    required  = row["Required"];
    id        = row["id"];

    // add title row = parent object
    if (parent != row["parent"]){
        parent = row["parent"];
        //create new element
        var newElement = document.createElement('li');
        //add attribute
        newElement.id = "title";
        newElement.textContent = parent;
        // Append the new element to the parent element
        container.appendChild(newElement);
    }

    // add <li><input></li> row
    var newElement = document.createElement('li');
    var input = document.createElement('input');

    // add <input> attribute
    input.type = "checkbox"
    input.classList.add(id);
    if (required == 1){input.setAttribute("checked", "checked");}
    newElement.append(input);

    //add text
    var span = document.createElement('span');
    span.textContent = " " + attribute;
    newElement.append(span);

    container.appendChild(newElement);
}
