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
    parent.append(`<${type} id="temp"></${type}>`);
    let NewElement = $("#temp");

    for (key in properties)
    {
        if (typeof(NewElement[key]) == "function") NewElement[key](properties[key]);
        //else NewElement[key] = properties[key];
    }

    NewElement.bind(eventListeners);

    if (NewElement.attr("id") == "temp")
    {
        NewElement.attr("id", "");
    }

    return NewElement;
};
//Applies properties and event listeners to an element
const HandleElement = function (element, properties, eventListeners)
{

    for (key in properties)
    {
        if (typeof(NewElement[key]) == "function") NewElement[key](properties[key]);
        else NewElement[key] = properties[key];
    }

    element.bind(eventListeners);

    return element;
};
//Returns a random hexadecimal color
const RandomColor = function ()
{
    // 16777215 is the highest hex number used in colors
    return "#" + (Math.round(Math.random() * 16777215).toString(16));
};

let color = "";

AddElement('button', $("body"), {
    text: "Click me!"
}, {
    click: function ()
    {
        alert("Hello! I've been clicked!");
    }
});

AddElement('br', $("body"));
AddElement('input', $("body"), {
    attr: {
        type: "text",
        id: "myInput"
    }
});
AddElement('button', $("body"), {
    text: "Click me too!"
}, {
    click: function ()
    {
        alert(document.getElementById("myInput").value);
    }
});

HandleElement($("#theDiv"), {}, {
    mouseover: function () {
        this.style.backgroundColor = RandomColor();
    },
    mouseout: function () {
        this.style.backgroundColor = color;
    }
}).css({
    width: "100px",
    height: "100px",
    backgroundColor: RandomColor()
});
color = $("#theDiv").css("backgroundColor");

AddElement('p', $("body"), {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}, {
    click: function () {
        this.style.color = RandomColor();
    }
});

AddElement('button', $("body"), {
    text: "I can also be clicked!"
}, {
    click: function () {
        AddElement('span', $("#theDivII"), { text: "WeaverSong " });
    }
});
AddElement('div', $("body"), {
    attr: {id: "theDivII"}
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

AddElement('button', $("body"), {
    text: "Yet another button to click"
}, {
    click: function () {
        let ul = $("#ul");
        Friends.forEach(i => {
            AddElement('li', ul, { text: i});
        })
    }
});
AddElement('ul', $("body"), { attr:{id:"ul"} });