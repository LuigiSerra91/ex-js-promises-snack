//🏆 Snack 1
//Ottieni il titolo di un post con una Promise.
//Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise che recupera il titolo di un post dal link https://dummyjson.com/posts/{id}

function getPostTitle(id) {
    const promessa = new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(res => res.json())
            .then(data => resolve(data.title))
            .catch(reject)

    })

    return promessa
}


getPostTitle(1)
    .then(title => console.log('Questo è il titolo da lei ricercato :', title))
    .catch(error => console.error(error))







/* 
🎯 Bonus: Ottieni l'intero post con l'autore
Crea una funzione getPost(id) che recupera l'intero post. Concatena una seconda chiamata che aggiunge una proprietà user che contiene i dati dell'autore,
 recuperati dalla chiamata https://dummyjson.com/users/{post.userId}.
 */






//🏆 Snack 2
//Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi, genera un numero casuale tra 1 e 6. Tuttavia, nel 20% dei casi, il dado si "incastra" e la Promise va in reject.


function lanciaDado() {
    const promessa = new Promise((resolve, reject) => {
        console.log('Sto lanciando il dado');

        setTimeout(() => {
            const dadoIncastrato = Math.random() < 0.2;
            const randomNumber = Math.floor(Math.random() * 6) + 1;
            if (dadoIncastrato) {
                reject('Il dado si è incastrato')
            } else {
                resolve(randomNumber)
            }
        }, 3000)
    })

    return promessa
}

lanciaDado()
    .then(risultato => console.log('il dado ha lanciato', risultato))
    .catch(error => console.error(error))




/* 🎯 Bonus: HOF con closure per memorizzare l'ultimo lancio
Modifica la funzione in creaLanciaDado(), che restituisce una closure che memorizza l'ultimo risultato. Se il numero esce due volte di fila, stampa "Incredibile!". */