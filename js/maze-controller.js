let sentence = ["The", "dog", "quietly", "chewed", "on", "the", "bone."]
let l_distractors = ["x-x-x", "mip", "griffly", "strell", "ip", "sen", "lote."]
let g_distractors = ["x-x-x", "sit", "weather", "table", "can", "fry", "joyful."]

let l_maze = [];
let g_maze = [];

let l = true;
let failed = false;
let ended = false;

document.addEventListener('DOMContentLoaded', function () {
    var instructions = document.getElementById("instructions");
    var left = document.getElementById("left");
    var right = document.getElementById("right");
    var wrong = document.getElementById("wrong");
    var end = document.getElementById("end");
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

        instructions.classList.add("hidden");
        
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

        left.classList.remove("hidden");
        right.classList.remove("hidden");  
    }

    function resetMaze () {
        index = 0;
        l = true;
        ended = false;
        failed = false;
        l_maze = [];
        g_maze = [];

        if (instructions.classList.contains("hidden")) { instructions.classList.remove("hidden"); }
        if (!wrong.classList.contains("hidden")) { wrong.classList.add("hidden"); }
        if (!left.classList.contains("hidden")) { left.classList.add("hidden"); }
        if (!right.classList.contains("hidden")) { right.classList.add("hidden"); }
        if (!end.classList.contains("hidden")) { end.classList.add("hidden"); }
    }

    function wrongMaze() {
        failed = true;
        left.classList.add("hidden");
        right.classList.add("hidden");
        wrong.classList.remove("hidden");
    }

    function endMaze() {
        ended = true;
        left.classList.add("hidden"); 
        right.classList.add("hidden");
        end.classList.remove("hidden");
    }

    function nextItem () {
        index++;
        
        if (index >= sentence.length) {
            console.log("AHHHHHHH")
            endMaze();
        } else {
            if (l) {
                left.innerText = l_maze[index][0];
                right.innerText = l_maze[index][1];
            } else {
                left.innerText = g_maze[index][0];
                right.innerText = g_maze[index][1];
            }
        }    
    }

    document.addEventListener('keydown', function(event) {
        if (!instructions.classList.contains("hidden")) {
            if (event.key.toLowerCase() === 'f') { startMaze("left"); }
            else if (event.key.toLowerCase() === 'j') { startMaze("right"); }
        }
        else if (event.key.toLowerCase() === 'r') { resetMaze(); }
        else {
            if (!failed && !ended)
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
});