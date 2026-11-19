// Get selected course from URL
let courseName = new URLSearchParams(window.location.search).get("course");

// Select course (Python is default)
let course = courses[courseName] || courses.python;

let currentTopic = 0;


// Display course topics in sidebar
function showMenu() {
    let menu = document.getElementById("topic-list");
    menu.innerHTML = "";

    course.topics.forEach(function(topic, index) {

        if (index === 0 || topic.level !== course.topics[index - 1].level) {
            menu.innerHTML += "<h3>" + topic.level + " Level</h3>";
        }

        menu.innerHTML +=
            "<button class='topic-link' onclick='showTopic(" + index + ")'>" +
            topic.title + "</button>";
    });
}


// Display selected lesson
function showTopic(index) {

    if (index < 0 || index >= course.topics.length) {
        return;
    }

    currentTopic = index;

    let topic = course.topics[index];

    document.getElementById("lesson-title").textContent = topic.title;
    document.getElementById("topic-count").textContent =
        "Topic " + (index + 1) + " of " + course.topics.length;

    document.getElementById("lesson-level").textContent = topic.level;
    document.getElementById("lesson-explanation").textContent = topic.explanation;
    document.getElementById("lesson-syntax").textContent = topic.syntax;
    document.getElementById("lesson-example").textContent = topic.example;
    document.getElementById("lesson-output").textContent = topic.output;
    document.getElementById("lesson-application").textContent = topic.application;


    // Display important points
    let points = document.getElementById("lesson-points");
    points.innerHTML = "";

    topic.points.forEach(function(point) {
        points.innerHTML += "<li>" + point + "</li>";
    });


    // Highlight selected topic
    let buttons = document.querySelectorAll(".topic-link");

    buttons.forEach(function(button, i) {
        button.classList.toggle("active", i === index);
    });


    // Previous and Next buttons
    document.getElementById("previous-button").disabled = index === 0;

    document.getElementById("next-button").disabled =
        index === course.topics.length - 1;
}


// Previous button
document.getElementById("previous-button").onclick = function() {
    showTopic(currentTopic - 1);
};


// Next button
document.getElementById("next-button").onclick = function() {
    showTopic(currentTopic + 1);
};


// Start course
document.title = course.title + " - Mindshelf";

document.getElementById("side-title").textContent = course.title;

showMenu();
showTopic(0);