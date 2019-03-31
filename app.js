var marks = document.getElementById("carsMarks");
var valMark;
var inptCarYear = document.getElementById("year");
var yearCar;
var carCharacteristics;
var inptCarColor = document.getElementById("color");
var colorCar;
var registration = document.getElementById("carRegistration");
var contentRegistration = document.getElementById("contentRegistration");
var valRegistration;
var count = 0;
var fatherContent = document.getElementById("fatherContent");
var versionCar = document.getElementById("version");
var version;
var transmitionCar = document.getElementById("transmition");
var transmition;
var marks = document.getElementById("mark");
var count2 = 0;
var count3 = 0;
var selectionOption = document.getElementById("selection");
var modelC = document.getElementById("model");
var first = document.getElementById("firstOption");
var second = document.getElementById("secondOption");
var third = document.getElementById("thirdOption");
var fourth = document.getElementById("fourthOption");
var modelVal;
var colorContent = document.getElementById("colorOption");
var spanElement;
var versionOption = document.getElementById("versionSelect");
var transmitionOption = document.getElementById("transmitionSelect");
var priceCar;
var year2;
var tax;
var inptRegistration = document.getElementById("registration");
var valRegistrationCar;
var generatorCar = document.getElementById("generator");
var contentCars = document.getElementById("content-car");
var date = new Date();
var yearActual = date.getFullYear();
var firstContentCharacteristicsCar = document.getElementById("first-content-car");
var count4 = 0;
var cleanBttn = document.getElementById("cleanBttn");
var selectMarks = document.getElementById("selectMark");

//EVENTOS
inptCarYear.addEventListener("change", function () {
    yearCar = inptCarYear.value;
    carCharacteristics = new Car();
    //console.log(carCharacteristics);
    if (carCharacteristics.marca !== undefined && carCharacteristics.modelo !== undefined && carCharacteristics.anio !== undefined && carCharacteristics.color !== undefined && carCharacteristics.matrícula !== undefined && carCharacteristics.impuesto !== "$NaN" && carCharacteristics.precio !== "$NaN" && carCharacteristics.puertas !== undefined && carCharacteristics.tipo !== undefined && carCharacteristics.transmisión !== undefined && carCharacteristics.versión !== undefined && carCharacteristics.llantas === 4) {
        generatorCar.addEventListener("click", generatingCar);
    }

});

inptCarColor.addEventListener("change", function () {
    colorCar = inptCarColor.value;
    carCharacteristics = new Car();
    //console.log(carCharacteristics);
    if (carCharacteristics.marca !== undefined && carCharacteristics.modelo !== undefined && carCharacteristics.anio !== undefined && carCharacteristics.color !== undefined && carCharacteristics.matrícula !== undefined && carCharacteristics.impuesto !== "$NaN" && carCharacteristics.precio !== "$NaN" && carCharacteristics.puertas !== undefined && carCharacteristics.tipo !== undefined && carCharacteristics.transmisión !== undefined && carCharacteristics.versión !== undefined && carCharacteristics.llantas === 4) {
        generatorCar.addEventListener("click", generatingCar);
    }
});

registration.addEventListener("click", function () {
    count += 1;
    if (count === 1) {
        spanElement = document.createElement("span");
        spanElement.innerHTML = "J" + registrationLettersCars() + "-" + registrationNumbersCars(1000, 10000);
        valRegistration = spanElement.innerHTML;
        spanElement.style.marginLeft = "8px";
        contentRegistration.appendChild(spanElement);
    } else if (count >= 2) {
        fatherContent.removeChild(contentRegistration);
        contentRegistration = document.createElement("span");
        fatherContent.appendChild(contentRegistration);
        spanElement = document.createElement("span");
        spanElement.innerHTML = "J" + registrationLettersCars() + "-" + registrationNumbersCars(1000, 10000);
        valRegistration = spanElement.innerHTML;
        spanElement.style.marginLeft = "8px";
        contentRegistration.appendChild(spanElement);
    }
    carCharacteristics = new Car();
    //console.log(carCharacteristics);
    if (carCharacteristics.marca !== undefined && carCharacteristics.modelo !== undefined && carCharacteristics.anio !== undefined && carCharacteristics.color !== undefined && carCharacteristics.matrícula !== undefined && carCharacteristics.impuesto !== "$NaN" && carCharacteristics.precio !== "$NaN" && carCharacteristics.puertas !== undefined && carCharacteristics.tipo !== undefined && carCharacteristics.transmisión !== undefined && carCharacteristics.versión !== undefined && carCharacteristics.llantas === 4) {
        generatorCar.addEventListener("click", generatingCar);
    }

});

