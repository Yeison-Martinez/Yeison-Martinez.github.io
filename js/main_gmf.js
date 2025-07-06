

const BTN_CALC_GMF = document.getElementById('calc_gmf');

function Separador(numero) {
    let partesNumero = numero.toString().split('.');
    partesNumero[0] = partesNumero[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return partesNumero.join('.');
}

var vlr_bono = parseFloat(document.getElementById('vlr_bono').value);

function calc_gmf() {
    var vlr_bono = parseFloat(document.getElementById('vlr_bono').value);
    console.log(vlr_bono);

    if (isNaN(vlr_bono) || vlr_bono <= 4999) {
        alert('El valor del bono debe ser mayor o igual a $ 5.000');
        } else {

        var vlr_gmf_uno = vlr_bono * 0.004;
        var vlr_gmf_dos = vlr_gmf_uno * 0.004;
        // redondear a entero superior
        vlr_gmf_dos = Math.round(vlr_gmf_dos);
    
        var vlr_recarga = vlr_bono + vlr_gmf_uno + vlr_gmf_dos;
        var vlr_gravamen = vlr_gmf_uno + vlr_gmf_dos;
        var vlr_consumo = vlr_bono;
    
        // separar los números con puntos
        vlr_recarga = Separador(vlr_recarga);
    
        var vlrRecarga = document.querySelector('.vlrRecarga');
        var vlrRecargaResult = document.querySelector('.vlrRecargaResult');
        var vlrBono = document.querySelector('.vlrBono');
        var vlrGMF = document.querySelector('.vlrGMF');
        var vlrGravamen = document.querySelector('.vlrGravamen');
        var vlrConsumo = document.querySelector('.vlrConsumo');
        
        vlrBono.innerHTML = `$ ${Separador(vlr_bono)}`;
        vlrGMF.innerHTML = `$ ${Separador(vlr_gmf_uno)} -  $ ${Separador(vlr_gmf_dos)}`;
        vlrGravamen.innerHTML = `$ ${Separador(vlr_gravamen)}`;
        vlrConsumo.innerHTML = `$ ${Separador(vlr_consumo)}`;
        vlrRecarga.innerHTML = `$ ${vlr_recarga}`;
        vlrRecargaResult.innerHTML = `$ ${vlr_recarga}`;
    }

}

BTN_CALC_GMF.addEventListener('click', calc_gmf);
if (vlr_bono >= 5000) {
    console.log('Valor del bono es mayor o igual a 5000');
}


