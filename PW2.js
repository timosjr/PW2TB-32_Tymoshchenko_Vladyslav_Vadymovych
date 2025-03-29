function calculate() {
    // Отримання значень від користувача
    var mv = document.getElementById("mv").value; // Донецьке газове вугілля марки ГР
    var mm = document.getElementById("mm").value; // Високосірчистий мазут марки 40
    var mg = document.getElementById("mg").value; // Природний газ із газопроводу Уренгой-Ужгород


    // додаткові значення для розрахунків
    var lowerHeatVug = 20.47; //Нижча робоча теплота згоряння палива, МДж/кг
    var lowerHeatMaz = 39.48;
    var lowerHeatGas = 33.08;
    var fractionAshVug = 0.8;//Частка золи, яка виходить з котла у вигляді леткої золи
    var fractionAshMaz = 1;
    var massContentAshVug = 25.2;//Масовий вміст золи в паливі на робочу масу, %
    var massContentAshMaz = 0.15;
    var massContentCombustibleSubstancesVug = 1.5;//Масовий вміст горючих речовин у викидах твердих частинок, %
    var massContentCombustibleSubstancesMaz = 0;
    var efficiencyCleaning = 0.985;//Ефективність очищення димових газів від твердих частинок

    //  Розрахунки
    var ev = (Math.pow(10, 6) / lowerHeatVug) * fractionAshVug * (massContentAshVug / (100 - massContentCombustibleSubstancesVug)) * (1 - efficiencyCleaning);//Показник емісії твердих частинок при спалюванні вугілля
    var vukvug = Math.pow(10, -6) * ev * lowerHeatVug * mv;//Валовий викид при спалюванні вугілля становитиме
    var em = (Math.pow(10, 6) / lowerHeatMaz) * fractionAshMaz * (massContentAshMaz / (100 - massContentCombustibleSubstancesMaz)) * (1 - efficiencyCleaning);//Показник емісії твердих частинок при спалюванні мазуту
    var vukmaz = Math.pow(10, -6) * em * lowerHeatMaz * mm;//Валовий викид при спалюванні мазуту
    var eg = 0;//Показник емісії твердих частинок при спалюванні природного газу
    var vukgaz = Math.pow(10, -6) * eg * lowerHeatGas * mg;//Валовий викид при спалюванні природного газу
    // Виведення результатів
    document.getElementById("result").innerHTML = "Результат: " +
        "<br> Показник емісії твердих частинок при спалюванні вугілля становитиме:" + ev.toFixed(2) + " г/ГДж; " +
        "<br> Валовий викид при спалюванні вугілля становитиме: " + vukvug.toFixed(2) + " т.; " +
        "<br> Показник емісії твердих частинок при спалюванні мазуту становитиме:" + em.toFixed(2) + " г/ГДж;" +
        "<br> Валовий викид при спалюванні мазуту становитиме: " + vukmaz.toFixed(2) + " т.;" +
        "<br> Показник емісії твердих частинок при спалюванні природного газу становитиме: " + eg + " г/ГДж;" +
        "<br> Валовий викид при спалюванні природного газу становитиме: " + vukgaz + " т.;";
}