//THE USER CAN'T TYPE LETTERS OR SIGNS, JUST NUMBERS
inptCarYear.addEventListener("keypress", function (e) {
    if (e.keyCode !== 48 && e.keyCode !== 49 && e.keyCode !== 50 && e.keyCode !== 51 && e.keyCode !== 52 && e.keyCode !== 53 && e.keyCode !== 54 && e.keyCode !== 55 && e.keyCode !== 56 && e.keyCode !== 57) {
        e.preventDefault();
    }
    if (carCharacteristics.marca !== undefined && carCharacteristics.modelo !== undefined && carCharacteristics.anio !== undefined && carCharacteristics.color !== undefined && carCharacteristics.matrícula !== undefined && carCharacteristics.impuesto !== "$NaN" && carCharacteristics.precio !== "$NaN" && carCharacteristics.puertas !== undefined && carCharacteristics.tipo !== undefined && carCharacteristics.transmisión !== undefined && carCharacteristics.versión !== undefined && carCharacteristics.llantas === 4) {
        generatorCar.addEventListener("click", generatingCar);
    }
});

versionCar.addEventListener("change", function () {
    version = versionCar.value;
    carCharacteristics = new Car();
    //console.log(carCharacteristics);
    if (carCharacteristics.marca !== undefined && carCharacteristics.modelo !== undefined && carCharacteristics.anio !== undefined && carCharacteristics.color !== undefined && carCharacteristics.matrícula !== undefined && carCharacteristics.impuesto !== "$NaN" && carCharacteristics.precio !== "$NaN" && carCharacteristics.puertas !== undefined && carCharacteristics.tipo !== undefined && carCharacteristics.transmisión !== undefined && carCharacteristics.versión !== undefined && carCharacteristics.llantas === 4) {
        generatorCar.addEventListener("click", generatingCar);
    }
});

transmitionCar.addEventListener("change", function () {
    transmition = transmitionCar.value;
    carCharacteristics = new Car();
    //console.log(carCharacteristics);
    if (carCharacteristics.marca !== undefined && carCharacteristics.modelo !== undefined && carCharacteristics.anio !== undefined && carCharacteristics.color !== undefined && carCharacteristics.matrícula !== undefined && carCharacteristics.impuesto !== "$NaN" && carCharacteristics.precio !== "$NaN" && carCharacteristics.puertas !== undefined && carCharacteristics.tipo !== undefined && carCharacteristics.transmisión !== undefined && carCharacteristics.versión !== undefined && carCharacteristics.llantas === 4) {
        generatorCar.addEventListener("click", generatingCar);
    }
});

cleanBttn.addEventListener("click", function () {
    location.reload();
});

//CONSTRUCTOR FUNCTION
function Car() {
    this.marca = storingMark();
    this.modelo = storingModel();
    this.anio = storingYear();
    this.color = storingColor();
    this.matrícula = valRegistration; 
    this.llantas = 4;
    this.puertas = doors();
    this.tipo = type();
    this.versión = storingVersion();
    this.transmisión = storingTransmition();
    this.precio = "$" + determiningPrice();
    this.impuesto = "$" + determiningTax(priceCar);
}

