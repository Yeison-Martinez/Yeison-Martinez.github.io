
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

const NOMBRE_USUARIO = document.getElementById('nombreUsuario').value;
const CAJA = document.getElementById('caja').value;

const VALOR_1 = parseFloat(document.getElementById('valor1').value);
const CONSECUTIVO_INICIAL_1 = parseFloat(document.getElementById('consecutivoInicial1').value);
const CONSECUTIVO_FINAL_1 = parseFloat(document.getElementById('consecutivoFinal1').value);
const CANTIDAD_BOLETAS_1 = parseFloat(document.getElementById('cantidadBoletas1').value);

const VALOR_2 = parseFloat(document.getElementById('valor2').value);
const CONSECUTIVO_INICIAL_2 = parseFloat(document.getElementById('consecutivoInicial2').value);
const CONSECUTIVO_FINAL_2 = parseFloat(document.getElementById('consecutivoFinal2').value);
const CANTIDAD_BOLETAS_2 = parseFloat(document.getElementById('cantidadBoletas2').value);

// const BOTON_IMPRIMIR = document.getElementById('botonImprimir');
const RECOPILAR_INFO = document.getElementById('recopilarInfo');

RECOPILAR_INFO.addEventListener('click', recopilarInfo);

function recopilarInfo(){

    console.log(NOMBRE_USUARIO);
    console.log(CAJA);
    console.log(VALOR_1, CONSECUTIVO_INICIAL_1, CONSECUTIVO_FINAL_1, CANTIDAD_BOLETAS_1);
    console.log(VALOR_2, CONSECUTIVO_INICIAL_2, CONSECUTIVO_FINAL_2, CANTIDAD_BOLETAS_2);

    const NOMBRE_USUARIOI = document.getElementById('nombreI');
    const CAJAI = document.getElementById('cajaI');
    const FECHAI = document.getElementById('fechaActualI');

    NOMBRE_USUARIOI.innerHTML = NOMBRE_USUARIO;
    CAJAI.innerHTML = CAJA;
    FECHAI.innerHTML = `${fechaActual.getDate()} ${meses[fechaActual.getMonth()]} ${fechaActual.getFullYear()}`;

    const VALOR1I = document.getElementById('valor1I');
    const CONSECUTIVO_INICIAL1I = document.getElementById('consecutivoInicial1I');
    const CONSECUTIVO_FINAL1I = document.getElementById('consecutivoFinal1I');
    const CANTIDAD_BOLETAS1I = document.getElementById('cantidadBoletas1I');
    VALOR1I.innerHTML = `$ ${VALOR_1}`;
    CONSECUTIVO_INICIAL1I.innerHTML = CONSECUTIVO_INICIAL_1;
    CONSECUTIVO_FINAL1I.innerHTML = CONSECUTIVO_FINAL_1;
    CANTIDAD_BOLETAS1I.innerHTML = CANTIDAD_BOLETAS_1;

    const VALOR2I = document.getElementById('valor2I');
    const CONSECUTIVO_INICIAL2I = document.getElementById('consecutivoInicial2I');
    const CONSECUTIVO_FINAL2I = document.getElementById('consecutivoFinal2I');
    const CANTIDAD_BOLETAS2I = document.getElementById('cantidadBoletas2I');
    VALOR2I.innerHTML = `$ ${VALOR_2}`;
    CONSECUTIVO_INICIAL2I.innerHTML = CONSECUTIVO_INICIAL_2;
    CONSECUTIVO_FINAL2I.innerHTML = CONSECUTIVO_FINAL_2;
    CANTIDAD_BOLETAS2I.innerHTML = CANTIDAD_BOLETAS_2;

}