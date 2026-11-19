// Mindshelf: all lessons are stored here and work offline.

/* ---------- 1. LESSON DATA ----------
   Each row is: [title, explanation, points, syntax, example, output, application]
   Use null for "points" to get the 3 default points. */

function makeTopics(level, rows) {
    return rows.map(([title, explanation, points, syntax, example, output, application]) => ({
        level, title, explanation, syntax, example, output, application,
        points: points || [
            title + ' is an important programming concept.',
            'Understand the syntax and practise the example.',
            'Use meaningful names and keep your code easy to read.'
        ]
    }));
}

const courses = {
python: {
    title: 'Python Programming',
    topics: [
        ...makeTopics('Beginner', [
            ['Introduction to Python', 'Python is a popular, high-level programming language. It is known for simple and readable code.', ['Python is used for websites, automation, data and AI.', 'It is beginner-friendly and free to use.'], 'print("Hello, Python!")', 'print("Hello, Python!")', 'Hello, Python!', 'Python is used to build websites, automate tasks and analyse data.'],
            ['What is Python?', 'Python is an interpreted language. This means a Python program is run by an interpreter instead of being directly converted into a machine-code executable first.', null, 'python filename.py', 'print("I am learning Python")', 'I am learning Python', 'A student can use Python to create small tools for college work.'],
            ['Features of Python', 'Python has simple syntax, a large standard library and works on different operating systems.', ['Easy to read and write.', 'Supports procedural and object-oriented programming.', 'Has many ready-made modules.'], 'print(5 + 3)', 'print("Easy")\nprint(5 + 3)', 'Easy\n8', 'Its libraries help developers create charts, websites and automation tools.'],
            ['Installing Python', 'Download and install Python from the official Python installer. During installation on Windows, select the option to add Python to PATH.', null, 'python --version', 'print("Python is ready")', 'Python is ready', 'Installing Python lets students practise programs on their own computer.'],
            ['Python Syntax', 'Syntax means the rules used to write a program. Python uses indentation to show blocks of code.', ['Python is case-sensitive.', 'A colon starts an indented block.', 'Indentation is important.'], 'if condition:\n    statement', 'if 5 > 2:\n    print("Five is bigger")', 'Five is bigger', 'Correct syntax helps programs run without errors.'],
            ['Variables', 'A variable is like a container used to store information. Python creates a variable when you assign a value to it.', ['Do not put spaces in variable names.', 'Names are case-sensitive.', 'A variable can store different types of values.'], 'name = "Atharva"\nage = 20', 'name = "Atharva"\nage = 20\nprint(name)\nprint(age)', 'Atharva\n20', 'Variables store student names, marks, ages and other information.'],
            ['Data Types', 'A data type tells Python what kind of value is stored, such as text, a whole number or a decimal number.', ['int stores whole numbers.', 'float stores decimal numbers.', 'str stores text and bool stores True or False.'], 'age = 20\nprice = 12.5\nname = "Riya"', 'age = 20\nprice = 12.5\nname = "Riya"\nprint(type(age))', "<class 'int'>", 'Data types help store marks, prices, names and yes/no values correctly.'],
            ['Operators', 'Operators are symbols that perform operations on values. Common groups include arithmetic, comparison and logical operators.', ['+ adds and - subtracts.', '* multiplies and / divides.', '== compares two values.'], 'a + b\na > b\na == b', 'a = 10\nb = 3\nprint(a + b)\nprint(a > b)', '13\nTrue', 'Operators calculate totals, compare marks and check conditions.'],
            ['Input and Output', 'The input() function accepts information from the user. The print() function displays information on the screen.', ['input() returns text by default.', 'Use int() to convert input to a whole number.', 'print() can display multiple values.'], 'name = input("Name: ")\nprint(name)', 'name = input("Enter name: ")\nprint("Hello", name)', 'Enter name: Sam\nHello Sam', 'Forms and simple calculators use input to receive user information.'],
            ['First Python Program', 'A first program is often used to display a message. The print() function sends text or values to the output screen.', ['Text is written inside quotes.', 'Python executes statements from top to bottom.'], 'print("Hello World")', 'print("Hello World")', 'Hello World', 'A welcome message can be displayed when an application starts.']
        ]),
        ...makeTopics('Intermediate', [
            ['Conditional Statements', 'Conditional statements let a program make decisions. A block runs only when its condition is true.', null, 'if condition:\n    statement', 'marks = 75\nif marks >= 40:\n    print("Pass")', 'Pass', 'A result program checks whether a student has passed.'],
            ['If, Else and Elif', 'if checks the first condition, elif checks another condition and else runs when none of the earlier conditions are true.', ['Use a colon after each condition.', 'Indent the statements inside each block.'], 'if condition:\n    ...\nelif condition:\n    ...\nelse:\n    ...', 'marks = 82\nif marks >= 90:\n    print("A")\nelif marks >= 40:\n    print("Pass")\nelse:\n    print("Fail")', 'Pass', 'Grade calculators use if, elif and else to select a result.'],
            ['For Loop', 'A for loop repeats a block for each item in a sequence or for each number in a range.', ['range(5) produces 0 to 4.', 'A loop avoids writing the same statement many times.'], 'for item in sequence:\n    statement', 'for i in range(1, 4):\n    print(i)', '1\n2\n3', 'A for loop can print a list of student names or marks.'],
            ['While Loop', 'A while loop repeats as long as its condition remains true. The condition should eventually become false.', null, 'while condition:\n    statement', 'count = 1\nwhile count <= 3:\n    print(count)\n    count += 1', '1\n2\n3', 'A while loop can keep asking for a valid password until it is entered.'],
            ['Functions', 'A function is a reusable block of code. It can accept information through parameters and return a result.', ['Define a function with def.', 'Call the function by its name.', 'return sends a result back.'], 'def function_name():\n    statement', 'def greet(name):\n    print("Hello", name)\ngreet("Asha")', 'Hello Asha', 'Functions organise repeated tasks such as calculating a total.'],
            ['Lists', 'A list stores multiple values in one variable. Lists are ordered and can be changed after creation.', ['Lists use square brackets.', 'Indexing starts at 0.', 'append() adds an item.'], 'fruits = ["apple", "mango"]', 'fruits = ["apple", "mango"]\nfruits.append("grape")\nprint(fruits)', "['apple', 'mango', 'grape']", 'A list can store marks or names of all students in a class.'],
            ['Tuples', 'A tuple stores multiple values like a list, but its items cannot be changed after the tuple is created.', ['Tuples use round brackets.', 'Tuples are ordered.', 'Use indexing to read an item.'], 'days = ("Mon", "Tue", "Wed")', 'days = ("Mon", "Tue", "Wed")\nprint(days[0])', 'Mon', 'A tuple can store fixed information such as the days of a week.'],
            ['Dictionaries', 'A dictionary stores information as key-value pairs. Each key is used to find its matching value.', ['Dictionaries use curly brackets.', 'Keys should be unique.', 'Access a value using its key.'], 'student = {"name": "Asha", "age": 19}', 'student = {"name": "Asha", "age": 19}\nprint(student["name"])', 'Asha', 'A dictionary can store a student record with name, roll number and marks.'],
            ['Strings', 'A string is a sequence of characters used to store text. Python provides methods to work with strings.', ['Strings are written inside quotes.', 'Indexing starts at 0.', 'upper() changes letters to uppercase.'], 'message = "hello"', 'message = "hello"\nprint(message.upper())', 'HELLO', 'Strings are used for names, addresses, messages and search text.']
        ])
    ]
},

c: {
    title: 'C Programming',
    topics: [
        ...makeTopics('Beginner', [
            ['Introduction to C', 'C is a general-purpose programming language often used to learn programming fundamentals and build system software.', null, '#include <stdio.h>\nint main() {\n    return 0;\n}', '#include <stdio.h>\nint main() {\n    printf("Hello C");\n    return 0;\n}', 'Hello C', 'C is used in embedded systems, operating systems and learning computer fundamentals.'],
            ['Structure of a C Program', 'A C program commonly includes header files, the main() function, statements and a return value.', ['Execution starts from main().', 'Statements usually end with a semicolon.', 'stdio.h provides input and output functions.'], '#include <stdio.h>\nint main() {\n    statements;\n    return 0;\n}', '#include <stdio.h>\nint main() {\n    printf("Welcome");\n    return 0;\n}', 'Welcome', 'This structure is the starting point for small C applications.'],
            ['Variables and Data Types', 'Variables store values. C requires a data type such as int, float or char when a variable is declared.', null, 'int age = 18;\nfloat marks = 85.5;', '#include <stdio.h>\nint main() {\n    int age = 18;\n    printf("%d", age);\n    return 0;\n}', '18', 'Variables store ages, marks, quantities and other program data.'],
            ['Input and Output', 'printf() displays output and scanf() reads input from the keyboard.', ['Use format specifiers such as %d and %f.', 'Use & before a normal variable in scanf().'], 'scanf("%d", &number);\nprintf("%d", number);', '#include <stdio.h>\nint main() {\n    int age;\n    scanf("%d", &age);\n    printf("Age: %d", age);\n    return 0;\n}', 'Input: 18\nAge: 18', 'A program can ask a student to enter a roll number.'],
            ['Operators', 'C operators perform arithmetic, comparisons and logical operations on values.', null, 'a + b\na > b\na == b', '#include <stdio.h>\nint main() {\n    printf("%d", 8 + 2);\n    return 0;\n}', '10', 'Operators calculate totals and compare values in programs.']
        ]),
        ...makeTopics('Intermediate', [
            ['If-Else Statements', 'if and else allow a C program to choose between different actions based on a condition.', null, 'if (condition) { }\nelse { }', '#include <stdio.h>\nint main() {\n    int marks = 65;\n    if (marks >= 40) printf("Pass");\n    else printf("Fail");\n    return 0;\n}', 'Pass', 'A result system can decide whether a student passes.'],
            ['Loops', 'Loops repeat statements. C provides for, while and do-while loops.', ['for is useful when repetitions are known.', 'while checks before repeating.', 'do-while runs at least once.'], 'for (int i = 1; i <= 3; i++) { }', '#include <stdio.h>\nint main() {\n    for (int i = 1; i <= 3; i++) printf("%d ", i);\n    return 0;\n}', '1 2 3', 'Loops can display roll numbers or calculate repeated totals.'],
            ['Arrays', 'An array stores multiple values of the same data type under one name. Its index starts at zero.', null, 'int marks[3] = {70, 80, 90};', '#include <stdio.h>\nint main() {\n    int marks[3] = {70, 80, 90};\n    printf("%d", marks[1]);\n    return 0;\n}', '80', 'An array can store the marks of students in a class.'],
            ['Functions', 'A function is a named block of code that performs a task. It can receive parameters and return a value.', null, 'return_type function_name(parameters);', '#include <stdio.h>\nint add(int a, int b) { return a + b; }\nint main() { printf("%d", add(2, 3)); return 0; }', '5', 'Functions can separate tasks such as calculating totals and averages.']
        ])
    ]
},

cpp: {
    title: 'C++ Programming',
    topics: [
        ...makeTopics('Beginner', [
            ['Introduction to C++', 'C++ is a general-purpose programming language based on C. It also supports object-oriented programming.', null, '#include <iostream>\nusing namespace std;', '#include <iostream>\nusing namespace std;\nint main() { cout << "Hello C++"; }', 'Hello C++', 'C++ is used in games, desktop software and performance-focused applications.'],
            ['Variables and Data Types', 'A variable stores a value. C++ uses types such as int, float, double, char and string.', null, 'int age = 18;\nstring name = "Asha";', '#include <iostream>\nusing namespace std;\nint main() { int age = 18; cout << age; }', '18', 'Variables store names, ages, marks and prices.'],
            ['Input and Output', 'C++ uses cout to display output and cin to receive input from the keyboard.', ['Use << with cout.', 'Use >> with cin.', 'Include iostream.'], 'cin >> value;\ncout << value;', '#include <iostream>\nusing namespace std;\nint main() { int age; cin >> age; cout << "Age: " << age; }', 'Input: 18\nAge: 18', 'A program can ask users for their age or marks.']
        ]),
        ...makeTopics('Intermediate', [
            ['Conditions', 'if, else-if and else allow a program to choose which statements to execute.', null, 'if (condition) { }\nelse { }', '#include <iostream>\nusing namespace std;\nint main() { int marks = 70; if (marks >= 40) cout << "Pass"; else cout << "Fail"; }', 'Pass', 'Conditions are used in grading and decision-making programs.'],
            ['Loops', 'Loops repeat a block of code. C++ provides for, while and do-while loops.', null, 'for (int i = 1; i <= 3; i++) { }', '#include <iostream>\nusing namespace std;\nint main() { for (int i = 1; i <= 3; i++) cout << i << " "; }', '1 2 3', 'Loops can repeat calculations or display a list of items.'],
            ['Arrays and Strings', 'An array stores values of the same type. A string stores a sequence of characters.', ['Array indexes start at zero.', 'Include string to use the string type.'], 'int nums[3] = {1, 2, 3};\nstring name = "Asha";', '#include <iostream>\n#include <string>\nusing namespace std;\nint main() { string name = "Asha"; cout << name; }', 'Asha', 'Arrays can store marks and strings can store names.'],
            ['Functions', 'Functions group statements into reusable blocks. A function may accept parameters and return a value.', null, 'int add(int a, int b) { return a + b; }', '#include <iostream>\nusing namespace std;\nint add(int a, int b) { return a + b; }\nint main() { cout << add(2, 3); }', '5', 'Functions help divide a large program into smaller tasks.']
        ])
    ]
},

java: {
    title: 'Java Programming',
    topics: [
        ...makeTopics('Beginner', [
            ['Introduction to Java', 'Java is a high-level, object-oriented programming language. Java programs run on the Java Virtual Machine (JVM).', ['Java is case-sensitive.', 'A Java program commonly starts from main().', 'The JVM runs compiled Java bytecode.'], 'class Main {\n    public static void main(String[] args) { }\n}', 'class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello Java");\n    }\n}', 'Hello Java', 'Java is used in enterprise software, Android development and web applications.'],
            ['Variables and Data Types', 'Variables store information. Java requires each variable to be declared with a data type.', null, 'int age = 18;\ndouble price = 12.5;\nString name = "Asha";', 'class Main { public static void main(String[] args) { int age = 18; System.out.println(age); } }', '18', 'Variables store student details, prices and other information.'],
            ['Operators and Input/Output', 'Operators perform calculations and comparisons. System.out.println() displays output; Scanner can read user input.', ['Use + for addition.', 'Use == to compare primitive values.', 'Scanner reads input from the keyboard.'], 'System.out.println(value);', 'class Main {\n    public static void main(String[] args) {\n        System.out.println(8 + 2);\n    }\n}', '10', 'A program can calculate totals and display a result.']
        ]),
        ...makeTopics('Intermediate', [
            ['If-Else Statements', 'if and else let Java choose which block of code should run based on a condition.', null, 'if (condition) { } else { }', 'class Main { public static void main(String[] args) { int marks = 60; if (marks >= 40) System.out.println("Pass"); else System.out.println("Fail"); } }', 'Pass', 'A grading application can decide pass or fail.'],
            ['Loops', 'Loops repeat statements. Java provides for, while and do-while loops.', null, 'for (int i = 1; i <= 3; i++) { }', 'class Main { public static void main(String[] args) { for (int i = 1; i <= 3; i++) System.out.println(i); } }', '1\n2\n3', 'Loops can display records or perform repeated calculations.'],
            ['Methods and Arrays', 'A method is a reusable block of code. An array stores multiple values of the same type.', ['Methods can accept parameters.', 'Array positions start at zero.', 'Use length to find array size.'], 'int[] marks = {70, 80, 90};', 'class Main { public static void main(String[] args) { int[] marks = {70, 80, 90}; System.out.println(marks[1]); } }', '80', 'Methods organise tasks and arrays store a class list of marks.']
        ])
    ]
}
};


