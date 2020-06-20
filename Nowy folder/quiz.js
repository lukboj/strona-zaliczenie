function wyrzucenie() {

    var element = document.getElementById('quiz');//button

        var duzeWlosy = ['Akita amerykańska' , 'Alaskan malamute', 'Owczarek Portugalski', 'Podenco z Ibizy', 'Sarplaninac'];
        var duzeKrotkie = ['Akita', 'Dog Argentyński', 'Doberman', 'Greyhound', 'Owczarek z Majorki'];
        var maleKrotkie =['Basenji', 'Chihuahua', 'Rosyjski toy', 'Terier japoński', 'Pinczer miniaturka' ];
        var maleWlosy = ['Bichon frise' , 'Bolończyk', 'Border terrier', 'chin japoński', 'Coton de Tulear' ];
        var duzeBezwlosow = ['Nagi pies peruwiański', 'Nagi pies meksykański'];
        var maleBezwlosow ='Grzywacz chiński';
        var rasa = "Wprowadż więcej odpwoiedzi!";


        var imie = document.getElementById('imie').value;
        var odpowiedzi = document.forms[0];
        var punktyGracza = 0;
        var txt = "";
        var bez = false;
        var wynik = null;

        if(imie == null)
        {
            alert("Miałeś podać imie!");
        }

        for (i = 0; i < 3; i++) {
            if (odpowiedzi[i].checked) {
                txt = "";
                txt = odpowiedzi[i].value ;
                if(txt === "Mały pies"){
                    punktyGracza += 0;
                }else if(txt === "Duży pies"){
                    punktyGracza += 2;
                }else {
                    punktyGracza += 1;
                }
            }

        }

        for (i = 3; i < 6; i++) {
            if (odpowiedzi[i].checked) {
                txt = "";
                txt = odpowiedzi[i].value ;
                if(txt === "Tak"){
                    punktyGracza += 2;
                }else if(txt === "Nie"){
                    punktyGracza += 0;
                }else {
                    punktyGracza += 1;
                }
            }

        }

        for (i = 11; i < 13; i++) {
            if (odpowiedzi[i].checked) {
                txt = "";
                txt = odpowiedzi[i].value ;
                if(txt === "Tak"){
                    punktyGracza += 0;
                }else if(txt === "Nie"){
                    punktyGracza += 2;
                }
            }

        }

        for (i = 15; i < 18; i++) {
            if (odpowiedzi[i].checked) {
                txt = "";
                txt = odpowiedzi[i].value ;
                if(txt === "Tak"){
                    punktyGracza += 0;
                }else if(txt === "Nie"){
                    punktyGracza += 2;
                }
            }

        }

        for (i = 6; i < 9; i++) {
            if (odpowiedzi[i].checked) {
                txt = "";
                txt = odpowiedzi[i].value ;
                if(txt === "Krótka"){

                    if(punktyGracza > 4)
                    {
                        rasa = duzeKrotkie
                    }else
                    {
                        rasa = maleKrotkie
                    }
                }else if(txt === "Długa"){

                    if(punktyGracza > 4)
                    {
                        rasa = duzeWlosy;
                    }else
                    {
                        rasa = maleWlosy;
                    }
                }else {

                    bez = true;
                    if(punktyGracza > 4)
                    {
                        rasa = duzeBezwlosow;

                    }else
                    {
                        rasa = maleBezwlosow;

                    }
                }
            }
        }
        
        wynik = rasa;
        for (i = 9; i < 15; i++) {

            if (odpowiedzi[i].checked)  {
                txt = "";
                txt = odpowiedzi[i].value ;
                if( !bez )
                {
                    if(txt === "Czujny"){
                        wynik = rasa[0];
                    }else if(txt === "Spokojny"){
                        wynik = rasa[1];
                    }else if(txt === "Aktywny"){
                        wynik = rasa[2];
                    }else if(txt === "Przyjacielski"){
                        wynik = rasa[3];
                    }else {
                        wynik = rasa[4];
                    }
                }
            }

        }

        var br = document.createElement('br');
        var lista = document.getElementById('odp');

        if (lista.hasChildNodes()) {

                while (lista.firstChild) {
                    lista.removeChild(lista.firstChild);
                }
            }

        var napis = imie + ', Oto wynik twojego quizu:';
        var napis2 =  ' Gratulacje!  Najbardziej odpowiedni pies dla Ciebie to: ';
        var napisText2 = document.createTextNode(napis2);
        var napisText = document.createTextNode(napis);

        if(wynik == null) {

            lista.appendChild(napisText);
            lista.appendChild(br);
            lista.appendChild(napisText2);
            var ul = document.createElement('ul');
            for(i =0; i<rasa.length; i++) {
                var li = document.createElement('li');
                var liText = document.createTextNode(rasa[i]);
                li.appendChild(liText);
                ul.appendChild(li);
            }

        } else if(Array.isArray(wynik)) {

            lista.appendChild(napisText);
            lista.appendChild(br);
            lista.appendChild(napisText2);
            var ul = document.createElement('ul');
            for(i =0; i<rasa.length; i++) {
                var li = document.createElement('li');
                var liText = document.createTextNode(wynik[i]);
                li.appendChild(liText);
                ul.appendChild(li);
            }

        }else if(wynik == "Wprowadż więcej odpwoiedzi!"){

            alert("Wprowadż więcej odpwoiedzi!");

        } else {

            lista.appendChild(napisText);
            lista.appendChild(br);
            lista.appendChild(napisText2);
            var ul = document.createElement('ul');
            var li = document.createElement('li');
            var liText = document.createTextNode(wynik);
            li.appendChild(liText);
            ul.appendChild(li);

        }
        lista.appendChild(ul);

        var przycisk = document.getElementById('czyszczenie');

        przycisk.style.setProperty('display', 'block');
        element.style.setProperty('display', 'none');

}

function  wybuchnij() {

    var element = document.getElementById('quiz');//button
    var przycisk = document.getElementById('czyszczenie');

    element.style.visibility = 'visible';
    element.style.display = 'initial';
    element.style.setProperty('display', 'block');
    przycisk.style.setProperty('display', 'none');

    var lista = document.getElementById('odp');

    if (lista.hasChildNodes()) {

        while (lista.firstChild) {
            lista.removeChild(lista.firstChild);
        }
    }

    var odpowiedzi = document.forms[0];
    odpowiedzi.reset();

}
