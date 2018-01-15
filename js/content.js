/*var matriz = [];
 matriz['A'] = ['35', '76', '26', '00', '84', '72', '79', '22', '42', '24'];
 matriz['B'] = ['01', '67', '26', '93', '20', '34', '60', '54', '72', '32'];
 matriz['C'] = ['51', '63', '09', '87', '28', '87', '46', '33', '92', '93'];
 matriz['D'] = ['67', '53', '56', '70', '42', '15', '96', '57', '26', '00'];
 matriz['E'] = ['03', '26', '22', '29', '35', '22', '11', '65', '27', '74'];
 matriz['F'] = ['83', '38', '92', '29', '51', '92', '61', '90', '64', '99'];
 matriz['G'] = ['14', '95', '91', '35', '06', '63', '47', '25', '54', '83'];
 matriz['H'] = ['63', '23', '65', '88', '67', '73', '32', '80', '23', '64'];
 matriz['I'] = ['96', '44', '28', '88', '81', '94', '98', '54', '78', '66'];
 matriz['J'] = ['19', '25', '12', '54', '98', '11', '09', '43', '81', '32'];
 
 var pin = ['2', '9', '2', '5'];*/

$(function () {

    var fullURL = chrome.runtime.getURL("data/my-data.json");

    $.ajax({
        url: fullURL,
        beforeSend: function (xhr) {
            xhr.overrideMimeType("text/plain; charset=x-user-defined");
        }
    }).done(function (data) {

        data = JSON.parse(data);
        var matriz = data.matriz,
                pin = data.pin,
                nombre = data.nombre,
                fecha = data.fecha,
                clave = data.clave,
                tarjeta_cup = data.tarjeta_cup,
                tarjeta_cuc = data.tarjeta_cuc;

        var tarjeta = $('#Tarjeta'), div = tarjeta.parent();
        var combo = '<select class="form-control" data-val="true" data-val-regex="La tarjeta debe tener 16 dígitos" data-val-regex-pattern="^([0-9]{16})$" data-val-required="Debe proporcionar un número de tarjeta" id="Tarjeta" name="Tarjeta"><option value="' + tarjeta_cup + '">CUP - ' + tarjeta_cup + '</option><option value="' + tarjeta_cuc + '">CUC - ' + tarjeta_cuc + '</option></select>';
        tarjeta.remove();
        div.html(combo);

        $('#nombre').val(nombre);
        $('#fecha').val(fecha);
        $('#clave').val(clave);

        if (window.location.href === "https://www.kiosco.bandec.cu/kiosco/Home/LoginBantel") {
            var posicionesValor = $('#posicionesValor');
            var labelPosiciones = posicionesValor.parent().parent().children().first().html().replace('Posiciones del PIN: ', '');
            var posiciones = pin[labelPosiciones.charAt(0) - 1] + '' + pin[labelPosiciones.charAt(2) - 1];
            posicionesValor.val(posiciones);

            var coordenadaValor = $('#coordenadaValor');
            var labelCoordenada = coordenadaValor.parent().parent().children().first().html().replace('Coordenada: ', '');
            switch (labelCoordenada.charAt(0)) {
                case 'A':
                    letraIndex = 0;
                    break;
                case 'B':
                    letraIndex = 1;
                    break;
                case 'C':
                    letraIndex = 2;
                    break;
                case 'D':
                    letraIndex = 3;
                    break;
                case 'E':
                    letraIndex = 4;
                    break;
                case 'F':
                    letraIndex = 5;
                    break;
                case 'G':
                    letraIndex = 6;
                    break;
                case 'H':
                    letraIndex = 7;
                    break;
                case 'I':
                    letraIndex = 8;
                    break;
                case 'J':
                    letraIndex = 9;
                    break;
                default:
                    letraIndex = -1;
                    break;
            }

            if (letraIndex >= 0) {
                var letraArray = matriz[letraIndex];
                console.log(letraArray);
                var coordenada = letraArray[labelCoordenada.charAt(2) - 1];
                coordenadaValor.val(coordenada);
                $('form').submit();
            }

        }

    });

});
