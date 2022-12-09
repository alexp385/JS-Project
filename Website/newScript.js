const questions = {
    0 : ["What is the 6th planet from the sun?",
        "Jupiter","Saturn","Uranus","Neptune",
        "2"],
    1 : ["What planet has the most moons?",
        "Jupiter","Saturn","Uranus","Neptune",
        "2"],
    2 : ["What planet has the longest day?",
        "Mercury","Earth","Venus","Neptune",
        "3"],
    3 : ["What was the name of the first (detected) interstellar object?",
        "A hui hou","Humuhumunukunukuāpuaa", "Oumuamua","Keahiakawelo",
        "3"],
    4: ["What is the name of the biggest dwarf planet in the astriod belt?",
        "Ceres","Eros","Vesta","Pallas",
        "1"],
    5: ["How many lagrange points does the earth/sun system have?",
        "2","3","4","5",
        "4"],
    6: ["What moon in the solar syatem that has the densest atmosphere?",
        "Trition","Titan","Titaian","Thelxinoe",
        "2"],
    7: ["What planet has the tallest mountain?",
        "Earth","Venus","Mars","Mercury",
        "3"],
    8: ["How many moons does Jupiter have?",
        "77","67","90","80",
        "4"],
    9: ["What planet has the shortest day?",
        "Jupiter","Earth","Mars","Saturen",
        "1"],
    10: ["What is the closest planet to the sun?",
        "Earth","Venus","Mars","Mercury",
        "4"],
    11: ["What planets has the greatest axial tilt?",
        "Saturen","Jupiter","Earth","Uranus",
        "4"],
    12: ["How old is the solar system in billions of years?",
        "4.1","4.6","4.8","4.9",
        "3"],
    13: ["What planet is, on average, the closest to Earth",
        "Earth","Venus","Mars","Mercury",
        "4"],
    14: ["How far away is the Sun in millions of kilometers?",
        "89", "151","147","203",
        "3"],
}

let ans;
const setQuestion = (index) => {
    $("#1").text(questions[index][1])
    $("#2").text(questions[index][2])
    $("#3").text(questions[index][3])
    $("#4").text(questions[index][4])
    $("#question").text(questions[index][0])
    ans = questions[index][5]
}


$(document).ready( () =>{
    const numbers = Array.from({length: 15}, (x, i) => i + 1);
    numbers.sort(() => Math.random() - 0.5);
    const indexs = numbers.slice(0, 10);
    
    setQuestion(indexs[0])
    let score = 0
    let questionNumber = 0;
    $("#questionNumber").text(questionNumber + 1)
    if (parseInt($("#questionNumber").text()) < 10) {
        
        $(".ans1").click( () => {
            if (parseInt(ans) == parseInt($(".ans1").attr("id"))) {
                questionNumber ++
                score ++
                setQuestion(questionNumber)
                $("#questionNumber").text(questionNumber + 1)
                $("#score").text(score)
            } else {
                questionNumber++
                setQuestion(questionNumber)
                $("#questionNumber").text(questionNumber + 1)
            }
        })
        $(".ans2").click( () => {
            if (parseInt(ans) == parseInt($(".ans2").attr("id"))) {
                questionNumber ++
                score ++
                setQuestion(questionNumber)
                $("#questionNumber").text(questionNumber + 1)
                $("#score").text(score)
            } else {
                questionNumber++
                setQuestion(questionNumber)
                $("#questionNumber").text(questionNumber + 1)
            }
        })
        $(".ans3").click( () => {
            if (parseInt(ans) == parseInt($(".ans3").attr("id"))) {
                questionNumber ++
                score ++
                setQuestion(questionNumber)
                $("#questionNumber").text(questionNumber + 1)
                $("#score").text(score)
            } else {
                questionNumber++
                setQuestion(questionNumber)
                $("#questionNumber").text(questionNumber + 1)
            }
        })
        $(".ans4").click( () => {
            if (parseInt(ans) == parseInt($(".ans4").attr("id"))) {
                questionNumber ++
                score ++
                setQuestion(questionNumber)
                $("#questionNumber").text(questionNumber + 1)
                $("#score").text(score)
            } else {
                questionNumber++
                setQuestion(questionNumber)
                $("#questionNumber").text(questionNumber + 1)
            }
        })
    }
    
    
    
})