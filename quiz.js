        let pont = 0
        document.querySelector("#pont").innerHTML = `<p>${pont}</p>`
        function quiz(gomb_fajta) {
            if (gomb_fajta === "helyes") {
                document.getElementById("helyes").style.backgroundColor = "green";
                document.getElementById("helytelen1").style.backgroundColor = "rgb(160, 0, 0)";
                document.getElementById("helytelen2").style.backgroundColor = "rgb(160, 0, 0)";
                document.getElementById("helytelen3").style.backgroundColor = "rgb(160, 0, 0)";
                document.querySelector(".valasz").innerHTML = "<h3 class='helyes'>Helyes válasz!</h3>"
                if (pont === 0) {
                    pont = pont + 1
                    document.querySelector("#pont").innerHTML = `<p>${pont}</p>`
                }
            } else if (gomb_fajta === "helytelen") {
                document.getElementById("helyes").style.backgroundColor = "green";
                document.getElementById("helytelen1").style.backgroundColor = "rgb(160, 0, 0)";
                document.getElementById("helytelen2").style.backgroundColor = "rgb(160, 0, 0)";
                document.getElementById("helytelen3").style.backgroundColor = "rgb(160, 0, 0)";
                document.querySelector(".valasz").innerHTML = "<h3 class='helytelen'>Helytelen válasz!</h3>"
                document.querySelector("#pont").innerHTML = `<p>${pont}</p>`
            }

            if (gomb_fajta === "tovabb") {
                document.getElementById("kerdes1").style.display = "none"
                document.getElementById("kerdes2").style.display = "block"
            }
        }
        function quiz2(gomb_fajta2) {
            if (gomb_fajta2 === "helyes") {
                document.getElementById("helyes2").style.backgroundColor = "green";
                document.getElementById("helytelen4").style.backgroundColor = "rgb(160, 0, 0)";
                document.getElementById("helytelen5").style.backgroundColor = "rgb(160, 0, 0)";
                document.getElementById("helytelen6").style.backgroundColor = "rgb(160, 0, 0)";
                document.querySelector(".valasz2").innerHTML = "<h3 class='helyes'>Helyes válasz!</h3>"
                if (pont <= 1) {
                    pont = pont + 1
                    document.querySelector("#pont").innerHTML = `<p>${pont}</p>`
                }
            } else if (gomb_fajta2 === "helytelen") {
                document.getElementById("helyes2").style.backgroundColor = "green";
                document.getElementById("helytelen4").style.backgroundColor = "rgb(160, 0, 0)";
                document.getElementById("helytelen5").style.backgroundColor = "rgb(160, 0, 0)";
                document.getElementById("helytelen6").style.backgroundColor = "rgb(160, 0, 0)";
                document.querySelector(".valasz2").innerHTML = "<h3 class='helytelen'>Helytelen válasz!</h3>"
                document.querySelector("#pont").innerHTML = `<p>${pont}</p>`
            }
        }
        function tovabb2() {
            document.getElementById("kerdes2").style.display = "none"
            document.getElementById("kerdes3").style.display = "block"
        }
        function quiz3(gomb_fajta3) {
            if (gomb_fajta3 === "helyes") {
                document.getElementById("helyes3").style.backgroundColor = "green";
                document.getElementById("helytelen7").style.backgroundColor = "rgb(160, 0, 0)";
                document.getElementById("helytelen8").style.backgroundColor = "rgb(160, 0, 0)";
                document.getElementById("helytelen9").style.backgroundColor = "rgb(160, 0, 0)";
                document.querySelector(".valasz3").innerHTML = "<h3 class='helyes'>Helyes válasz!</h3>"
                if (pont <= 2) {
                    pont = pont + 1
                    document.querySelector("#pont").innerHTML = `<p>${pont}</p>`
                }
            } else if (gomb_fajta3 === "helytelen") {
                document.getElementById("helyes3").style.backgroundColor = "green";
                document.getElementById("helytelen7").style.backgroundColor = "rgb(160, 0, 0)";
                document.getElementById("helytelen8").style.backgroundColor = "rgb(160, 0, 0)";
                document.getElementById("helytelen9").style.backgroundColor = "rgb(160, 0, 0)";
                document.querySelector(".valasz3").innerHTML = "<h3 class='helytelen'>Helytelen válasz!</h3>"
                document.querySelector("#pont").innerHTML = `<p>${pont}</p>`
            }
        }
        function tovabb3() {
            document.getElementById("kerdes3").style.display = "none"
            document.getElementById("kerdes4").style.display = "block"
        }
        function quiz4(gomb_fajta4) {
            if (gomb_fajta4 === "helyes") {
                document.getElementById("helyes4").style.backgroundColor = "green";
                document.getElementById("helytelen10").style.backgroundColor = "rgb(160, 0, 0)";
                document.getElementById("helytelen11").style.backgroundColor = "rgb(160, 0, 0)";
                document.getElementById("helytelen12").style.backgroundColor = "rgb(160, 0, 0)";
                document.querySelector(".valasz4").innerHTML = "<h3 class='helyes'>Helyes válasz!</h3>"
                if (pont <= 3) {
                    pont = pont + 1
                    document.querySelector("#pont").innerHTML = `<p>${pont}</p>`
                }
            } else if (gomb_fajta4 === "helytelen") {
                document.getElementById("helyes4").style.backgroundColor = "green";
                document.getElementById("helytelen10").style.backgroundColor = "rgb(160, 0, 0)";
                document.getElementById("helytelen11").style.backgroundColor = "rgb(160, 0, 0)";
                document.getElementById("helytelen12").style.backgroundColor = "rgb(160, 0, 0)";
                document.querySelector(".valasz4").innerHTML = "<h3 class='helytelen'>Helytelen válasz!</h3>"
                document.querySelector("#pont").innerHTML = `<p>${pont}</p>`
            }
        }
        function tovabb4() {
            document.getElementById("kerdes4").style.display = "none"
            document.getElementById("kerdes5").style.display = "block"
        }
        function quiz5(gomb_fajta5) {
            if (gomb_fajta5 === "helyes") {
                document.getElementById("helyes5").style.backgroundColor = "green";
                document.getElementById("helytelen13").style.backgroundColor = "rgb(160, 0, 0)";
                document.getElementById("helytelen14").style.backgroundColor = "rgb(160, 0, 0)";
                document.getElementById("helytelen15").style.backgroundColor = "rgb(160, 0, 0)";
                document.querySelector(".valasz5").innerHTML = "<h3 class='helyes'>Helyes válasz!</h3>"
                if (pont <= 4) {
                    pont = pont + 1
                    document.querySelector("#pont").innerHTML = `<p>${pont}</p>`
                }
            } else if (gomb_fajta5 === "helytelen") {
                document.getElementById("helyes5").style.backgroundColor = "green";
                document.getElementById("helytelen13").style.backgroundColor = "rgb(160, 0, 0)";
                document.getElementById("helytelen14").style.backgroundColor = "rgb(160, 0, 0)";
                document.getElementById("helytelen15").style.backgroundColor = "rgb(160, 0, 0)";
                document.querySelector(".valasz5").innerHTML = "<h3 class='helytelen'>Helytelen válasz!</h3>"
                document.querySelector("#pont").innerHTML = `<p>${pont}</p>`
            }
        }
        function tovabb5() {
            document.getElementById("kerdes5").style.display = "none"
            document.getElementById("kerdes6").style.display = "block"
        }
        function quiz6(gomb_fajta6) {
            if (gomb_fajta6 === "helyes") {
                document.getElementById("helyes6").style.backgroundColor = "green";
                document.getElementById("helytelen16").style.backgroundColor = "rgb(160, 0, 0)";
                document.getElementById("helytelen17").style.backgroundColor = "rgb(160, 0, 0)";
                document.getElementById("helytelen18").style.backgroundColor = "rgb(160, 0, 0)";
                document.querySelector(".valasz6").innerHTML = "<h3 class='helyes'>Helyes válasz!</h3>"
                if (pont <= 5) {
                    pont = pont + 1
                    document.querySelector("#pont").innerHTML = `<p>${pont}</p>`
                }
            } else if (gomb_fajta6 === "helytelen") {
                document.getElementById("helyes6").style.backgroundColor = "green";
                document.getElementById("helytelen16").style.backgroundColor = "rgb(160, 0, 0)";
                document.getElementById("helytelen17").style.backgroundColor = "rgb(160, 0, 0)";
                document.getElementById("helytelen18").style.backgroundColor = "rgb(160, 0, 0)";
                document.querySelector(".valasz6").innerHTML = "<h3 class='helytelen'>Helytelen válasz!</h3>"
                document.querySelector("#pont").innerHTML = `<p>${pont}</p>`
            }
        }
        function tovabb6() {
            document.getElementById("kerdes6").style.display = "none"
            document.getElementById("kerdes_fajta").style.display = "none"
            document.getElementById("kerdes_fajta2").style.display = "block"
            document.getElementById("kerdes7").style.display = "block"
        }
        function quiz7() {
            const valasz7 = document.getElementById("input1").value
            if (valasz7 === '120') {
                document.getElementById("input1").style.backgroundColor = "green"
                document.querySelector(".valasz7").innerHTML = "<h3 class='helyes'>Helyes válasz!</h3>"
                if (pont <= 6) {
                    pont = pont + 1
                    document.querySelector("#pont").innerHTML = `<p>${pont}</p>`
                }
            } else {
                document.getElementById("input1").style.backgroundColor = "rgb(160, 0, 0)"
                document.querySelector(".valasz7").innerHTML = "<h3 class='helytelen'>Helytelen válasz!</h3>"
                document.querySelector("#pont").innerHTML = `<p>${pont}</p>`
            }
        }
        function tovabb7() {
            document.getElementById("kerdes7").style.display = "none"
            document.getElementById("kerdes8").style.display = "block"
        }
        function quiz8() {
            const valasz8 = document.getElementById("input2").value
            if (valasz8 === '1983' || valasz8 === '83' || valasz8 === '1987' || valasz8 === '87') {
                document.getElementById("input2").style.backgroundColor = "green"
                document.querySelector(".valasz8").innerHTML = "<h3 class='helyes'>Helyes válasz!</h3>"
                if (pont <= 7) {
                    pont = pont + 1
                    document.querySelector("#pont").innerHTML = `<p>${pont}</p>`
                }
            } else {
                document.getElementById("input2").style.backgroundColor = "rgb(160, 0, 0)"
                document.querySelector(".valasz8").innerHTML = "<h3 class='helytelen'>Helytelen válasz!</h3>"
                document.querySelector("#pont").innerHTML = `<p>${pont}</p>`
            }
        }
        function tovabb8() {
            document.getElementById("kerdes8").style.display = "none"
            document.getElementById("kerdes9").style.display = "block"
        }
        function quiz9() {
            const valasz9 = document.getElementById("input3").value
            if (valasz9 === "Purple Guy" || valasz9 === "purple guy" || valasz9 === "Purple guy") {
                document.getElementById("input3").style.backgroundColor = "green"
                document.querySelector(".valasz9").innerHTML = "<h3 class='helyes'>Helyes válasz!</h3>"
                if (pont <= 8) {
                    pont = pont + 1
                    document.querySelector("#pont").innerHTML = `<p>${pont}</p>`
                }
            } else {
                document.getElementById("input3").style.backgroundColor = "rgb(160, 0, 0)"
                document.querySelector(".valasz9").innerHTML = "<h3 class='helytelen'>Helytelen válasz!</h3>"
                document.querySelector("#pont").innerHTML = `<p>${pont}</p>`
            }
        }
        function tovabb9() {
            document.getElementById("kerdes9").style.display = "none"
            document.getElementById("kerdes10").style.display = "block"
        }
        function quiz10() {
            const valasz10 = document.getElementById("input4").value
            if (valasz10 === "hamis" || valasz10 === "Hamis" || valasz10 === "HAMIS") {
                document.getElementById("input4").style.backgroundColor = "green"
                document.querySelector(".valasz10").innerHTML = "<h3 class='helyes'>Helyes válasz!</h3>"
                if (pont <= 9) {
                    pont = pont + 1
                    document.querySelector("#pont").innerHTML = `<p>${pont}</p>`
                }
            } else {
                document.getElementById("input4").style.backgroundColor = "rgb(160, 0, 0)"
                document.querySelector(".valasz10").innerHTML = "<h3 class='helytelen'>Helytelen válasz!</h3>"
                document.querySelector("#pont").innerHTML = `<p>${pont}</p>`
            }
        }
        function tovabb10() {
            document.getElementById("kerdes10").style.display = "none"
            document.getElementById("kerdes_fajta2").style.display = "none"
            document.getElementById("ossz_pont").style.display = "none"
            document.getElementById("vege").style.display = "block"
            document.querySelector("#ossz_pontok").innerHTML = `<p>${pont}/10</p>`
            const szazalek = Number(pont) * 10
            document.querySelector("#szazalek").innerHTML = `<p>${szazalek}%</p>`

            if (pont <= 2) {
                document.getElementById("meme").innerHTML = '<img src="kepek/quiz_kepek/meme7.png">'
            }else if(pont > 2 && pont <= 4){
                document.getElementById("meme").innerHTML = '<img src="kepek/quiz_kepek/meme2.jpg">'
            }else if(pont > 4 && pont <= 6){
                document.getElementById("meme").innerHTML = '<img src="kepek/quiz_kepek/meme1.avif">'
            }else if(pont > 6 && pont <= 8){
                document.getElementById("meme").innerHTML = '<img src="kepek/quiz_kepek/meme6.png">'
            }else if(pont > 8 && pont <= 10){
                document.getElementById("meme").innerHTML = '<img src="kepek/quiz_kepek/meme5.gif">'
            }
        }