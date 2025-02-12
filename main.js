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
    .then(data => console.log('Questo è il titolo da lei ricercato :', data))
    .catch(error => console.error(error))







/* 
🎯 Bonus: Ottieni l'intero post con l'autore
Crea una funzione getPost(id) che recupera l'intero post. Concatena una seconda chiamata che aggiunge una proprietà user che contiene i dati dell'autore,
 recuperati dalla chiamata https://dummyjson.com/users/{post.userId}.
 */