//GENERAL FUNCTIONS
function markCars() {
    count2 += 1;
    modelC.disabled = false;
    valMark = marks.value;
    carCharacteristics = new Car();
    //console.log(carCharacteristics);
    if (count2 >= 2) {
        if (valMark === "Seleccionar") {
            modelC.disabled = true;
        }
        selectionOption.innerHTML = "Seleccione una opción"
        selectionOption.value = "Seleccionar";
        selectionOption.selected = true;
        first.innerHTML = "Seleccione una opción";
        first.value = "Seleccionar";
        second.innerHTML = "Seleccione una opción";
        second.value = "Seleccionar";
        third.innerHTML = "Seleccione una opción";
        third.value = "Seleccionar";
        fourth.innerHTML = "Seleccione una opción";
        fourth.value = "Seleccionar";
        carCharacteristics.modelo = "Seleccionar modelo";
        carCharacteristics.puertas = "Seleccionar modelo para determinarlas";
        carCharacteristics.tipo = "Seleccionar modelo para determinarlo";
        carCharacteristics.precio = "Seleccionar modelo para determinarlo";
        carCharacteristics.impuesto = "Seleccionar modelo para determinarlo";
        //console.log(carCharacteristics.modelo);
        if (carCharacteristics.marca !== undefined && carCharacteristics.modelo !== undefined && carCharacteristics.anio !== undefined && carCharacteristics.color !== undefined && carCharacteristics.matrícula !== undefined && carCharacteristics.impuesto !== "$NaN" && carCharacteristics.precio !== "$NaN" && carCharacteristics.puertas !== undefined && carCharacteristics.tipo !== undefined && carCharacteristics.transmisión !== undefined && carCharacteristics.versión !== undefined && carCharacteristics.llantas === 4) {
            generatorCar.addEventListener("click", generatingCar);
        }
    }
    if (carCharacteristics.marca !== undefined && carCharacteristics.modelo !== undefined && carCharacteristics.anio !== undefined && carCharacteristics.color !== undefined && carCharacteristics.matrícula !== undefined && carCharacteristics.impuesto !== "$NaN" && carCharacteristics.precio !== "$NaN" && carCharacteristics.puertas !== undefined && carCharacteristics.tipo !== undefined && carCharacteristics.transmisión !== undefined && carCharacteristics.versión !== undefined && carCharacteristics.llantas === 4) {
        generatorCar.addEventListener("click", generatingCar);
    }
}

function storingYear() {
    var yearC = yearCar;
    return yearC;
}

function storingColor() {
    var colorC = colorCar;
    return colorC;
}

