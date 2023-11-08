const questions = [
    {
        questio: "Quin país té més població?",
        respostaCorrecta: "L'India",
        respostaIncorrecta: "La Xina",
    },
    {
        questio: "El primer astronàuta a trapitjar la Lluna va ser?",
        respostaCorrecta: "Neil Amstrong",
        respostaIncorrecta: "Louis Amstrong",
    },
    {
        questio: "Quien es Travis Scott",
        respostaCorrecta: "Travis Scott",
        respostaIncorrecta: "Pablo Candás",
    },
];

let indexQuestioActual = 0;
let respostesCorrectes = 0;
let respostesIncorrectes = 0;

const questioProposada = document.getElementById("questioProposada");
const btnEsquerre = document.getElementById("btnEsquerre");
const btnDret = document.getElementById("btnDret");
const missatge = document.getElementById("missatge");
const btnReiniciar = document.getElementById("reiniciar");

function barrejaRespostes(correcta, incorrecta) {
    const respostes = [correcta, incorrecta];
    respostes.sort(() => Math.random() - 0.5);
    console.log(respostes);
    return respostes;
}

function mostraQuestio() {
    if (indexQuestioActual < questions.length) {
        btnReiniciar.style.display = "none";
        const questioActual = questions[indexQuestioActual];
        questioProposada.textContent = questioActual.questio;

        const [barrejatCorrecte, barrejatIncorrecte] = barrejaRespostes(questioActual.respostaCorrecta, questioActual.respostaIncorrecta);

        btnEsquerre.textContent = barrejatCorrecte;
        btnDret.textContent = barrejatIncorrecte;
    } else {
        if (respostesCorrectes === questions.length) {
            missatge.textContent = "Ha encertat totes les preguntes!";
        } else {
            missatge.textContent = `Joc acabat. Respostes correctes: ${respostesCorrectes}, Respostes incorrectes: ${respostesIncorrectes}`;
        }

        btnEsquerre.style.display = "none";
        btnDret.style.display = "none";
        btnReiniciar.style.display = "inline-block";
    }
}

// Funcion que verifica la respuesta
function comprovaResposta(respostaSeleccionada) {
    const questioActual = questions[indexQuestioActual];

    if (respostaSeleccionada === questioActual.respostaCorrecta) {
        respostesCorrectes++;
    } else {
        respostesIncorrectes++;
    }

    indexQuestioActual++;

    mostraQuestio();
}

btnDret.addEventListener("click", () => comprovaResposta(btnDret.textContent));
btnEsquerre.addEventListener("click", () => comprovaResposta(btnEsquerre.textContent));
btnReiniciar.addEventListener("click", () => {
    indexQuestioActual = 0;
    respostesCorrectes = 0;
    respostesIncorrectes = 0;
    missatge.textContent = "";
    btnEsquerre.style.display = "inline-block";
    btnDret.style.display = "inline-block";
    btnReiniciar.style.display = "none";

    mostraQuestio();
});

// Començar el joc
mostraQuestio();
