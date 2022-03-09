const citron = function () {
    fetch('http://localhost:3000/api/products')
        .then(res => res.json())
        .then((array) => {
            cynthia(array)
            console.log(array); //ou
            console.log(cynthia); //ou
            console.log("voici les produits");
        })
        .catch(function(err) {
            console.log("oh non erreur");
            alert('il y a un pb');
            if(array) return;
        });
}

//Méthode 1
const tousLesCanapé = (array) => {

    array.map(fraises => {
        //Des a : liens

        //Des article

        //Images

        //Les h3

        //Les p
    })
}


//Méthode 2

//Des a : liens

//Des article

//Images

//Les h3

//Les p


    

