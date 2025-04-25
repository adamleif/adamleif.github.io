let sentence = ["The", "dog", "quietly", "chewed", "on", "the", "bone."]
let l_distractors = ["xxx", "mip", "griffly", "strell", "ip", "sen", "lote."]
let g_distractors = ["xxx", "sit", "weather", "table", "can", "fry", "joyful."]

let l_maze = [];
let g_maze = [];

let l = true;
let failed = false;

window.onload = function () {
    var instructions = document.getElementById("instructions");
    var left = document.getElementById("left");
    var right = document.getElementById("right");
    var wrong = document.getElementById("wrong");
    var index = 0;

    function startMaze(maze_type = "left") {
        for (let i = 0; i < sentence.length; i++) {
            let randomNumber = Math.random();
    
            if (randomNumber < 0.5) { 
                l_maze[i] = [sentence[i], l_distractors[i]];
                g_maze[i] = [sentence[i], g_distractors[i]];
            }
            else {
                l_maze[i] = [l_distractors[i], sentence[i]];
                g_maze[i] = [g_distractors[i], sentence[i]];
            }
        }

        instructions.classList.toggle("hidden");
        
        if (maze_type == "left") {
            left.innerText = l_maze[index][0];
            right.innerText = l_maze[index][1];
            l = true;
        }
        else if (maze_type == "right") {
            left.innerText = g_maze[index][0];
            right.innerText = g_maze[index][1];
            l = false; 
        }
        else {
            console.log("SOMETHING IS WRONG")
        }

        left.classList.toggle("hidden");
        right.classList.toggle("hidden");  
    }

    function resetMaze () {
        failed = false;
        index = 0;
        l = true;
        l_maze = [];
        g_maze = [];
        if (instructions.classList.contains("hidden")) { instructions.classList.toggle("hidden"); }
        if (!wrong.classList.contains("hidden")) { wrong.classList.toggle("hidden"); }
        if (!left.classList.contains("hidden")) { left.classList.toggle("hidden"); }
        if (!right.classList.contains("hidden")) { right.classList.toggle("hidden"); }
    }

    function nextItem () {
        index++;

        if (l) {
            left.innerText = l_maze[index][0];
            right.innerText = l_maze[index][1];
        }
        else {
            left.innerText = g_maze[index][0];
            right.innerText = g_maze[index][1];
        }
        
    }

    function wrongMaze() {
        failed = true;
        left.classList.toggle("hidden");
        right.classList.toggle("hidden");
        wrong.classList.toggle("hidden");
    }

    document.addEventListener('keydown', function(event) {
        if (!instructions.classList.contains("hidden")) {
            if (event.key.toLowerCase() === 'f') { startMaze("left"); }
            else if (event.key.toLowerCase() === 'j') { startMaze("right"); }
        }
        else if (event.key.toLowerCase() === 'r') { resetMaze(); }
        else {
            if (!failed)
            {
                if (event.key.toLowerCase() === 'f') {
                    if (sentence[index] == left.innerText) { nextItem(); }
                    else { wrongMaze(); }
                }
                else if (event.key.toLowerCase() === 'j') {
                    if (sentence[index] == right.innerText) { nextItem(); }
                    else { wrongMaze(); }            
                }
            }
        }
    });
}