/* ---------- 2. SIMPLE PAGE LOGIC ---------- */

// Get the selected course from the URL.
let courseName = new URLSearchParams(window.location.search).get("course");

// Open Python if no valid course is selected.
let course = courses[courseName] || courses.python;
let currentTopic = 0;

// Show course topics in the sidebar.
function showMenu() {
    let menu = document.getElementById("topic-list");
    menu.innerHTML = "";

    course.topics.forEach(function(topic, index) {
        if (index === 0 || topic.level !== course.topics[index - 1].level) {
            menu.innerHTML += "<p class='level-heading'>" + topic.level + " Level</p>";
        }

        menu.innerHTML += "<button class='topic-link' onclick='showTopic(" + index + ")'>" +
            (index + 1) + ". " + topic.title + "</button>";
    });
}

// Show the selected lesson.
function showTopic(index) {
    if (index < 0 || index >= course.topics.length) return;

    currentTopic = index;
    let topic = course.topics[index];

    document.getElementById("lesson-title").textContent = topic.title;
    document.getElementById("topic-count").textContent =
        "Topic " + (index + 1) + " of " + course.topics.length;
    document.getElementById("lesson-level").textContent = topic.level + " Level";
    document.getElementById("lesson-explanation").textContent = topic.explanation;
    document.getElementById("lesson-syntax").textContent = topic.syntax || "See the example below.";
    document.getElementById("lesson-example").textContent = topic.example;
    document.getElementById("lesson-output").textContent = topic.output;
    document.getElementById("lesson-application").textContent = topic.application;

    // Show important points.
    let points = document.getElementById("lesson-points");
    points.innerHTML = "";

    topic.points.forEach(function(point) {
        points.innerHTML += "<li>" + point + "</li>";
    });

    // Highlight the selected topic.
    let buttons = document.querySelectorAll(".topic-link");
    buttons.forEach(function(button, i) {
        button.classList.toggle("active", i === index);
    });

    // Disable buttons at the beginning and end.
    document.getElementById("previous-button").disabled = index === 0;
    document.getElementById("next-button").disabled = index === course.topics.length - 1;
}

// Previous and Next buttons.
document.getElementById("previous-button").onclick = function() {
    showTopic(currentTopic - 1);
};

document.getElementById("next-button").onclick = function() {
    showTopic(currentTopic + 1);
};

// Start the course page.
document.title = course.title + " - Mindshelf";
document.getElementById("side-title").textContent = course.title;
showMenu();
showTopic(0);
