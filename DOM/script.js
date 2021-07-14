//Recursive function to handle properties within properties
const HandleSubs = function (element, property, properties)
{
    for (key in properties)
    {
        if (typeof (properties[key]) == "object" && properties[key][0] == undefined)
        {
            HandleSubs(element, element[key], properties[key]);
        }
        else property[key] = properties[key];
    }
}

//Makes a new element, adds it to the parent, and adds all specified properties and event listeners
const AddElement = function (type, parent, properties, eventListeners)
{
    let NewElement = document.createElement(type);

    HandleSubs(NewElement, NewElement, properties);

    for (key in eventListeners)
    {
        NewElement.addEventListener(key, eventListeners[key]);
    }

    if (parent) parent.appendChild(NewElement);

    return NewElement;
};
//Applies properties and event listeners to an element
const HandleElement = function (element, properties, eventListeners)
{

    HandleSubs(element, element, properties);

    for (key in eventListeners)
    {
        element.addEventListener(key, eventListeners[key]);
    }

    return element;
};
//Returns a random hexadecimal color
const RandomColor = function ()
{
    // 16777215 is the highest hex number used in colors
    return "#" + (Math.round(Math.random() * 16777215).toString(16));
};

let color = "";

AddElement('button', document.body, {
    textContent: "Click me!"
}, {
    click: function ()
    {
        alert("Hello! I've been clicked!");
    }
});

AddElement('br', document.body);
AddElement('input', document.body, {
    type: "text",
    id: "myInput"
});
AddElement('button', document.body, {
    textContent: "Click me too!"
}, {
    click: function ()
    {
        alert(document.getElementById("myInput").value);
    }
});

HandleElement(document.getElementById("theDiv"), {
    style: {
        width: "100px",
        height: "100px",
        backgroundColor: RandomColor()
    }
}, {
    mouseover: function () {
        this.style.backgroundColor = RandomColor();
    },
    mouseout: function () {
        this.style.backgroundColor = color;
    }
});
color = document.getElementById("theDiv").style.backgroundColor;

AddElement('p', document.body, {
    textContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}, {
    click: function () {
        this.style.color = RandomColor();
    }
});

AddElement('button', document.body, {
    textContent: "I can also be clicked!"
}, {
    click: function () {
        AddElement('span', document.getElementById("theDivII"), { textContent: "WeaverSong " });
    }
});
AddElement('div', document.body, {
    id: "theDivII"
});

const Friends = [
    "Naharie",
    "WingSpan",
    "RoseWyrm",
    "Mbletz",
    "WingedSeal",
    "TimberForge",
    "Dominexis",
    "Yaldabaoth",
    "Random595",
    "dixta"
];

AddElement('button', document.body, {
    textContent: "Yet another button to click"
}, {
    click: function () {
        let ul = document.getElementById("ul");
        Friends.forEach(i => {
            AddElement('li', ul, { textContent: i});
        })
    }
});
AddElement('ul', document.body, { id:"ul" });