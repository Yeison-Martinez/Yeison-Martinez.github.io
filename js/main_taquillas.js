
var input = document.getElementsByClassName("input");
var ttl_cant50 = document.getElementById("ttl_cant50");
var ttl_cant20 = document.getElementById("ttl_cant20");
var ttl_cant100 = document.getElementById("ttl_cant100");
var ttl_cant10 = document.getElementById("ttl_cant10");
var ttl_cant5 = document.getElementById("ttl_cant5");
var ttl_cant2 = document.getElementById("ttl_cant2");
var ttl_cant1 = document.getElementById("ttl_cant1");
var ttlbill = document.getElementById("ttl_bill");
var ttl_plas = document.getElementById("ttl_plas");
var ttl_cant50k = document.getElementById("ttl_cant50k");
var ttl_cant20k = document.getElementById("ttl_cant20k");
var ttl_cantB = document.getElementById("ttl_cant--b");
var ttl_dinero = document.getElementById("ttl_dinero");
var can100_p = document.getElementById("can100_p");
var can50_p = document.getElementById("can50_p");
var can20_p = document.getElementById("can20_p");
var can10_p = document.getElementById("can10_p");
var can5_p = document.getElementById("can5_p");
var can2_p = document.getElementById("can2_p");
var can1_p = document.getElementById("can1_p");
var can100_b = document.getElementById("can100_b");
var can50_b = document.getElementById("can50_b");
var can20_b = document.getElementById("can20_b");
var can10_b = document.getElementById("can10_b");
var can5_b = document.getElementById("can5_b");
var can2_b = document.getElementById("can2_b");
var can1_b = document.getElementById("can1_b");
var ttl100_p = document.getElementById("ttl100_p");
var ttl50_p = document.getElementById("ttl50_p");
var ttl20_p = document.getElementById("ttl20_p");
var ttl10_p = document.getElementById("ttl10_p");
var ttl5_p = document.getElementById("ttl5_p");
var ttl2_p = document.getElementById("ttl2_p");
var ttl1_p = document.getElementById("ttl1_p");
var ttl100_b = document.getElementById("ttl100_b");
var ttl50_b = document.getElementById("ttl50_b");
var ttl20_b = document.getElementById("ttl20_b");
var ttl10_b = document.getElementById("ttl10_b");
var ttl5_b = document.getElementById("ttl5_b");
var ttl2_b = document.getElementById("ttl2_b");
var ttl1_b = document.getElementById("ttl1_b");
var ttl_billB = document.getElementById("ttl_billB");
var ttl_billP = document.getElementById("ttl_billP");
var mala = document.getElementById("mala");
var cuadrada = document.getElementById("cuadrada");
var superior = document.getElementById("superior");
var mensajeFaltante = document.getElementById("mensajeFaltante");
var mensajeCuadrado = document.getElementById("mensajeCuadrado");
var mensajeSobrante = document.getElementById("mensajeSobrante");

const meses = [
    'Ene',
    'Feb',
    'Mar',
    'Abr',
    'May',
    'Jun',
    'Jul',
    'Ago',
    'Sep',
    'Oct',
    'Nov',
    'Dic'
];

// Obtener la fecha actual
var fechaActual = new Date();

// Formatear la fecha en formato AAAA-MM-DD para el input de tipo "date"
var dia = ("0" + fechaActual.getDate()).slice(-2);
var mes = ("0" + (fechaActual.getMonth() + 1)).slice(-2);
var año = fechaActual.getFullYear();
var fechaFormateada = dia + " - " + meses[mes - 1] + " - " + año;

// Establecer la fecha en el campo de entrada de tipo "date"
document.getElementById("fecha_actual").innerHTML = fechaFormateada;
document.getElementById("fecha_imprimir").innerHTML = fechaFormateada;

