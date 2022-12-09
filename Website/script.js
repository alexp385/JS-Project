$(document).ready( () => {
          

        const questions = () => {
        let question = 1;
        setInterval(() =>{
            let score = parseInt($("#score").text())
            if ( question == 1) {
                $("#questionNumber").text(question)
                $("#question").text("What is the 6th planet from the sun??");
                $("#A1").text("Jupiter");
                $("#A2").text("Saturn");
                $("#A3").text("Uranus");
                $("#A4").text("Neptune");
                $("#A1").click( () => {
                    question = 2;        
                })
                $("#A2").click( () => {
                    $("#score").text(score + 100)
                    question = 2;     
                })
                $("#A3").click( () => {
                    question = 2;
                })
                $("#A4").click( () => {
                    question = 2;
                })
            } else if ( question == 2){
                $("#questionNumber").text(question)
                $("#question").text("What planet has the most moons??");
                $("#A1").text("Saturn");
                $("#A2").text("Uranus");
                $("#A3").text("Neptune");
                $("#A4").text("Jupiter");
                $("#A1").click( () => {
                    $("#score").text(score + 100)
                    question =  3;      
                })
                $("#A2").click( () => {
                    question =  3;
                })
                $("#A3").click( () => {
                    question =  3;
                })
                $("#A4").click( () => {
                    question =  3;
                })
            } else if ( question == 3){
                $("#questionNumber").text(question)
                $("#question").text("What planet has the longest day?");
                $("#A1").text("Mercury");
                $("#A2").text("Earth");
                $("#A3").text("Venus");
                $("#A4").text("Neptune");
                $("#A1").click( () => {
                    question =  4;
                })
                $("#A2").click( () => {
                    question =  4;
                })
                $("#A3").click( () => {
                    $("#score").text(score + 100)
                    question =  4;
                })
                $("#A4").click( () => {
                    question =  4;
                })
            } else if ( question == 4){
                $("#questionNumber").text(question)
                $("#question").text("What is the name of the biggest dwarf planet in the astriod belt?");
                $("#A1").text("Ceres");
                $("#A2").text("Eros");
                $("#A3").text("Vesta");
                $("#A4").text("Pallas");
                $("#A1").click( () => {
                    question = 5;
                    $("#score").text(score + 100)
                })
                $("#A2").click( () => {
                    question = 5;
                })
                $("#A3").click( () => {
                    question = 5;
                })
                $("#A4").click( () => {
                    question =  5;
                })
            } else if ( question == 5){
                $("#questionNumber").text(question)
                $("#question").text("What was the name of the first (detected) interstellar object?");
                $("#A1").text("A hui hou");
                $("#A2").text("Humuhumunukunukuāpuaa");
                $("#A3").text("Oumuamua");
                $("#A4").text("Keahiakawelo");

                $("#A1").click( () => {
                    question =  6;
                })

                $("#A2").click( () => {
                    question =  6;
                })
                $("#A3").click( () => {
                    question =  6;
                    $("#score").text(score + 100)
                })
                $("#A4").click( () => {
                    question =  6;
                })

            } else if ( question == 6){
                $("#questionNumber").text(question)
                $("#question").text("How many lagrange points does the earth/sun system have?");
                $("#A1").text("1");
                $("#A2").text("3");
                $("#A3").text("4");
                $("#A4").text("5");
                $("#A1").click( () => {
                    question =  7;
                })
                $("#A2").click( () => {
                    question =  7;
                })
                $("#A3").click( () => {
                    question =  7;
                })
                $("#A4").click( () => {
                    $("#score").text(score + 100)
                    question =  3;
                })
            } else if ( question == 7){
                $("#questionNumber").text(question)
                $("#question").text("What moon in the solar syatem that has the densest atmosphere?");
                $("#A1").text("Trition");
                $("#A2").text("Titan");
                $("#A3").text("Tarqeq");
                $("#A4").text("Thelxinoe");
                $("#A1").click( () => {
                    question =  8;
                })
                $("#A2").click( () => {
                    $("#score").text(score + 100)
                    question =  8;
                })
                $("#A3").click( () => {
                    question =  8;
                })
                $("#A4").click( () => {
                    question =  8;
                })
            } else if ( question == 8){
                $("#questionNumber").text(question)
                $("#question").text("What planet has the tallest mountain?");
                $("#A1").text("Earth");
                $("#A2").text("Venus");
                $("#A3").text("Mars");
                $("#A4").text("Mercury");
                $("#A1").click( () => {
                    question =  9;
                }) 
                $("#A2").click( () => {
                    question =  9;
                })
                $("#A3").click( () => {
                    $("#score").text(score + 100)
                    question =  9;
                })
                $("#A4").click( () => {
                    question =  9;
                })
            } else if ( question == 9){
                $("#questionNumber").text(question)
                $("#question").text("How many moons does Jupiter have?");
                $("#A1").text("77");
                $("#A2").text("93");
                $("#A3").text("62");
                $("#A4").text("80");
                $("#A1").click( () => {
                    question =  10;
                }) 
                $("#A2").click( () => {
                    question =  10;
                }) 
                $("#A3").click( () => {
                    question =  10;
                }) 
                $("#A4").click( () => {
                    $("#score").text(score + 100)
                    question =  10;
                })         
            } else if ( question == 10){
                $("#questionNumber").text(question)
                $("#question").text("What planet has the shortest day?");
                $("#A1").text("Jupiter");
                $("#A2").text("Earth");
                $("#A3").text("Mars");
                $("#A4").text("Saturen");
                $("#A1").click( () => {
                    question =  11;
                    $("#score").text(1000)
                })
                $("#A2").click( () => {
                    question =  11;
                })
                $("#A3").click( () => {
                    question =  11;
                })
                $("#A4").click( () => {
                    question =  11;   
                })
            } else if ( question == 11){
                $("#questionNumber").text(question)
                $("#question").text("What is the closest planet to the sun?");
                $("#A1").text("Earth");
                $("#A2").text("Venus");
                $("#A3").text("Mars");
                $("#A4").text("Mercury");
                $("#A1").click( () => {
                    question =  12;
                }) 
                $("#A2").click( () => {
                    question =  12;
                }) 
                $("#A3").click( () => {
                    question =  12;
                }) 
                $("#A4").click( () => {
                    $("#score").text(1100)
                    question =  12;
                })         
            } else if ( question == 12){
                $("#questionNumber").text(question)
                $("#question").text("What planets has the greatest axial tilt?");
                $("#A1").text("Saturen");
                $("#A2").text("Uranus");
                $("#A3").text("Neptune");
                $("#A4").text("Mars");
                $("#A1").click( () => {
                    question =  13;
                })
                $("#A2").click( () => {
                    $("#score").text(1200)
                    question =  13;
                })
                $("#A3").click( () => {
                    question =  13;  
                })
                $("#A4").click( () => {
                    question =  13;
                })
            } else if ( question == 13){
                $("#questionNumber").text(question)
                $("#question").text("How old is the solar system in billions of years?");
                $("#A1").text("4.2");
                $("#A2").text("3.6");
                $("#A3").text("4.8");
                $("#A4").text("4.9");

                $("#A1").click( () => {
                    question =  14;
                })

                $("#A2").click( () => {
                    question =  14;
                })

                $("#A3").click( () => {
                    $("#score").text(1300)
                    question =  14;
                })
                $("#A4").click( () => {
                    question =  14;
                })
            } else if ( question == 14){
                $("#questionNumber").text(question)
                $("#question").text("What planet is, on average, the closest to Earth");
                $("#A1").text("Earth");
                $("#A2").text("Venus");
                $("#A3").text("Mars");
                $("#A4").text("Mercury");
                $("#A1").click( () => {
                    question =  15;
                })
                $("#A2").click( () => {
                    question =  15;
                })
                $("#A3").click( () => {
                    question =  15;
                })
                $("#A4").click( () => {
                    $("#score").text(1400)
                    question =  15;
                })
            } else if ( question == 15){
                $("#questionNumber").text(question)
                $("#question").text("What percent of the total solar system mass does the Sun account for?");
                $("#A1").text("96%");
                $("#A2").text("97%");
                $("#A3").text("98%");
                $("#A4").text("99%");
                $("#A1").click( () => {
                    question =  16;
                })
                $("#A2").click( () => {
                    question =  16;
                })
                $("#A3").click( () => {
                    question =  16;
                })
                $("#A4").click( () => {
                    $("#score").text(1500)
                    question =  16;
                })
            } else if ( question == 16){
                $("#questionNumber").text(question)
                $("#question").text("How far away is the Sun in millions of kilometers?");
                $("#A1").text("89");
                $("#A2").text("151");
                $("#A3").text("147");
                $("#A4").text("213");
                $("#A1").click( () => {
                    question =  17;
                })
                $("#A2").click( () => {
                    question =  17;
                })
                $("#A3").click( () => {
                    $("#score").text(score)
                    question =  17;
                })
                $("#A4").click( () => {
                    question =  17;
                })
            } else if ( question == 17){
                $("#questionNumber").text(question)
                $("#question").text("What is the hottest planet?");
                $("#A1").text("Jupiter");
                $("#A2").text("Venus");
                $("#A3").text("Saturen");
                $("#A4").text("Mercury");
                $("#A1").click( () => {
                    question =  18;
                })
                $("#A2").click( () => {
                    $("#score").text(score)
                    question =  18;
                })
                $("#A3").click( () => {
                    question =  18;
                })
                $("#A4").click( () => {
                        
                    question =  18;
                })
            } else if ( question == 18){
                $("#questionNumber").text(question)
                $("#question").text("How many Ice Giants are there?");
                $("#A1").text("1");
                $("#A2").text("2");
                $("#A3").text("3");
                $("#A4").text("4");
                $("#A1").click( () => {
                    question =  19;
                })
                $("#A2").click( () => {
                    $("#score").text(score)
                    question =  19;
                })

                $("#A3").click( () => {
                    question =  19;
                })

                $("#A4").click( () => {
                    question =  19;
                })

            } else if ( question == 19){
                $("#questionNumber").text(question)
                $("#question").text("How many planets are there?");
                $("#A1").text("6");
                $("#A2").text("7");
                $("#A3").text("8");
                $("#A4").text("9");

                $("#A1").click( () => {
                    question =  20;
                })
                $("#A2").click( () => {
                    question =  20;
                })

                $("#A3").click( () => {
                    question =  20;
                    $("#score").text(score)
                })

                $("#A4").click( () => {
                    question =  20;
                })
            } else if ( question == 20){
                $("#questionNumber").text(question)
                $("#question").text("What year was pluto demoted to a dwarf planet?");
                $("#A1").text("2004");
                $("#A2").text("2005");
                $("#A3").text("2006");
                $("#A4").text("2007");
                $("#A1").click( () => {
                    question =  3;
                })
                $("#A2").click( () => {
                    question =  3;
                })
                $("#A3").click( () => {  
                    $("#score").text(score)
                    question =  3;
                })
                $("#A4").click( () => {
                    question =  3;
                })
            }
        }, 10)
    }
    questions()
})