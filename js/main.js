let lista = document.querySelector("#lista")

        let message;
        let attribute;

        for(let i=1; i<=100; i++){

            if(i%3==0){
                message += "Fizz"
                attribute ="aqua"
            }

            if(i%5==0){
                message += "Buzz"
                attribute ="green"
            }

            if(i%5==0 && i%3==0){
                attribute="blue"
            }

            if(i%3!=0 && i%5!=0){
                message = i
                attribute ="yellow"
            }

            lista.innerHTML += `<p class="col-1 m-1 ${attribute}">${message}</p>`
            
            message = ""
        }