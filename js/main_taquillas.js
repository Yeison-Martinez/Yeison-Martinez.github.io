const VLR_BOLETA_UNO = 22000; // 22.000
const VLR_BOLETA_DOS = 50000; // 50.000
const VLR_BOLETA_TRES = 0; // 17.600
const VLR_BOLETA_CUATRO = 0; // 40.000

const VLR_BASE = 500000;

const cantVlr_tres = document.getElementById("cantVlr_tres");
const cantVlr_cuatro = document.getElementById("cantVlr_cuatro");
const ttl_cantVlr_tres = document.getElementById("ttl_cantVlr_tres");
const ttl_cantVlr_cuatro = document.getElementById("ttl_cantVlr_cuatro");
// const ttl_cantVlr_cinco = document.getElementById("ttl_cantVlr_cinco");

var input = document.getElementsByClassName("input");
var ttl_cant50 = document.getElementById("ttl_cant50");
var ttl_cant20 = document.getElementById("ttl_cant20");
var ttl_cant100 = document.getElementById("ttl_cant100");
var ttl_cant10 = document.getElementById("ttl_cant10");
var ttl_cant5 = document.getElementById("ttl_cant5");
var ttl_cant2 = document.getElementById("ttl_cant2");
var ttl_cant1 = document.getElementById("ttl_cant1");
var ttl_cant500m = document.getElementById("ttl_cant500m");
var ttl_cant200m = document.getElementById("ttl_cant200m");
var ttl_cant100m = document.getElementById("ttl_cant100m");
var ttlbill = document.getElementById("ttl_bill");
var ttl_plas = document.getElementById("ttl_plas");
var ttl_cant50k = document.getElementById("ttl_cant50k");
var ttl_cant22k = document.getElementById("ttl_cant22k");
var ttl_cantB = document.getElementById("ttl_cant--b");
var ttl_dinero = document.getElementById("ttl_dinero");
var can100_p = document.getElementById("can100_p");
var can50_p = document.getElementById("can50_p");
var can20_p = document.getElementById("can20_p");
var can10_p = document.getElementById("can10_p");
var can5_p = document.getElementById("can5_p");
var can2_p = document.getElementById("can2_p");
var can1_p = document.getElementById("can1_p");
var can500m_p = document.getElementById("can500m_p");
var can200m_p = document.getElementById("can200m_p");
var can100m_p = document.getElementById("can100m_p");
var can100_b = document.getElementById("can100_b");
var can50_b = document.getElementById("can50_b");
var can20_b = document.getElementById("can20_b");
var can10_b = document.getElementById("can10_b");
var can5_b = document.getElementById("can5_b");
var can2_b = document.getElementById("can2_b");
var can1_b = document.getElementById("can1_b");
var can500m_b = document.getElementById("can500m_b");
var can200m_b = document.getElementById("can200m_b");
var can100m_b = document.getElementById("can100m_b");
var ttl100_p = document.getElementById("ttl100_p");
var ttl50_p = document.getElementById("ttl50_p");
var ttl20_p = document.getElementById("ttl20_p");
var ttl10_p = document.getElementById("ttl10_p");
var ttl5_p = document.getElementById("ttl5_p");
var ttl2_p = document.getElementById("ttl2_p");
var ttl1_p = document.getElementById("ttl1_p");
var ttl500m_p = document.getElementById("ttl500m_p");
var ttl200m_p = document.getElementById("ttl200m_p");
var ttl100m_p = document.getElementById("ttl100m_p");
var ttl100_b = document.getElementById("ttl100_b");
var ttl50_b = document.getElementById("ttl50_b");
var ttl20_b = document.getElementById("ttl20_b");
var ttl10_b = document.getElementById("ttl10_b");
var ttl5_b = document.getElementById("ttl5_b");
var ttl2_b = document.getElementById("ttl2_b");
var ttl1_b = document.getElementById("ttl1_b");
var ttl500m_b = document.getElementById("ttl500m_b");
var ttl200m_b = document.getElementById("ttl200m_b");
var ttl100m_b = document.getElementById("ttl100m_b");
var ttl_billB = document.getElementById("ttl_billB");
var ttl_billP = document.getElementById("ttl_billP");
var mala = document.getElementById("mala");
var cuadrada = document.getElementById("cuadrada");
var superior = document.getElementById("superior");
var mensajeFaltante = document.getElementById("mensajeFaltante");
var mensajeCuadrado = document.getElementById("mensajeCuadrado");
var mensajeSobrante = document.getElementById("mensajeSobrante");

