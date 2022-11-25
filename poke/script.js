
const urlApi = "https://pokeapi.co/api/v2/pokemon?limit=5"
console.log('Avant')

async function init(){
    const q = await axios.get(urlApi)
    const r = q.data;
    const poke = r.results;

    console.log(poke);

    // q.then(response => {
    //     console.log(response.data.results)
    //        console.log("après")

    // })
    // .catch( r => {
    //     console.log(r)
    //     console.log(r.message)
    // })
    console.log("après")
}

init();
        