function Separador(numero) {
    let partesNumero = numero.toString().split('.');
    partesNumero[0] = partesNumero[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return partesNumero.join('.');
}

// BOTON PARA CALCULAR
var boton = document.getElementById('calcular');
boton.addEventListener('click', calc);

// FUNCION PARA CALCULAR LA BASE
function calc() {

    // MOSTRAR CONTENEDOR DE RESULTADOS
    var cajaResultado = document.getElementById("resultado");
    cajaResultado.classList.add("showResult");


    // BILLETES DE 100K
    var bill100 = parseFloat(document.getElementById("bill100").value);
    var vlrBill100 = bill100 * 100000;
    var vlrBill100_s = Separador(vlrBill100);
    ttl_cant100.innerHTML = `$ ${vlrBill100_s}`;

    // BILLETES DE 50K
    var bill50 = parseFloat(document.getElementById("bill50").value);
    var vlrBill50 = bill50 * 50000;
    var vlrBill50_s = Separador(vlrBill50);
    ttl_cant50.innerHTML = `$ ${vlrBill50_s}`;

    // BILLETES DE 20K
    var bill20 = parseFloat(document.getElementById("bill20").value);
    var vlrBill20 = bill20 * 20000;
    var vlrBill20_s = Separador(vlrBill20);
    ttl_cant20.innerHTML = `$ ${vlrBill20_s}`;

    // BILLETES DE 10K
    var bill10 = parseFloat(document.getElementById("bill10").value);
    var vlrBill10 = bill10 * 10000;
    var vlrBill10_s = Separador(vlrBill10);
    ttl_cant10.innerHTML = `$ ${vlrBill10_s}`;

    // BILLETES DE 5K
    var bill5 = parseFloat(document.getElementById("bill5").value);
    var vlrBill5 = bill5 * 5000;
    var vlrBill5_s = Separador(vlrBill5);
    ttl_cant5.innerHTML = `$ ${vlrBill5_s}`;

    // BILLETES DE 2K
    var bill2 = parseFloat(document.getElementById("bill2").value);
    var vlrBill2 = bill2 * 2000;
    var vlrBill2_s = Separador(vlrBill2);
    ttl_cant2.innerHTML = `$ ${vlrBill2_s}`;

    // BILLETES DE 1K
    var bill1 = parseFloat(document.getElementById("bill1").value);
    var vlrBill1 = bill1 * 1000;
    var vlrBill1_s = Separador(vlrBill1);
    ttl_cant1.innerHTML = `$ ${vlrBill1_s}`;

    // SUMA DE TOTALES DE BILLETES
    var ttlbills = vlrBill100 + vlrBill50 + vlrBill20 + vlrBill10 + vlrBill5 + vlrBill2 + vlrBill1;
    var ttlbills_s = Separador(ttlbills);
    ttlbill.innerHTML = `$ ${ttlbills_s}`;

    // TOTAL PLASTICO
    var ttl_deb = parseFloat(document.getElementById("tarj_deb--vlr").value);
    var ttl_cre = parseFloat(document.getElementById("tarj_cre--vlr").value);
    var sum_plas = ttl_deb + ttl_cre;
    var sum_plas_s = Separador(sum_plas);
    ttl_plas.innerHTML = `$ ${sum_plas_s}`;

    // TOTAL BOLETAS DE 20K
    var cant20k = parseFloat(document.getElementById("cant20k").value);
    var vlr_b20 = cant20k * 20000;
    var vlr_b20_s = Separador(vlr_b20);
    ttl_cant20k.innerHTML = `$ ${vlr_b20_s}`;

    // TOTAL BOLETAS DE 50K
    var cant50k = parseFloat(document.getElementById("cant50k").value);
    var vlr_b50 = cant50k * 50000;
    var vlr_b50_s = Separador(vlr_b50);
    ttl_cant50k.innerHTML = `$ ${vlr_b50_s}`;

    // PRODUCIDO TOTAL
    var sum_bol = vlr_b50 + vlr_b20;
    var sum_bol_s = Separador(sum_bol);
    ttl_cantB.innerHTML = `$ ${sum_bol_s}`;

    //  TOTAL DE DINERO
    var sum_din = ttlbills + sum_plas;
    var sum_din_s = Separador(sum_din);
    ttl_dinero.innerHTML = `$ ${sum_din_s}`;

    //--------------------------------------------------------------------
    // BILLETES PARA EL PRODUCIDO
    // -I13-
    var producido = (sum_bol - sum_plas) / 100000;
    // var b3 = bill100;
    // -J13-
    producido = Math.trunc(producido);
    // -K13-
    if (producido > bill100) {
        var paso3 = bill100;
    } else {
        var paso3 = producido;
    }
    // -L13-
    var paso4 = paso3 * 100000;
    var paso4_s = Separador(paso4);
    ttl100_p.innerHTML = `$ ${paso4_s}`;
    // -M13-
    var paso5 = (sum_bol - sum_plas) - paso4;
    // CANTIDAD DEL BILLETE DE 100K
    can100_p.innerHTML = `${paso3}`;
    // --------------------------------------------------------------------
    // -I14-
    var paso6 = paso5 / 50000;
    // -J14-
    paso6 = Math.trunc(paso6);
    // -K14-
    if (paso6 > bill50) {
        var paso7 = bill50;
    } else {
        var paso7 = paso6;
    }
    // -L14-
    var paso8 = paso7 * 50000;
    var paso8_s = Separador(paso8);
    ttl50_p.innerHTML = `$ ${paso8_s}`;
    // -M14-
    var paso9 = paso5 - paso8;
    // CANTIDAD DE BILLETE DE 50K
    can50_p.innerHTML = `${paso7}`;
    // ---------------------------------------------------------------------
    // -I15-
    var paso10 = paso9 / 20000;
    // -J15-
    paso10 = Math.trunc(paso10);
    // -K15-
    if (paso10 > bill20) {
        var paso11 = bill20;
    } else {
        var paso11 = paso10;
    }
    // -L15-
    var paso12 = paso11 * 20000;
    var paso12_s = Separador(paso12);
    ttl20_p.innerHTML = `$ ${paso12_s}`;
    // -M15-
    var paso13 = paso9 - paso12;
    // CANTIDAD BILLETAS DE 20K
    can20_p.innerHTML = `${paso11}`;
    // ---------------------------------------------------------------------
    // -I16-
    var paso14 = paso13 / 10000;
    // -J16-
    paso14 = Math.trunc(paso14);
    // -K16-
    if (paso14 > bill10) {
        var paso15 = bill10;
    } else {
        var paso15 = paso14;
    }
    // -L16-
    var paso16 = paso15 * 10000;
    var paso16_s = Separador(paso16);
    ttl10_p.innerHTML = `$ ${paso16_s}`;
    // -M16-
    var paso17 = paso13 - paso16;
    // CANTIDAD BILLETAS DE 10K
    can10_p.innerHTML = `${paso15}`;
    // ---------------------------------------------------------------------
    // -I17-
    var paso18 = paso17 / 5000;
    // -J17-
    paso18 = Math.trunc(paso18);
    // -K17-
    if (paso18 > bill5) {
        var paso19 = bill5;
    } else {
        var paso19 = paso18;
    }
    // -L17-
    var paso20 = paso19 * 5000;
    var paso20_s = Separador(paso20);
    ttl5_p.innerHTML = `$ ${paso20_s}`;
    // -M17-
    var paso21 = paso17 - paso20;
    // CANTIDAD BILLETAS DE 5K
    can5_p.innerHTML = `${paso19}`;
    // ---------------------------------------------------------------------
    // -I18-
    var paso22 = paso21 / 2000;
    // -J18-
    paso22 = Math.trunc(paso22);
    // -K18-
    if (paso22 > bill2) {
        var paso23 = bill2;
    } else {
        var paso23 = paso22;
    }
    // -L18-
    var paso24 = paso23 * 2000;
    var paso24_s = Separador(paso24);
    ttl2_p.innerHTML = `$ ${paso24_s}`;
    // -M18-
    var paso25 = paso21 - paso24;
    // CANTIDAD BILLETAS DE 2K
    can2_p.innerHTML = `${paso23}`;
    // ---------------------------------------------------------------------
    // -I19-
    var paso26 = paso25 / 1000;
    // -J19-
    paso26 = Math.trunc(paso26);
    // -K19-
    if (paso26 > bill1) {
        var paso27 = bill1;
    } else {
        var paso27 = paso26;
    }
    // -L19-
    var paso28 = paso27 * 1000;
    var paso28_s = Separador(paso28);
    ttl1_p.innerHTML = `$ ${paso28_s}`;
    // -M18-
    var paso25 = paso21 - paso24;
    // CANTIDAD BILLETAS DE 1K
    can1_p.innerHTML = `${paso27}`;

    // --------------------------------------------------------------------
    // SUMA DE BILLETES PARA EL PRODUCIDO
    var suma_billP = (paso4 + paso8 + paso12 + paso16 + paso20 + paso24 + paso28);
    var suma_billP_s = Separador(suma_billP);
    ttl_billP.innerHTML = `$ ${suma_billP_s}`;
    // --------------------------------------------------------------------

    // BILLETES PARA LA BASE
    var bill100_b = bill100 - paso3;
    var bill50_b = bill50 - paso7;
    var bill20_b = bill20 - paso11;
    var bill10_b = bill10 - paso15;
    var bill5_b = bill5 - paso19;
    var bill2_b = bill2 - paso23;
    var bill1_b = bill1 - paso27;

    // BILLETES DE 100K
    can100_b.innerHTML = `${bill100_b}`;
    var bill100b = bill100_b * 100000;
    var bill100b_s = Separador(bill100b);
    ttl100_b.innerHTML = `$ ${bill100b_s}`;

    // BILLETES DE 50K
    can50_b.innerHTML = `${bill50_b}`;
    var bill50b = bill50_b * 50000;
    var bill50b_s = Separador(bill50b);
    ttl50_b.innerHTML = `$ ${bill50b_s}`;

    // BILLETES DE 20K
    can20_b.innerHTML = `${bill20_b}`;
    var bill20b = bill20_b * 20000;
    var bill20b_s = Separador(bill20b);
    ttl20_b.innerHTML = `$ ${bill20b_s}`;

    // BILLETES DE 10K
    can10_b.innerHTML = `${bill10_b}`;
    var bill10b = bill10_b * 10000;
    var bill10b_s = Separador(bill10b);
    ttl10_b.innerHTML = `$ ${bill10b_s}`;

    // BILLETES DE 5K
    can5_b.innerHTML = `${bill5_b}`;
    var bill5b = bill5_b * 5000;
    var bill5b_s = Separador(bill5b);
    ttl5_b.innerHTML = `$ ${bill5b_s}`;

    // BILLETES DE 2K
    can2_b.innerHTML = `${bill2_b}`;
    var bill2b = bill2_b * 2000;
    var bill2b_s = Separador(bill2b);
    ttl2_b.innerHTML = `$ ${bill2b_s}`;

    // BILLETES DE 1K
    can1_b.innerHTML = `${bill1_b}`;
    var bill1b = bill1_b * 1000;
    var bill1b_s = Separador(bill1b);
    ttl1_b.innerHTML = `$ ${bill1b_s}`;

    // TOTAL BILLETES PARA LA BASE
    var sum_billB = (bill100b + bill50b + bill20b + bill10b + bill5b + bill2b + bill1b);
    var sum_billB_s = Separador(sum_billB);
    ttl_billB.innerHTML = `$ ${sum_billB_s}`;
    var ttl_billB_imp = document.getElementById("ttl_billB_imp");
    ttl_billB_imp.innerHTML = `$ ${sum_billB_s}`;

    mensajeFaltante.classList.remove("show");
    mensajeCuadrado.classList.remove("show");
    mensajeSobrante.classList.remove("show");

    mala.innerHTML = ``;
    cuadrada.innerHTML = ``;
    superior.innerHTML = ``;


    //  MONTRAR MENSAJES DE ALERTA 
    if ((sum_bol + 500000) > sum_din) {
        mensajeFaltante.classList.add("show");
        var faltante = (sum_bol + 500000) - sum_din;
        var faltante_s = Separador(faltante);
        Swal.fire({
            icon: "error",
            title: "FALTANTE",
            text: "Tienes un faltante de $" + faltante_s,
            footer: '<i class="fa-solid fa-circle-xmark"></i> Valida los datos ingresados!'
        });
        mala.innerHTML = `$ ${faltante_s}`;
    } else if ((sum_bol + 500000) === sum_din) {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Todo esta en orden",
            showConfirmButton: false,
            timer: 3000
        });
        mensajeCuadrado.classList.add("show");
    } else if ((sum_bol + 500000) < sum_din) {
        mensajeSobrante.classList.add("show");
        var sobrante = sum_din - (sum_bol + 500000);
        var sobrante_s = Separador(sobrante);   
        Swal.fire({
            icon: "warning",
            title: "SOBRANTE",
            text: "Tienes un sobrante de $" + sobrante_s,
            footer: '<i class="fa-solid fa-circle-info"></i> Valida los datos ingresados!'
        });
        superior.innerHTML =  `$ ${sobrante_s}`;
    }

    var mostrar__fila100k = document.getElementById("mostrar__fila100k");
    var mostrar__fila50k = document.getElementById("mostrar__fila50k");
    var mostrar__fila20k = document.getElementById("mostrar__fila20k");
    var mostrar__fila10k = document.getElementById("mostrar__fila10k");
    var mostrar__fila5k = document.getElementById("mostrar__fila5k");
    var mostrar__fila2k = document.getElementById("mostrar__fila2k");
    var mostrar__fila1k = document.getElementById("mostrar__fila1k");

    mostrar__fila100k.classList.remove("show_base");
    mostrar__fila50k.classList.remove("show_base");
    mostrar__fila20k.classList.remove("show_base");
    mostrar__fila10k.classList.remove("show_base");
    mostrar__fila5k.classList.remove("show_base");
    mostrar__fila2k.classList.remove("show_base");
    mostrar__fila1k.classList.remove("show_base");

    if (bill100_b === 0) {
        mostrar__fila100k.classList.add("show_base");
    }
    if (bill50_b === 0) {
        mostrar__fila50k.classList.add("show_base");
    }
    if (bill20_b === 0) {
        mostrar__fila20k.classList.add("show_base");
    }
    if (bill10_b === 0) {
        mostrar__fila10k.classList.add("show_base");
    }
    if (bill5_b === 0) {
        mostrar__fila5k.classList.add("show_base");
    }
    if (bill2_b === 0) {
        mostrar__fila2k.classList.add("show_base");
    }
    if (bill1_b === 0) {
        mostrar__fila1k.classList.add("show_base");
    }
}

function imprimir() {
    window.print();
}