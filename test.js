async function parallelCalls(urls) {
    try {
        const responses = await Promise.all(urls.map(url => fetch(url)));
        const responseData = await Promise.all(responses.map(response => response.json()));
        console.log("Réponses de toutes les URL:", responseData);
    } catch (error) {
        console.error("Une erreur s'est produite lors de l'exécution des appels parallèles:", error.message);
    }
}
const urls = ['https://jsonplaceholder.typicode.com/posts', 'https://api.thedogapi.com/v1/breeds', 'https://api.thedogapi.com/v1/images/search']; // Remplacez 'url1', 'url2', 'url3' par les URLs réelles que vous souhaitez tester
parallelCalls(urls);

async function chainedAsyncFunctions() {
    await firstFunction();
    await secondFunction();
    await thirdFunction();
}

async function firstFunction() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Première fonction terminée");
}

async function secondFunction() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Deuxième fonction terminée");
}

async function thirdFunction() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Troisième fonction terminée");
}
chainedAsyncFunctions();

async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        console.log(value);
        await new Promise(resolve => setTimeout(resolve, 100)); 
    }
}
const values = [1, 2, 3, 4];
iterateWithAsyncAwait(values);