//RANDOM LETTERS FOR THE REGISTRATION
function registrationLettersCars() {
    var alphabet = new Array("A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "Ñ", "P", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
    var letterRandom = alphabet[Math.floor(Math.random() * alphabet.length)] + alphabet[Math.floor(Math.random() * alphabet.length)];
    return letterRandom;
}

//RANDOM NUMBERS FOR THE REGISTRATION
function registrationNumbersCars(min, max) {
    var numberRandom = Math.floor(Math.random() * (max - min)) + min;
    return numberRandom;
}

function storingVersion() {
    var versionC = version;
    return versionC;
}

function storingTransmition() {
    var transmitionC = transmition;
    return transmitionC;
}

function model() {
    if (valMark === "Nissan") {
        selectionOption.innerHTML = "Seleccione una opción"
        selectionOption.value = "Seleccionar";
        selectionOption.selected = true;
        first.innerHTML = "March (Hatchback)";
        first.value = "March";
        second.innerHTML = "Versa (Sedán)";
        second.value = "Versa";
        third.innerHTML = "X-Trail (SUV)";
        third.value = "X-Trail";
        fourth.innerHTML = "37OZ (Coupé)";
        fourth.value = "37OZ";
    } else if (valMark === "Ford") {
        selectionOption.innerHTML = "Seleccione una opción"
        selectionOption.value = "Seleccionar";
        selectionOption.selected = true;
        first.innerHTML = "Figo (Hatchback)";
        first.value = "Figo";
        second.innerHTML = "Fiesta (Sedán)";
        second.value = "Fiesta";
        third.innerHTML = "EcoSport (SUV)";
        third.value = "EcoSport";
        fourth.innerHTML = "Mustang (Coupé)";
        fourth.value = "Mustang";
    } else if (valMark === "Chevrolet") {
        selectionOption.innerHTML = "Seleccione una opción"
        selectionOption.value = "Seleccionar";
        selectionOption.selected = true;
        first.innerHTML = "Beat (Hatchback)";
        first.value = "Beat";
        second.innerHTML = "Aveo (Sedán)";
        second.value = "Aveo";
        third.innerHTML = "Trax (SUV)";
        third.value = "Trax";
        fourth.innerHTML = "Camaro (Coupé)";
        fourth.value = "Camaro";
    } else if (valMark === "Mazda") {
        selectionOption.innerHTML = "Seleccione una opción"
        selectionOption.value = "Seleccionar";
        selectionOption.selected = true;
        first.innerHTML = "Mazda2 (Hatchback)";
        first.value = "Mazda2";
        second.innerHTML = "Mazda3 (Sedán)";
        second.value = "Mazda3";
        third.innerHTML = "Mazda CX-3 (SUV)";
        third.value = "Mazda CX-3";
        fourth.innerHTML = "Mazda MX-5 (Coupé)";
        fourth.value = "Mazda MX-5";
    } else if (valMark === "Audi") {
        selectionOption.innerHTML = "Seleccione una opción"
        selectionOption.value = "Seleccionar";
        selectionOption.selected = true;
        first.innerHTML = "Audi A1 (Hatchback)";
        first.value = "Audi A1";
        second.innerHTML = "Audi A3 (Sedán)";
        second.value = "Audi A3";
        third.innerHTML = "Audi Q7 (SUV)";
        third.value = "Audi Q7";
        fourth.innerHTML = "Audi R8 (Coupé)";
        fourth.value = "Audi R8";
    }
    if (carCharacteristics.marca !== undefined && carCharacteristics.modelo !== undefined && carCharacteristics.anio !== undefined && carCharacteristics.color !== undefined && carCharacteristics.matrícula !== undefined && carCharacteristics.impuesto !== "$NaN" && carCharacteristics.precio !== "$NaN" && carCharacteristics.puertas !== undefined && carCharacteristics.tipo !== undefined && carCharacteristics.transmisión !== undefined && carCharacteristics.versión !== undefined && carCharacteristics.llantas === 4) {
        generatorCar.addEventListener("click", generatingCar);
    }
}

function modelCars() {
    modelVal = modelC.value;
    carCharacteristics = new Car();
    //console.log(carCharacteristics);
    if (carCharacteristics.marca !== undefined && carCharacteristics.modelo !== undefined && carCharacteristics.anio !== undefined && carCharacteristics.color !== undefined && carCharacteristics.matrícula !== undefined && carCharacteristics.impuesto !== "$NaN" && carCharacteristics.precio !== "$NaN" && carCharacteristics.puertas !== undefined && carCharacteristics.tipo !== undefined && carCharacteristics.transmisión !== undefined && carCharacteristics.versión !== undefined && carCharacteristics.llantas === 4) {
        generatorCar.addEventListener("click", generatingCar);
    }
}

function storingMark() {
    var markC = valMark;
    return markC;
    if (carCharacteristics.marca !== undefined && carCharacteristics.modelo !== undefined && carCharacteristics.anio !== undefined && carCharacteristics.color !== undefined && carCharacteristics.matrícula !== undefined && carCharacteristics.impuesto !== "$NaN" && carCharacteristics.precio !== "$NaN" && carCharacteristics.puertas !== undefined && carCharacteristics.tipo !== undefined && carCharacteristics.transmisión !== undefined && carCharacteristics.versión !== undefined && carCharacteristics.llantas === 4) {
        generatorCar.addEventListener("click", generatingCar);
    }
}

function storingModel() {
    var modelC = modelVal;
    return modelC;
    if (carCharacteristics.marca !== undefined && carCharacteristics.modelo !== undefined && carCharacteristics.anio !== undefined && carCharacteristics.color !== undefined && carCharacteristics.matrícula !== undefined && carCharacteristics.impuesto !== "$NaN" && carCharacteristics.precio !== "$NaN" && carCharacteristics.puertas !== undefined && carCharacteristics.tipo !== undefined && carCharacteristics.transmisión !== undefined && carCharacteristics.versión !== undefined && carCharacteristics.llantas === 4) {
        generatorCar.addEventListener("click", generatingCar);
    }
}

function doors() {
    var doors;
    var markCar = modelVal;
    if (markCar === "March" || markCar === "Figo" || markCar === "Beat" || markCar === "Mazda2" || markCar === "Audi A1") {
        doors = 5;
    } else if (markCar === "Versa" || markCar === "Fiesta" || markCar === "Aveo" || markCar === "Mazda3" || markCar === "Audi A3") {
        doors = 4;
    } else if (markCar === "X-Trail" || markCar === "EcoSport" || markCar === "Trax" || markCar === "Mazda CX-3" || markCar === "Audi Q7") {
        doors = 4;
    } else if (markCar === "37OZ" || markCar === "Mustang" || markCar === "Camaro" || markCar === "Mazda MX-5" || markCar === "Audi R8") {
        doors = 2;
    }
    return doors;
}

function type() {
    var typeCar;
    var marksCar = modelVal;
    if (marksCar === "March" || marksCar === "Figo" || marksCar === "Beat" || marksCar === "Mazda2" || marksCar === "Audi A1") {
        typeCar = "Hatchback";
    } else if (marksCar === "Versa" || marksCar === "Fiesta" || marksCar === "Aveo" || marksCar === "Mazda3" || marksCar === "Audi A3") {
        typeCar = "Sedán";
    } else if (marksCar === "X-Trail" || marksCar === "EcoSport" || marksCar === "Trax" || marksCar === "Mazda CX-3" || marksCar === "Audi Q7") {
        typeCar = "SUV";
    } else if (marksCar === "37OZ" || marksCar === "Mustang" || marksCar === "Camaro" || marksCar === "Mazda MX-5" || marksCar === "Audi R8") {
        typeCar = "Coupé";
    }
    return typeCar;
}

function determiningPrice() {
    year2 = parseInt(yearCar);
    var basePrice = 300000;
    var totalCalculation;
    if (year2 > yearActual) {
        alert("Favor de ingresar únicamente año actual o anterior al mismo");
        return;
    } else if (year2 === yearActual) {
        priceCar = basePrice;
    } else {
        totalCalculation = basePrice - (basePrice * ((yearActual - year2) * 0.15));
        if (totalCalculation < 30000) {
            priceCar = 30000;
        } else {
            priceCar = totalCalculation;
        }
    }
    return priceCar;
}

function determiningTax(price) {
    tax = price * 0.1;
    return tax;
}

function generatingCar() {
    count3 += 1;
    if (count3 === 1) {
        var paragraph = document.createElement("p");
        var paragraph2 = document.createElement("p");
        var paragraph3 = document.createElement("p");
        var paragraph4 = document.createElement("p");
        var paragraph5 = document.createElement("p");
        var paragraph6 = document.createElement("p");
        var paragraph7 = document.createElement("p");
        var paragraph8 = document.createElement("p");
        var paragraph9 = document.createElement("p");
        var paragraph10 = document.createElement("p");
        var paragraph11 = document.createElement("p");
        var paragraph12 = document.createElement("p");
        paragraph.setAttribute("class", "space-top");
        paragraph2.setAttribute("class", "space-top");
        paragraph3.setAttribute("class", "space-top");
        paragraph4.setAttribute("class", "space-top");
        paragraph5.setAttribute("class", "space-top");
        paragraph6.setAttribute("class", "space-top");
        paragraph7.setAttribute("class", "space-top");
        paragraph8.setAttribute("class", "space-top");
        paragraph9.setAttribute("class", "space-top");
        paragraph10.setAttribute("class", "space-top");
        paragraph11.setAttribute("class", "space-top");
        paragraph12.setAttribute("class", "space-top");
        paragraph12.style.marginBottom = "20px";
        paragraph.innerHTML = "<strong>Marca:</strong> " + carCharacteristics.marca;
        paragraph2.innerHTML = "<strong>Modelo:</strong> " + carCharacteristics.modelo;
        paragraph3.innerHTML = "<strong>Año:</strong> " + carCharacteristics.anio;
        paragraph4.innerHTML = "<strong>Color:</strong> " + carCharacteristics.color;
        paragraph5.innerHTML = "<strong>Matrícula:</strong> " + carCharacteristics.matrícula;
        paragraph6.innerHTML = "<strong>Llantas:</strong> " + carCharacteristics.llantas;
        paragraph7.innerHTML = "<strong>Puertas:</strong> " + carCharacteristics.puertas;
        paragraph8.innerHTML = "<strong>Tipo:</strong> " + carCharacteristics.tipo;
        paragraph9.innerHTML = "<strong>Versión:</strong> " + carCharacteristics.versión;
        paragraph10.innerHTML = "<strong>Transmisión:</strong> " + carCharacteristics.transmisión;
        paragraph11.innerHTML = "<strong>Precio:</strong> " + carCharacteristics.precio;
        paragraph12.innerHTML = "<strong>Impuesto:</strong> " + carCharacteristics.impuesto;
        contentCars.appendChild(paragraph);
        contentCars.appendChild(paragraph2);
        contentCars.appendChild(paragraph3);
        contentCars.appendChild(paragraph4);
        contentCars.appendChild(paragraph5);
        contentCars.appendChild(paragraph6);
        contentCars.appendChild(paragraph7);
        contentCars.appendChild(paragraph8);
        contentCars.appendChild(paragraph9);
        contentCars.appendChild(paragraph10);
        contentCars.appendChild(paragraph11);
        contentCars.appendChild(paragraph12);
    } else if (count3 >= 2) {
        firstContentCharacteristicsCar.removeChild(contentCars);
        contentCars = document.createElement("div");
        firstContentCharacteristicsCar.appendChild(contentCars);
        paragraph = document.createElement("p");
        paragraph2 = document.createElement("p");
        paragraph3 = document.createElement("p");
        paragraph4 = document.createElement("p");
        paragraph5 = document.createElement("p");
        paragraph6 = document.createElement("p");
        paragraph7 = document.createElement("p");
        paragraph8 = document.createElement("p");
        paragraph9 = document.createElement("p");
        paragraph10 = document.createElement("p");
        paragraph11 = document.createElement("p");
        paragraph12 = document.createElement("p");
        paragraph.setAttribute("class", "space-top");
        paragraph2.setAttribute("class", "space-top");
        paragraph3.setAttribute("class", "space-top");
        paragraph4.setAttribute("class", "space-top");
        paragraph5.setAttribute("class", "space-top");
        paragraph6.setAttribute("class", "space-top");
        paragraph7.setAttribute("class", "space-top");
        paragraph8.setAttribute("class", "space-top");
        paragraph9.setAttribute("class", "space-top");
        paragraph10.setAttribute("class", "space-top");
        paragraph11.setAttribute("class", "space-top");
        paragraph12.setAttribute("class", "space-top");
        paragraph12.style.marginBottom = "20px";
        paragraph.innerHTML = "<strong>Marca:</strong> " + carCharacteristics.marca;
        paragraph2.innerHTML = "<strong>Modelo:</strong> " + carCharacteristics.modelo;
        paragraph3.innerHTML = "<strong>Año:</strong> " + carCharacteristics.anio;
        paragraph4.innerHTML = "<strong>Color:</strong> " + carCharacteristics.color;
        paragraph5.innerHTML = "<strong>Matrícula:</strong> " + carCharacteristics.matrícula;
        paragraph6.innerHTML = "<strong>Llantas:</strong> " + carCharacteristics.llantas;
        paragraph7.innerHTML = "<strong>Puertas:</strong> " + carCharacteristics.puertas;
        paragraph8.innerHTML = "<strong>Tipo:</strong> " + carCharacteristics.tipo;
        paragraph9.innerHTML = "<strong>Versión:</strong> " + carCharacteristics.versión;
        paragraph10.innerHTML = "<strong>Transmisión:</strong> " + carCharacteristics.transmisión;
        paragraph11.innerHTML = "<strong>Precio:</strong> " + carCharacteristics.precio;
        paragraph12.innerHTML = "<strong>Impuesto:</strong> " + carCharacteristics.impuesto;
        contentCars.appendChild(paragraph);
        contentCars.appendChild(paragraph2);
        contentCars.appendChild(paragraph3);
        contentCars.appendChild(paragraph4);
        contentCars.appendChild(paragraph5);
        contentCars.appendChild(paragraph6);
        contentCars.appendChild(paragraph7);
        contentCars.appendChild(paragraph8);
        contentCars.appendChild(paragraph9);
        contentCars.appendChild(paragraph10);
        contentCars.appendChild(paragraph11);
        contentCars.appendChild(paragraph12);
    }
}








