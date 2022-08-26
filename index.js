const pes = document.getElementById('peso');
const alt = document.getElementById('altura');
const re = document.getElementById('res');
const results = document.getElementById('results');

let resultados = [];

const check = (e) => {
    if(e <= 18) return "abaixo";
    if(e >= 18 && e <= 25) return "Ideal";
    if(e >= 25 && e <= 30) return "Pouco acima";
    if(e >= 30 && e <= 35) return "Obesidade I";
    if(e >= 35 && e <= 40) return "Obesidade II";
    if(e > 40) return "Obesidade III";
}

const maps = () => {
    results.innerHTML = `
        <div class="def">Altura</div>
        <div class="def">Peso</div>
        <div class="def">IMC</div>
        <div class="def">Classe</div>
    `;
    resultados.map(e=>{
        results.innerHTML += `
            <div class="asd">${e.altura}m</div>
            <div class="asd">${e.peso}kg</div>
            <div class="asd">${e.resultado}</div>
            <div class="asd">${e.class}</div>
        `;
    })
}

const calc = () => {            
    let altura = alt.value;
    let peso = pes.value;

    if(altura && peso){
        let res = Math.floor(peso / (altura**2));
        let cl = check(res);          
        resultados.push({"altura": altura, "peso": peso, "resultado": res, "class": cl});
        re.innerText = `IMC: ${res} - ${cl}`;
        console.log(resultados)
    }
    maps();
}

const limp = () => {
    res.innerText = "";
    alt.value = "";
    pes.value = "";
    resultados = [];
}
