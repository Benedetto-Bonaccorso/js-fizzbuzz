let lista = document.querySelector("#lista")

        let message;

        for(let i=1; i<=100; i++){

            if(i%3==0){
                message += "Fitz"
            }

            if(i%5==0){
                message += "Buzz"
            }

            if(i%3!=0 && i%5!=0){
                message = i
            }

            lista.innerHTML += `<li>${message}</li>`
            
            message = ""
        }