const meses = [
  "Ene",
  "Feb",
  "Mar",
  "Abr",
  "May",
  "Jun",
  "Jul",
  "Ago",
  "Sep",
  "Oct",
  "Nov",
  "Dic",
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
  let partesNumero = numero.toString().split(".");
  partesNumero[0] = partesNumero[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return partesNumero.join(".");
}

// BOTON PARA CALCULAR
var boton = document.getElementById("calcular");
boton.addEventListener("click", calc);

// FUNCION PARA CALCULAR LA BASE
function calc() {
  // MOSTRAR CONTENEDOR DE RESULTADOS
  const cajaProducido = document.getElementById("producido");
  const cajaBase = document.getElementById("base");
  const btnImprimir = document.getElementById("btn__imprimir");
  cajaProducido.classList.add("showResult");
  cajaBase.classList.add("showResult");
  btnImprimir.classList.add("showResult");

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

  // MONEDAS DE 500
  var bill500m = parseFloat(document.getElementById("bill500m").value);
  var vlrBill500 = bill500m * 500;
  var vlrBill500_s = Separador(vlrBill500);
  ttl_cant500m.innerHTML = `$ ${vlrBill500_s}`;

  // MONEDAS DE 200
  var bill200m = parseFloat(document.getElementById("bill200m").value);
  var vlrBill200 = bill200m * 200;
  var vlrBill200_s = Separador(vlrBill200);
  ttl_cant200m.innerHTML = `$ ${vlrBill200_s}`;

  // MONEDAS DE 100
  var bill100m = parseFloat(document.getElementById("bill100m").value);
  var vlrBill100m = bill100m * 100;
  var vlrBill100m_s = Separador(vlrBill100m);
  ttl_cant100m.innerHTML = `$ ${vlrBill100m_s}`;

  // SUMA DE TOTALES DE BILLETES
  var ttlbills =
    vlrBill100 +
    vlrBill50 +
    vlrBill20 +
    vlrBill10 +
    vlrBill5 +
    vlrBill2 +
    vlrBill1 +
    vlrBill500 +
    vlrBill200 +
    vlrBill100m;
  var ttlbills_s = Separador(ttlbills);
  ttlbill.innerHTML = `$ ${ttlbills_s}`;

  // TOTAL PLASTICO
  var ttl_deb = parseFloat(document.getElementById("tarj_deb--vlr").value);
  var ttl_cre = parseFloat(document.getElementById("tarj_cre--vlr").value);
  var sum_plas = ttl_deb + ttl_cre;
  var sum_plas_s = Separador(sum_plas);
  ttl_plas.innerHTML = `$ ${sum_plas_s}`;

  // TOTAL BOLETAS VLR UNO
  var cant22k = parseFloat(document.getElementById("cant22k").value);
  var vlr_b22 = cant22k * VLR_BOLETA_UNO;
  var vlr_b22_s = Separador(vlr_b22);
  ttl_cant22k.innerHTML = `$ ${vlr_b22_s}`;

  // TOTAL BOLETAS VLR DOS
  var cant50k = parseFloat(document.getElementById("cant50k").value);
  var vlr_b50 = cant50k * VLR_BOLETA_DOS;
  var vlr_b50_s = Separador(vlr_b50);
  ttl_cant50k.innerHTML = `$ ${vlr_b50_s}`;

  // TOTAL VLR TRES
  // const cantVlrTres = parseFloat(document.getElementById("cantVlr_tres").value);
  const cantVlrTres = 0;
  const vlr_bTres = cantVlrTres * VLR_BOLETA_TRES;
  var vlr_bTres_s = Separador(vlr_bTres);
  // ttl_cantVlr_tres.innerHTML = `$ ${vlr_bTres_s}`;

  // TOTAL VLR CUATRO
  // const cantVlrCuatro = parseFloat(document.getElementById("cantVlr_cuatro").value);
  const cantVlrCuatro = 0;
  const vlr_bCuatro = cantVlrCuatro * VLR_BOLETA_CUATRO;
  var vlr_bCuatro_s = Separador(vlr_bCuatro);
  // ttl_cantVlr_cuatro.innerHTML = `$ ${vlr_bCuatro_s}`;

  // TOTAL VLR CINCO
  // const cantVlrCinco = parseFloat(document.getElementById("cantVlr_cinco").value);
  const cantVlrCinco = 0;
  const vlr_bCinco = cantVlrCinco * VLR_BOLETA_TRES;
  var vlr_bCinco_s = Separador(vlr_bCinco);
  // ttl_cantVlr_cinco.innerHTML = `$ ${vlr_bCinco_s}`;

  // PRODUCIDO TOTAL
  const sum_bol = vlr_b50 + vlr_b22 + vlr_bTres + vlr_bCuatro + vlr_bCinco;
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
  var paso5 = sum_bol - sum_plas - paso4;
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
  // -M19-
  var paso29 = paso25 - paso28;
  // CANTIDAD BILLETAS DE 1K
  can1_p.innerHTML = `${paso27}`;
  // ---------------------------------------------------------------------
  // -MONEDAS-
  // -I20-
  var paso30 = paso29 / 500;
  // -J20-
  paso30 = Math.trunc(paso30);
  // -K20-
  if (paso30 > bill500m) {
    var paso31 = bill500m;
  } else {
    var paso31 = paso30;
  }
  // -L20-
  var paso32 = paso31 * 500;
  var paso32_s = Separador(paso32);
  ttl500m_p.innerHTML = `$ ${paso32_s}`;
  // -M20-
  var paso33 = paso29 - paso32;
  // CANTIDAD MONEDAS DE 500
  can500m_p.innerHTML = `${paso31}`;
  // ---------------------------------------------------------------------
  // -I21-
  var paso34 = paso33 / 200;
  // -J21-
  paso34 = Math.trunc(paso34);
  // -K21-
  if (paso34 > bill200m) {
    var paso35 = bill200m;
  } else {
    var paso35 = paso34;
  }
  // -L21-
  var paso36 = paso35 * 200;
  var paso36_s = Separador(paso36);
  ttl200m_p.innerHTML = `$ ${paso36_s}`;
  // -M21-
  var paso37 = paso33 - paso36;
  // CANTIDAD MONEDAS DE 200
  can200m_p.innerHTML = `${paso35}`;
  // ---------------------------------------------------------------------
  // -I22-
  var paso38 = paso37 / 100;
  // -J22-
  paso38 = Math.trunc(paso38);
  // -K22-
  if (paso38 > bill100m) {
    var paso39 = bill100m;
  } else {
    var paso39 = paso38;
  }
  // -L22-
  var paso40 = paso39 * 100;
  var paso40_s = Separador(paso40);
  ttl100m_p.innerHTML = `$ ${paso40_s}`;
  // -M22-
  var paso41 = paso37 - paso40;
  // CANTIDAD MONEDAS DE 100
  can100m_p.innerHTML = `${paso39}`;

  // --------------------------------------------------------------------
  // SUMA DE BILLETES PARA EL PRODUCIDO
  var suma_billP =
    paso4 +
    paso8 +
    paso12 +
    paso16 +
    paso20 +
    paso24 +
    paso28 +
    paso32 +
    paso36 +
    paso40;
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
  var bill500m_b = bill500m - paso31;
  var bill200m_b = bill200m - paso35;
  var bill100m_b = bill100m - paso39;

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

  // MONEDAS DE 500
  can500m_b.innerHTML = `${bill500m_b}`;
  var bill500mb = bill500m_b * 500;
  var bill500mb_s = Separador(bill500mb);
  ttl500m_b.innerHTML = `$ ${bill500mb_s}`;

  // MONEDAS DE 200
  can200m_b.innerHTML = `${bill200m_b}`;
  var bill200mb = bill200m_b * 200;
  var bill200mb_s = Separador(bill200mb);
  ttl200m_b.innerHTML = `$ ${bill200mb_s}`;

  // MONEDAS DE 100
  can100m_b.innerHTML = `${bill100m_b}`;
  var bill100mb = bill100m_b * 100;
  var bill100mb_s = Separador(bill100mb);
  ttl100m_b.innerHTML = `$ ${bill100mb_s}`;

  // TOTAL BILLETES PARA LA BASE
  var sum_billB =
    bill100b +
    bill50b +
    bill20b +
    bill10b +
    bill5b +
    bill2b +
    bill1b +
    bill500mb +
    bill200mb +
    bill100mb;
  var sum_billB_s = Separador(sum_billB);
  ttl_billB.innerHTML = `$ ${sum_billB_s}`;
  // var ttl_billB_imp = document.getElementById("ttl_billB_imp");
  // ttl_billB_imp.innerHTML = `$ ${sum_billB_s}`;

  mensajeFaltante.classList.remove("show");
  mensajeCuadrado.classList.remove("show");
  mensajeSobrante.classList.remove("show");

  mala.innerHTML = ``;
  cuadrada.innerHTML = ``;
  superior.innerHTML = ``;

  const sumBoletas_vlrBase = sum_bol + VLR_BASE;
  const contenedor_base = document.getElementById("base");

  contenedor_base.classList.remove("bs-red");
  contenedor_base.classList.remove("bs-yellow");
  contenedor_base.classList.remove("bs-gray");

  //  MONTRAR MENSAJES DE ALERTA
  if (sumBoletas_vlrBase > sum_din) {
    mensajeFaltante.classList.add("show");
    var faltante = sumBoletas_vlrBase - sum_din;
    var faltante_s = Separador(faltante);
    Swal.fire({
      icon: "error",
      title: "FALTANTE",
      text: "Tienes un faltante de $" + faltante_s,
      footer:
        '<i class="fa-solid fa-circle-xmark"></i> Valida los datos ingresados!',
    });
    mala.innerHTML = `$ ${faltante_s}`;
    contenedor_base.classList.add("bs-red");
  } else if (sumBoletas_vlrBase === sum_din) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Todo esta en orden",
      showConfirmButton: false,
      timer: 3000,
    });
    mensajeCuadrado.classList.add("show");
    contenedor_base.classList.add("bs-gray");
  } else if (sumBoletas_vlrBase < sum_din) {
    mensajeSobrante.classList.add("show");
    var sobrante = sum_din - sumBoletas_vlrBase;
    var sobrante_s = Separador(sobrante);
    Swal.fire({
      icon: "warning",
      title: "SOBRANTE",
      text: "Tienes un sobrante de $" + sobrante_s,
      footer:
        '<i class="fa-solid fa-circle-info"></i> Valida los datos ingresados!',
    });
    superior.innerHTML = `$ ${sobrante_s}`;
    contenedor_base.classList.add("bs-yellow");
  }

  // OCULTAR BOTON DE IMPRIMIR SI LA BASE ES DIFERENTE A 500K
  if (sumBoletas_vlrBase != sum_din) {
    btnImprimir.classList.remove("showResult");
  }

  // MOSTRAR FILAS DE BILLETES PARA LA BASE
  const mostrar__fila100k = document.getElementById("fila100k_base");
  const mostrar__fila50k = document.getElementById("fila50k_base");
  const mostrar__fila20k = document.getElementById("fila20k_base");
  const mostrar__fila10k = document.getElementById("fila10k_base");
  const mostrar__fila5k = document.getElementById("fila5k_base");
  const mostrar__fila2k = document.getElementById("fila2k_base");
  const mostrar__fila1k = document.getElementById("fila1k_base");
  const mostrar__fila500m = document.getElementById("fila500m_base");
  const mostrar__fila200m = document.getElementById("fila200m_base");
  const mostrar__fila100m = document.getElementById("fila100m_base");

  mostrar__fila100k.classList.remove("show_base");
  mostrar__fila50k.classList.remove("show_base");
  mostrar__fila20k.classList.remove("show_base");
  mostrar__fila10k.classList.remove("show_base");
  mostrar__fila5k.classList.remove("show_base");
  mostrar__fila2k.classList.remove("show_base");
  mostrar__fila1k.classList.remove("show_base");
  mostrar__fila500m.classList.remove("show_base");
  mostrar__fila200m.classList.remove("show_base");
  mostrar__fila100m.classList.remove("show_base");

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
  if (bill500m_b === 0) {
    mostrar__fila500m.classList.add("show_base");
  }
  if (bill200m_b === 0) {
    mostrar__fila200m.classList.add("show_base");
  }
  if (bill100m_b === 0) {
    mostrar__fila100m.classList.add("show_base");
  }

  // MOSTRAR FILAS DE BILLETES PARA EL PRODUCIDO
  const mostrar__fila100k_p = document.getElementById("fila100k_producido");
  const mostrar__fila50k_p = document.getElementById("fila50k_producido");
  const mostrar__fila20k_p = document.getElementById("fila20k_producido");
  const mostrar__fila10k_p = document.getElementById("fila10k_producido");
  const mostrar__fila5k_p = document.getElementById("fila5k_producido");
  const mostrar__fila2k_p = document.getElementById("fila2k_producido");
  const mostrar__fila1k_p = document.getElementById("fila1k_producido");
  const mostrar__fila500m_p = document.getElementById("fila500m_producido");
  const mostrar__fila200m_p = document.getElementById("fila200m_producido");
  const mostrar__fila100m_p = document.getElementById("fila100m_producido");
  mostrar__fila100k_p.classList.remove("show_base");
  mostrar__fila50k_p.classList.remove("show_base");
  mostrar__fila20k_p.classList.remove("show_base");
  mostrar__fila10k_p.classList.remove("show_base");
  mostrar__fila5k_p.classList.remove("show_base");
  mostrar__fila2k_p.classList.remove("show_base");
  mostrar__fila1k_p.classList.remove("show_base");
  mostrar__fila500m_p.classList.remove("show_base");
  mostrar__fila200m_p.classList.remove("show_base");
  mostrar__fila100m_p.classList.remove("show_base");

  if (paso3 === 0) {
    mostrar__fila100k_p.classList.add("show_base");
  }
  if (paso7 === 0) {
    mostrar__fila50k_p.classList.add("show_base");
  }
  if (paso11 === 0) {
    mostrar__fila20k_p.classList.add("show_base");
  }
  if (paso15 === 0) {
    mostrar__fila10k_p.classList.add("show_base");
  }
  if (paso19 === 0) {
    mostrar__fila5k_p.classList.add("show_base");
  }
  if (paso23 === 0) {
    mostrar__fila2k_p.classList.add("show_base");
  }
  if (paso27 === 0) {
    mostrar__fila1k_p.classList.add("show_base");
  }
  if (paso31 === 0) {
    mostrar__fila500m_p.classList.add("show_base");
  }
  if (paso35 === 0) {
    mostrar__fila200m_p.classList.add("show_base");
  }
  if (paso39 === 0) {
    mostrar__fila100m_p.classList.add("show_base");
  }

}
function imprimir() {
  window.print();
}
