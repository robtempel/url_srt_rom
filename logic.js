const paginaActiva = []
const numeroIP = []
const puerto = []
const passphraseSRT = []
const aesSRT = []
const acumulacionPosiblesPuertos = []
const posiblesPASS = []
const posibleAES = []
const contador = []
const contador2 = []
const llamadaModo = []
const regex = /^[a-zA-Z0-9]+$/;
const passPhraseOK = [""]
const aesOK = [""]

let body = document.getElementById("cuerpo")
body.addEventListener("keydown", (e) => {
    if(e.key === "Escape"){
    let cuerpo2 = document.getElementById("cuerpo2")
    cuerpo2.innerHTML = ``
}

})
let botonURL = document.getElementById("url")
botonURL.addEventListener("mousedown", () => {
    let cuerpo2 = document.getElementById("cuerpo2")
    cuerpo2.innerHTML = `    <div id="ventana" class="ventanaURL">
        <input type="text" id="mode" class="input" placeholder="mode"><label class="camboObligatorio">*</label><br>
        <input type="text" id="ipInput" placeholder="0.0.0.0"><label class="camboObligatorio">*</label><br>
        <input type="text" id="port" class="input" placeholder="number port"><label class="camboObligatorio">*</label><br>
        <input type="text" id="passphrase" class="input" placeholder="passphrase"><label class="camboNOObligatorio">*</label><br>
        <input type="text" id="aes" class="input" placeholder="AES"><label class="camboNOObligatorio">*</label><br>
        <input type="text" id="latency" class="input" placeholder="latency (seconds)"><label class="camboObligatorio">*</label><br>
        <input type="text" id="transtype" class="input" placeholder="transmission type" list="opciones3"><label class="camboNOObligatorio">*</label><br>
            <datalist id="opciones3">
                <option value="live">
                <option value="file">
                <option value="mux">
                <option value="passthru">
                <option value="reliable">
                <option value="raw">
            </datalist>
        <input type="text" id="pkt_size" class="input" placeholder="bytes/pkt"><label class="camboNOObligatorio">*</label><br>
        <input type="text" id="maxbw" class="input" placeholder="max bw (Mbytes/s)"><label class="camboNOObligatorio">*</label><br>
        <input type="text" id="minversion" class="input" placeholder="min version compatible"><label class="camboNOObligatorio">*</label><br>
        <input type="text" id="maxversion" class="input" placeholder="max version compatible"><label class="camboNOObligatorio">*</label><br>
        <input type="text" id="payloadS" class="input" placeholder="Payload (Bytes utiles/pkt)"><label class="camboNOObligatorio">*</label><br>
        <input type="text" id="backLog" class="input" placeholder="backlog (#pkt)"><label class="camboNOObligatorio">*</label><br>
        <input type="text" id="streamID" class="input" placeholder="ID"><label class="camboNOObligatorio">*</label><br>
        </div>
        <div id="ventanaResumenSRT" class="ventanaURL2">
            <text id="url" class="resultadoSRT">URL_Llamada_Protocolo_SRT_Scheme_PDP</text>
            <svg viewBox="0 0 100 100" class="iconVLC">
                <style>
                    .st0{fill:#F57C00;}
                    .st1{fill:#DDDDDD;}
                    .st2{fill:#FF9800;}
                </style>

                    <path id="XMLID_6_" class="st0" d="M84.1,63.4c0,0-0.3-2.3-3.5-2.3h-7l2,6.8c1.4,4.2,2.6,7.7,2.6,9.2c0,6.6-12.6,11.7-28.1,11.7
                        c-15.5,0-28.1-5.1-28.1-11.7c0-1.8,1.1-5,2.5-9.1l2.1-6.9h-7.1c-2.2,0-2.6,2.1-2.6,2.1L6,97.2l1.8,2.8H93l1-2.8L84.1,63.4z"/>
                    <path id="XMLID_5_" class="st1" d="M50.1,77.8c11.9,0,22.2-4.9,25.4-9.9l-2-6.8l-3-10.2c0,0-5.6,7.5-20.5,7.5
                        c-14.8,0-20.5-7.4-20.5-7.4l-3,10.2L24.3,68C27.5,73.1,38.1,77.8,50.1,77.8z"/>
                    <path id="XMLID_4_" class="st1" d="M50,36.1c8.7,0,13.7-3.3,14.6-4l0.2-0.1L59,13.4c0,0-2.5,3.3-9,3.3c-6.5,0-9-3.3-9-3.3L35.2,32
                        l0.1,0.1C36.3,32.7,41.3,36.1,50,36.1z"/>
                    <path id="XMLID_3_" class="st2" d="M50,58.3c14.9,0,20.5-7.5,20.5-7.5L64.8,32c0,0-0.1,0-0.2,0.1c-0.9,0.7-6,4-14.6,4
                        c-8.7,0-13.8-3.4-14.6-4C35.3,32,35.2,32,35.2,32l-5.8,18.9C29.5,50.9,35.2,58.3,50,58.3z"/>
                    <path id="XMLID_2_" class="st2" d="M50.1,77.8c-12.1,0-22.7-4.7-25.8-9.8c-1.4,4.1-2.5,7.4-2.5,9.1c0,6.6,12.6,11.7,28.1,11.7
                        c15.5,0,28.1-5.1,28.1-11.7c0-1.5-1.2-5-2.6-9.2C72.3,72.9,62.1,77.8,50.1,77.8z"/>
                    <path id="XMLID_1_" class="st2" d="M50,16.7c6.5,0,9-3.3,9-3.3L55.2,1.1c0,0-0.2-1.1-5.2-1.1c-5.1,0-5.2,1.1-5.2,1.1L41,13.3
                        C41,13.3,43.5,16.7,50,16.7z"/>

            </svg>
        </div>
            
    
    
    `

    let mode = document.getElementById("mode")
    mode.addEventListener("keyup", (e) => {
        if(e.key === "c"){
            mode.value = "caller"
            let ip = document.getElementById("ipInput")
            ip.focus()
            sintaxis()
        }else{
            if(e.key === "l"){
                mode.value = "listener"
                let ip = document.getElementById("ipInput")
                ip.focus()
                sintaxis()
            }else{
                mode.value = ""
            }
        }
    })

    let ip = document.getElementById("ipInput")
    ip.addEventListener("keydown", (e) => {
        if(e.key === 'Enter'){
            let sigo = validateIP(ip.value)
            if(sigo == "OK"){
                let port = document.getElementById("port")
                port.focus()
                sintaxis()
            }else{
                ip.value = ""
            }
        }
    })


    let port = document.getElementById("port")
    port.addEventListener("keydown", (e) => {
        if(e.key === 'Enter'){
            let sigo = validadorPort(port.value)
            if(sigo == "OK"){
                let passphrase = document.getElementById("passphrase")
                passphrase.focus()
                sintaxis()
            }
        }
    })

    let passphrase = document.getElementById("passphrase")
    passphrase.addEventListener("keydown", (e) => {
        if(e.key === 'Enter'){
            let sigo = validadorPHRASE(passphrase.value)
            if(sigo == "OK"){
                let aes = document.getElementById("aes")
                aes.focus()
                sintaxis()
            }
            if(sigo == "OK2"){
                let latency = document.getElementById("latency")
                latency.focus()
                sintaxis()
            }
        }
    })


    let aes = document.getElementById("aes")
    aes.addEventListener("keydown", (e) => {
        if(e.key === 'Enter'){
            let sigo = validadorAES(aes.value)
            if(sigo == "OK"){
                let latency = document.getElementById("latency")
                latency.focus()
                sintaxis()
            }
            if(sigo == "NO"){
                passphrase.value = ""
                let latency = document.getElementById("latency")
                latency.focus()
                sintaxis()
            }
        }
    })


    let latency = document.getElementById("latency")
    latency.addEventListener("keydown", (e) => {
        if(e.key === 'Enter'){
            let sigo = validadorLatencia(latency.value)
            if(sigo == "OK"){
                let transtype = document.getElementById("transtype")
                transtype.focus()
                sintaxis()
            }else{
                if(sigo == "NO"){
                    latency.value =""
                }
            }
        }
    })

    let transtype = document.getElementById("transtype")
    transtype.addEventListener("keydown", (e) => {
        if(e.key === 'Enter'){
            let sigo = validadorTT(transtype.value)
            if(sigo == "OK"){
                let pkt_size = document.getElementById("pkt_size")
                pkt_size.focus()
                sintaxis()
            }else{
                if(sigo == "NO"){
                    transtype.value = ""
                    let pkt_size = document.getElementById("pkt_size")
                    pkt_size.focus()
                    sintaxis()
                }
            }
        }
    })


    let pkt_size = document.getElementById("pkt_size")
    pkt_size.addEventListener("keydown", (e) => {
        if(e.key === 'Enter'){
            let sigo = validadorPKTS(pkt_size.value)
            if(sigo == "OK"){
                let maxbw = document.getElementById("maxbw")
                maxbw.focus()
                sintaxis()
            }else{
                pkt_size.value = ""
                let maxbw = document.getElementById("maxbw")
                maxbw.focus()
                sintaxis()
            }
        }
    })

    let maxbw = document.getElementById("maxbw")
    maxbw.addEventListener("keydown", (e) => {
        if(e.key === 'Enter'){
            let sigo = validadorMBW(maxbw.value)
            if(sigo == "OK"){
                let minVC = document.getElementById("minversion")
                minVC.focus()
                sintaxis()
            }else{
                if(sigo == "NO"){
                    maxbw.value = ""
                    sintaxis()
                }
            }
        }
    })

    let minVC = document.getElementById("minversion")
    minVC.addEventListener("keydown",  (e) => {
        if(e.key === 'Enter'){
            let sigo = validadorMinVer(minVC.value)
            if(sigo == "OK"){
                let maxVC = document.getElementById("maxversion")
                maxVC.focus()
                sintaxis()
            }else{
                if(sigo == "NO"){
                    minVC.value = ""
                }
            }
        }
    })

    let maxVC = document.getElementById("maxversion")
    maxVC.addEventListener("keydown", (e) => {
        if(e.key === 'Enter'){
            let sigo = validadorMaxVer(maxVC.value)
            if(sigo == "OK"){
                let payloadS = document.getElementById("payloadS")
                payloadS.focus()
                sintaxis()
            }else{
                if(sigo == "NO"){
                    maxVC.value = ""
                }
            }
        }
    })

    let payloadS = document.getElementById("payloadS")
    payloadS.addEventListener("keydown", (e) => {
        if(e.key === 'Enter'){
            let sigo = validadorPayload(payloadS.value)
            if(sigo == "OK"){
                let backLog = document.getElementById("backLog")
                backLog.focus()
                sintaxis()
            }else{
                if(sigo == "NO"){
                    payloadS.value = ""
                }
            }
        }
    })

    let backLog = document.getElementById("backLog")
    backLog.addEventListener("keydown", (e) => {
        if(e.key === 'Enter'){
            let sigo = validadorBacklog(backLog.value)
            if(sigo == "OK"){
                let streamID = document.getElementById("streamID")
                streamID.focus()
                sintaxis()
            }else{
                backLog.value = ""
            }
        }
    })

    let streamID = document.getElementById("streamID")
    streamID.addEventListener("keydown", (e) => {
        if(e.key === 'Enter'){
            sintaxis()
        }
    })

    function sintaxis(){
        let fijo = 'srt://'
        let mode = document.getElementById("mode").value
        let ip = document.getElementById("ipInput").value
        let port = document.getElementById("port").value
        let aes = document.getElementById("aes").value
        let passphrase = document.getElementById("passphrase").value
        let latency = document.getElementById("latency").value
        let transmission = document.getElementById("transtype").value
        let tamanopaquetes = document.getElementById("pkt_size").value
        let maximoanchodebanda = document.getElementById("maxbw").value
        let versionMinima = document.getElementById("minversion").value
        let versionMaxima = document.getElementById("maxversion").value
        let payloadsize = document.getElementById("payloadS").value
        let fila = document.getElementById("backLog").value
        let identificador = document.getElementById("streamID").value
        let url = document.getElementById("url")
        let llamada
        if(mode.length == 0){
            llamada = ""
        }else{
            llamada = `mode=${mode}`
        }
        let direccion
        if(ip.length == 0){
            direccion = ""
        }else{
            direccion = ip
        }
        let puerto
        if(port.length == 0){
            puerto = ""
        }else{
            puerto = port
        }
        let latencia
        if(latency.length == 0){
            latencia = "&latency=1000"
        }else{
            latencia = `&latency=${latency*1000}`
        }
        let codigo1
        if(passphrase.length == 0){
            codigo1 = ""
        }else{
            codigo1 = `passphrase=${passphrase}`
        }
        let codigo2
        if(aes.length == 0){
            codigo2 = ""
        }else{
            codigo2 = `pbkeylen=${aes/8}`
        }
        let codigoconsolidado
        if(aes.length == 0 || passphrase.length == 0){
            codigoconsolidado = ""
        }else{
            codigoconsolidado = `&${codigo2}&${codigo1}`
        }
        let tipodetrasmision
        if(transmission.length == 0){
            tipodetrasmision = ""
        }else{
            tipodetrasmision = `&transtype=${transmission}`
        }
        let paketsize
        if(tamanopaquetes.length == 0){
            paketsize = ""
        }else{
            paketsize = `&pkt_size=${tamanopaquetes}`
        }
        let maximoBW
        if(maximoanchodebanda.length == 0){
            maximoBW = ""
        }else{
            maximoBW = `&maxbw=${maximoanchodebanda*1000000}`
        }
        let minima
        if(versionMinima.length == 0){
            minima = ""
        }else{
            minima = `&minversion=${versionMinima}`
        }
        let maxima
        if(versionMaxima.length == 0){
            maxima = ""
        }else{
            maxima = `&maxversion=${versionMaxima}`
        }
        let datosutiles
        if(payloadsize.length == 0){
            datosutiles = ""
        }else{
            datosutiles = `&payloadsize=${payloadsize}`
        }
        let datosenfila
        if(fila.length == 0){
            datosenfila = ""
        }else{
            datosenfila = `&backlog=${fila}`
        }
        let identifSTR
        if(identificador.length == 0){
            identifSTR = ""
        }else{
            identifSTR = `&streamid=${identificador}`
        }
        let scheme = `${fijo}${direccion}:${puerto}?${llamada}${latencia}${codigoconsolidado}${tipodetrasmision}${paketsize}${maximoBW}${minima}${maxima}${datosutiles}${datosenfila}${identifSTR}`
        if(mode != "" && ip != "" && port != "" && latency != ""){
            url.textContent = scheme.trim()
        }
    }

    function validateIP(a){
        let partes = a.split(".")
        if(partes[0] > -1 && partes[0] < 256 && partes[1] > -1 && partes[1] < 256 && partes[2] > -1 && partes[2] < 256 && partes[3] > -1 && partes[3] < 256){
            return "OK"
        }
    }
    function validadorPort(a){
        let numeroobligado = parseInt(a)

        if(numeroobligado > 0){
            return "OK"
        }else{
            return "NO"
        }
    }
    function validadorPHRASE(a){
        if(a.length > 0){
            return "OK"
        }else{
            return "OK2"
        }
    }
    function validadorAES(a){
        if(a == "128" || a == "192" || a == "256"){
            return "OK"
        }
        if(a == ""){
            return "NO"
        }
    }
    function validadorLatencia(a){
        let numeroobligado = parseFloat(a)
        if(numeroobligado > 0){
            return "OK"
        }else{
            return "NO"
        }
    }
    function validadorTT(a){
        if(a == "live" || a == "file" || a == "mux" || a == "passthru" || a == "reliable" || a == "raw" || a == ""){
            return "OK"
        }else{
            return "NO"
        }
    }
    function validadorPKTS(a){
        let numeroobligado = parseFloat(a)
        if(numeroobligado > 49 && numeroobligado < 2000){
            return "OK"
        }else{
            return "NO"
        }
    }
    function validadorMBW(a){
        let numeroobligado = parseInt(a)
        if(numeroobligado > 0){
            return "OK"
        }else{
            return "NO"
        }
    }
    function validadorMinVer(a){
        if(a == "1.0" || a == "1.1" || a == "1.2" || a == "1.3" || a == "1.4"){
            return "OK"
        }else{
            return "NO"
        }
    }
    function validadorMaxVer(a){
        if(a == "1.0" || a == "1.1" || a == "1.2" || a == "1.3" || a == "1.4"){
            return "OK"
        }else{
            return "NO"
        }
    }
    function validadorPayload(a){
        let numeroobligado = parseInt(a)
        if(numeroobligado > 80 && numeroobligado < 1500){
            return "OK"
        }else{
            return "NO"
        }
    }
    function validadorBacklog(a){
        let numeroobligado = parseInt(a)
        if(numeroobligado > 0 && numeroobligado < 120){
            return "OK"
        }else{
            return "NO"
        }
    }

    mode.focus()

})

let botonSatelital = document.getElementById("botonSat")
botonSatelital.addEventListener("mousedown", () => {
    let cuerpo2 = document.getElementById("cuerpo2")
    cuerpo2.innerHTML = `<div id="ventana" class="ventanaSAT">
    <textarea class="inputSat" id="inputSat" placeholder="Satellite / Frecuency / Symbol Rate / Encriptation / Service / Modulation"></textarea><br>
    </div>
    
    <div id="ventanaResumenSAT" class="ventanaSAT2">
        <text id="resumenSat" class="resultadoSAT">Basic_Data</text>
    </div>

    `

    let caja = document.getElementById("inputSat")
    caja.addEventListener("keyup", () => {
        let textocarne = caja.value
        let resumencarne = procesador(textocarne)
        let salida = document.getElementById("resumenSat")
        salida.textContent = resumencarne
        
        copyToClipboard(resumencarne);

        function copyToClipboard(text) {
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
        }
        
    })

    function procesador(a){
        //--------------------- Reemplazar saltos de linea y tabuladores x espacios ---------------------//
        let textoSinSaltos0 = a.replace(/\t/g, " ");
        let textoSinSaltos = textoSinSaltos0.replace(/\n/g, " ");


        //--------------------- Generar variables de uso frecuente ---------------------//
        var parametrosM = textoSinSaltos.toUpperCase()         // Transformar string principal en mayuscula
        var paramSplitPal = parametrosM.split(" ");             // Separar todo en parabras (array)


        //////////////////////////////////////////////////////////////////////////////////
            
        //--------------------- Busqueda de Satelite ------------------------------------//
        //------------- INTELSAT 21 / 34 / 707 / 11 / 14 / 1R --------------------------//
        var busINT = parametrosM.indexOf("INT");
        var subsINT = parametrosM.substring(busINT, busINT + 11);
        var busIS = parametrosM.indexOf("IS");
        var subsIS = parametrosM.substring(busIS, busIS + 5);
        
        var intelsat = "";

        if(subsINT.includes("INT") && subsINT.includes("21")){
        var intelsat = "IS21";
        };
    
        if (subsINT.includes("INT") && subsINT.includes("34")){
        var intelsat = "IS34";
        };

        if (subsINT.includes("INT") && subsINT.includes("707")){
        var intelsat = "IS707";
        };
        
        if (subsINT.includes("INT") && subsINT.includes("11")){
        var intelsat = "IS11";
        };
        
        if(subsINT.includes("INT") && subsINT.includes("14")){
        var intelsat = "IS14";
        };
        
        if (subsINT.includes("INT") && subsINT.includes("1R")){
        var intelsat = "IS1R";
        };
        
        if (subsIS.includes("IS") && subsIS.includes("21")){
        var intelsat = "IS21";
        };
        
        if (subsIS.includes("IS") && subsIS.includes("34")){
        var intelsat = "IS34";
        };
    
        if (subsIS.includes("IS") && subsIS.includes("707")){
        var intelsat = "IS707";
        };
        
        if (subsIS.includes("IS") && subsIS.includes("11")){
        var intelsat = "IS11";
        };
        
        if (subsIS.includes("IS") && subsIS.includes("14")){
        var intelsat = "IS14";
        };
        
        if (subsIS.includes("IS") && subsIS.includes("1R")){
        var intelsat = "IS1R";
        };
        
        //------------- TELSTAR 12 / 14 --------------------------------------------------//
        var busTELSTAR = parametrosM.indexOf("TELSTAR");
        var subsTELSTAR = parametrosM.substring(busTELSTAR, busTELSTAR + 10);
        var busTELS = parametrosM.indexOf("TELS");
        var subsTELS = parametrosM.substring(busTELS, busTELS + 7);
        var busTS = parametrosM.indexOf("TS");
        var subsTS = parametrosM.substring(busTS, busTS + 5);
        var busSTAR = parametrosM.indexOf("STAR");
        var subsSTAR = parametrosM.substring(busSTAR, busSTAR + 7);
        
        var tssat = ("");

        if (subsTELSTAR.includes("TELSTAR") && subsTELSTAR.includes("12")){
        var tssat = "TelStar12";
        };

        if (subsTELSTAR.includes("TELSTAR") && subsTELSTAR.includes("14")){
        var tssat = "TelStar14";
        };
        
        if (subsTELS.includes("TELST") && subsTELS.includes("12")){
        var tssat = "TelStar12";
        };
        
        if (subsTELS.includes("TELST") && subsTELS.includes("14")){
        var tssat = "TelStar14";
        };
        
        if (subsTS.includes("TS") && subsTS.includes("12")){
        var tssat = "TelStar12";
        };
        
        if (subsTS.includes("TS") && subsTS.includes("14")){
        var tssat = "TelStar14";
        };
        
        if (subsSTAR.includes("STAR") && subsSTAR.includes("12")){
        var tssat = "TelStar12";
        };
        
        if (subsSTAR.includes("STAR") && subsSTAR.includes("14")){
        var tssat = "TelStar14";
        };


        //------------- SES 6 / 10 / 14 ------------------------------------------------//
        var busSES = parametrosM.indexOf("SES");
        var subsSES = parametrosM.substring(busSES, busSES + 7);
        
        var ses = ("");

        if (subsSES.includes("SES") && subsSES.includes("14")){
        var ses = "SES14";
        };

        if (subsSES.includes("SES") && subsSES.includes("6")){
        var ses = "SES6";
        };
        
        if(subsSES.includes("SES") && subsSES.includes("10")){
        var ses = "SES10";
        };


        //------------- ARSAT 1 / 2 -----------------------------------------------------//
        var busAR = parametrosM.indexOf("AR");
        var subsAR = parametrosM.substring(busAR, busAR + 9);
        
        var arsat = ("")

        if (subsAR.includes("AR1")||subsAR.includes("ARSAT1")||subsAR.includes("ARSAT 1")||subsAR.includes("ARS 1")||subsAR.includes("ARS1")||subsAR.includes("ARS-1")||subsAR.includes("ARSAT-1")){
        var arsat = "AR1";
        };

        if (subsAR.includes("AR2")||subsAR.includes("ARSAT2")||subsAR.includes("ARSAT 2")||subsAR.includes("ARS 2")||subsAR.includes("ARS2")||subsAR.includes("ARS-2")||subsAR.includes("ARSAT-2")){
        var arsat = "AR2";
        };

        //------------- EUTELSAT 8 / 113 / 117 -----------------------------------------//
        var busEU = parametrosM.indexOf("EU");
        var subsEU = parametrosM.substring(busEU, busEU + 13);
        
        var eu = ("");

        if (subsEU.includes("EU") && subsEU.includes("8")){
        var eu = "EU8";
        };

        if (subsEU.includes("EU") && subsEU.includes("113")){
        var eu = "EU113";
        };

        if (subsEU.includes("EU") && subsEU.includes("117")){
        var eu = "EU117";
        };
    
        //------------- NSS 4 / 7 / 806 -------------------------------------------------//
        var busNSS = parametrosM.indexOf("NSS");
        var subsNSS = parametrosM.substring(busNSS, busNSS + 9);
        
        var nss = ("");

        if (subsNSS.includes("NSS") && subsNSS.includes("7")){
        var nss = "NSS7";
        };

        if (subsNSS.includes("NSS") && subsNSS.includes("4")){
        var nss = "NSS4";
        };

        if (subsNSS.includes("NSS") && subsNSS.includes("806")){
        var nss = "NSS806";
        };

        //------------- AMAZONAS 1 / 2 / 4 ---------------------------------------------//
        var busAMA = parametrosM.indexOf("AMA");
        var subsAMA = parametrosM.substring(busAMA, busAMA + 12);
        
        var ama = ("");

        if ((subsAMA.includes("AMA") || subsAMA.includes("AMAMZONAS")) && subsAMA.includes("2")){
        var ama = "Amzn2";
        };

        if((subsAMA.includes("AMA") || subsAMA.includes("AMAMZONAS")) && subsAMA.includes("3")){
        var ama = "Amzn4";
        };
        
        if(subsAMA.includes("AMA") || subsAMA.includes("AMAMZONAS")){
        var ama = "Amzn";
        };

        //------------- BRASILSAT 1 / 34 / 707 / 11 / 14 / 1R --------------------------//
        var busBR = parametrosM.indexOf("BR");
        var subsBR = parametrosM.substring(busBR, busBR + 7);
        var busBRASIL = parametrosM.indexOf("BRASIL");
        var subsBRASIL = parametrosM.substring(busBRASIL, busBRASIL + 12);
        
        var brasilsat = ("");

        if (subsBRASIL.includes("BRASIL") && subsBRASIL.includes("4")){
        var brasilsat = "BRSat4";
        };

        if (subsBRASIL.includes("BRASIL") && subsBRASIL.includes("3")){
        var brasilsat = "BRSat3";
        };

        if (subsBRASIL.includes("BRASIL") && subsBRASIL.includes("2")){
        var brasilsat = "BRSat2";
        };
        
        if (subsBRASIL.includes("BRASIL") && subsBRASIL.includes("1")){
        var brasilsat = "BRSat1";
        };

        if (subsBRASIL.includes("BRASIL")){
        var brasilsat = "BRSat1";
        };
        
        if (subsBR.includes("BRA") && subsBR.includes("4")){
        var brasilsat = "BRSat4";
        };
        
        if (subsBR.includes("BRA") && subsBR.includes("3")){
        var brasilsat = "BRSat3";
        };
        
        if (subsBR.includes("BRA") && subsBR.includes("2")){
        var brasilsat = "BRSat2";
        };
        
        if (subsBR.includes("BRA") && subsBR.includes("1")){
        var brasilsat = "BRSat1";
        };
        
        if (subsBR.includes("BRA")){
        var brasilsat = "BRSat1";
        };
        
        
        
        //------------- HISPASAT 1C / 1D / 1E / 6 --------------------------------------//
        var busHISP = parametrosM.indexOf("HISP");
        var subsHISP = parametrosM.substring(busHISP, busHISP + 15);
    
        var hispasat = "";

        if (subsHISP.includes("HISP") && subsHISP.includes("1C")){
        var hispasat = "Hisp1C";
        };

        if (subsHISP.includes("HISP") && subsHISP.includes("1D")){
        var hispasat = "Hisp1D";
        };
        
        if (subsHISP.includes("HISP") && subsHISP.includes("1E")){
        var hispasat = "Hisp1E";
        };
        
        if (subsHISP.includes("HISP") && subsHISP.includes("1")){
        var hispasat = "Hisp1";
        };
        
        if (subsHISP.includes("HISP") && subsHISP.includes("6")){
        var hispasat = "Hisp6";
        };

        //-------------------- Galaxy 28 ------------------------//
        var busGAL = parametrosM.indexOf("GAL");
        var subsGAL = parametrosM.substring(busGAL, busGAL + 15);
    
        var galsat = "";

        if (subsGAL.includes("GALAX") && subsGAL.includes("28")){
        var galsat = "G28";
        };

        if (parametrosM.includes("G-28")){
        var galsat = "G28";
        };
        
        if (parametrosM.includes("G28 ")){
        var galsat = "G28";
        };
        
        if (subsGAL.includes("GAL") && subsGAL.includes("28")){
        var galsat = "G28";
        };
        
        if (subsGAL.includes("GALAXY") && subsGAL.includes("28")){
        var galsat = "G28";
        };

        var condLNB3 = ` ${intelsat} ${ses} ${tssat} ${arsat} ${eu} ${nss} ${ama} ${brasilsat} ${hispasat} ${galsat} `;
        var condLNB2 = condLNB3.trim();
        var condLNB1 = condLNB2.split(" ");
        var condLNB = condLNB1[0];
        
        const lnbC = 5150;
        var lnbKu = 10750;
        if(condLNB.includes("AR1")){
        lnbKu = 10500;
        };
        
        if(condLNB.includes("EU8")){
        lnbKu = 10600;
        };
        
        if(condLNB.includes("EU117")){
        lnbKu = 10745;
        };
        
        if(condLNB.includes("TelStar14")){
        lnbKu = 10000;
        };
    
        // --------------Frecuencia CB --------------- //
        const arrayFBC1 = [];
        for(let name of paramSplitPal){
        arrayFBC1.push(rangoFCB(name));  
        };
        
        function rangoFCB(a){
        b = parseInt(a);
            if(b>3699 && b<4200){
            return a;
            }else{ 
            return "";
            };
        };
    
        var frecCB = arrayFBC1.join("");
        
        var frecCBcomp1 = arrayFBC1.join("");
        var frecCBcomp1 = frecCBcomp1.substring(0,4);
        
        var frecCB = frecCB.substring(0, 4);
        
        frecCB = parseInt(frecCB);
        if ((frecCB>3699) && (frecCB<4200)){
        }else{
            frecCB = 0;
        };
        
        // --------------Frecuencia CB 3,7 4,1 --------------- //
        const arrayFBC2 = [];
        for(let name of paramSplitPal){
        arrayFBC2.push(rangoFCB3741(name));  
        };
    
        function rangoFCB3741(a){
        b = parseInt(a);
            if ((b == 4 || b == 3) && (a.includes(".")||a.includes(","))){
            c = a.split("");
            if (c[1] == "."||c[1] == ","){
                d = c[0] + c[2] + c[3] + c[4];
                e = parseInt(d);
                f = c[0] + c[1] + c[2] + c[3] + c[4];
                if (e > 3699 && e < 4200){
                return f;
                }else{
                return "";
                };
            };
            }else{
            return "";
            };
                        
        };
        
        var frecCB2 = arrayFBC2.join("");
        var frecCB2 = frecCB2.substring(0, 5);
        var frecCB2comp = frecCB2.substring(0, 5);
        var arrayFrecCB2 = frecCB2.split("");
        
        const arrayfrec3_4 = [];
        for(let name of arrayFrecCB2){
        arrayfrec3_4.push(fuerapyc(name));  
        };
    
        function fuerapyc(a){
        if(a.includes(".")){
            return "";
        }else{
            if(a.includes(",")){
            return "";
            }else{
            return a;
            };
        };
        };
        
        var frec3_4 = arrayfrec3_4.join("");
        if(frec3_4 == ""){
        frec3_4 = 0;
        };
        
        var frec3_4 = parseInt(frec3_4);
        if (frec3_4>3699 && frec3_4<4200){
        }else{
        frec3_4 = 0;
        };
        
        var posFCB1 = parametrosM.indexOf(frecCBcomp1);
        var posFCB2 = parametrosM.indexOf(frecCB2comp);
    
        // --------------Frecuencia KuB --------------- //
        const arrayFBKumiles = [];
        for(let name of paramSplitPal){
        arrayFBKumiles.push(rangoFKu1112k(name));  
        };
        
        function rangoFKu1112k(a){
        b = parseInt(a);
        if(b>11699 && b<12700){
            return a;
        }
        else return "";
        };
        
        const arrayFBKu1112 = [];
        for(let name of paramSplitPal){
        arrayFBKu1112.push(rangoFKu1112(name));  
        };
    
        function rangoFKu1112(a){
        b = parseInt(a);
            if ((b == 11 || b == 12) && (a.includes(".")||a.includes(","))){
            c = a.split("");
            if (c[2] == "."||c[2] == ","){
                d = c[0] + c[1] + c[3] + c[4] + c[5];
                e = parseInt(d);
                f = c[0] + c[1] + c[2] + c[3] + c[4] + c[5];
                if (e > 11699 && e < 12701){
                return f;
                }else{
                return "";
                };
            };
            }else{
            return "";
            }  ;            
        };
    
        var frecKuB = arrayFBKumiles.join("");
        var frecKucomp1 = frecKuB.substring(0,5);
        var frecKuB = frecKuB.substring(0,5);
        
        ///////////////valor numerico 11700 12700
        var fKU11700 = parseInt(frecKuB);
        /////////////////////////////
        //------------------------------------//
        var frecKucomp2 = arrayFBKu1112.join("");
        var frecKucomp2 = frecKucomp2.substring(0,6);
        
        var arrayFKu1112ab = frecKucomp2.split("");
        const frecKu1112sp = [];
        for(let name of arrayFKu1112ab){
        frecKu1112sp.push(sacarpuntosaKu(name));  
        };
        
        var fKuConsSp = frecKu1112sp.join("");
        var fKuConsSp = fKuConsSp.substring(0, 5);
        ///////////////valor numerico 11,700 12,700
        fKU11 = parseInt(fKuConsSp);
        /////////////////////////////
        if(fKU11700 < 12700 && fKU11700 > 11699){
        }else{
            fKU11700 = 0;
        };
        
        if(fKU11 < 12700 && fKU11 > 11699){
        }else{
            fKU11 = 0;
        };
    
        // -- funcion quitar puntos o comas -- //
        function sacarpuntosaKu(a){
        if(a.includes(".")){
            return "";
        }else{
            if(a.includes(",")){
            return "";
            }else{
            return a;
            };
        };
        };
    
        ///// //////////////////
        if(condLNB.includes("SES10")||condLNB.includes("HISP")||condLNB.includes("AR1")){
        frec3_4 = 0;
        frecCB = 0;
        };
        
        ///////////////////////////////////////////////////////////////
        var posFKuB1 = parametrosM.indexOf(frecKucomp1);
        var posFKuB2 = parametrosM.indexOf(frecKucomp2);
        
        const posiblesLocF = [posFKuB1,posFKuB2,posFCB1,posFCB2];
        const posiblesLocFsort = (posiblesLocF.sort((a,b) => a-b));
        
        const posicionF = [];
        for(let number of posiblesLocFsort){
        if(number > 0){
            posicionF.push(number);
        };
        };
    
        var posicionFrecConfirm = posicionF[0];
        
        const posiblesLocFKu = [posFKuB1,posFKuB2];
        const posiblesLocFKusort = (posiblesLocFKu.sort((a,b) => a-b));
        
        const posicionFKu = [];
        for(let number of posiblesLocFKusort){
        if(number > 0){
            posicionFKu.push(number);
        };
        };
        
        var posicionFrecKuConfirm = posicionF[0];
        
        if (posicionFrecKuConfirm == posFKuB1){
        fKU11 = 0;
        };
        if (posicionFrecKuConfirm == posFKuB2){
        fKU11700 = 0;
        };
        if(posFKuB1 == 0 && posFKuB2 == 0){
        fKU11 = 0;
        fKU11700 = 0;
        };
        if (posicionFrecKuConfirm == posFCB1){
        frec3_4 = 0;
        };
        
        if (posicionFrecKuConfirm == posFCB2){
        frecCB = 0;
        };
        
        if(posFCB1 == 0 && posFCB2 == 0){
        frecCB = 0;
        frec3_4 = 0;
        };
        
        var subsSRLH = parametrosM.substring(posicionFrecConfirm);
        var arrParaSrLH = subsSRLH.split(" ");
        arrParaSrLH = arrParaSrLH.splice(1);
        var subsParaBusSrLH = arrParaSrLH.join(" ");

        ///////////////////////////////////////////////////////////////
        // ///////////////////// banda Ku a Banda C ////////////////////////// //
        var frecKuUnif = fKU11700 + fKU11;
        fKuC = (frecKuUnif - lnbKu - lnbC) * - 1;
        // ////////////////////////////////////////////////////////////////// //

        // condicionar los valores finales de frecKu segun satelite //
        if(condLNB.includes("IS34")||condLNB.includes("SES14")||condLNB.includes("SES6")||condLNB.includes("707")||condLNB.includes("BRS")||condLNB.includes("IS21")||condLNB.includes("IS11")){
        fKuC = 0;
        }else{
        };

        // ----- Sufijo Sat ----- //
        if(frecCB>3699||frecCB<4200){
        var fcbt = parseInt(frecCB);
        }else{
            fcbt = 0;
        };

        if (((parseInt(frecKuUnif)+fcbt)>11699) && ((parseInt(frecKuUnif)+fcbt)<12700)){
        var sufSatKu = "Ku";
        }else{
            var sufSatKu = "";
        };

        var sumacku = parseInt(frecKuUnif)+fcbt;
        if ((condLNB.includes("EU117")||condLNB.includes("AR2")||condLNB.includes("G28")||condLNB.includes("IS1R")) && ((sumacku > 11699) && (sumacku < 12700))){
        }else{
            sufSatKu = "";
        };
        
        if ((fKuC<4200) && (fKuC>3200)){
        }else{
        fKuC = 0;
        };
    
        var resultFrectemp = (frecCB + fKuC + frec3_4);

        var frecConmN = 0;
        var polcircCon = "";
        if(resultFrectemp == 0 && parametrosM.length > 0){
        frecConmebol = buscarFRConmebol();
        if(frecConmebol != ""){
            frecConmN = parseInt(frecConmebol);

            if(frecConmebol.includes("V")||frecConmebol.includes("Y")){
            polcircCon = "V";
            };
            if(frecConmebol.includes("H")||frecConmebol.includes("X")){
            polcircCon = "H";
            };
            if(frecConmebol.includes("R")||frecConmebol.includes("RHCP")){
            polcircCon = "R";
            };
            if(frecConmebol.includes("L")||frecConmebol.includes("LHCP")){
            polcircCon = "L";
            };
            }else{
            frecConmebol = 0;
            polcircCon = "";
        };
        };

        function buscarFRConmebol(){
        arrayexperimento = parametrosM.split("/");
        arrayexperimento2 = arrayexperimento.join(" ");
        arrayexperimento3 = arrayexperimento2.split(" ");
        for(let palabras of arrayexperimento3){
            if((parseInt(palabras) > 3699 && parseInt(palabras) < 4200 )||(parseInt(palabras) > 11699 && parseInt(palabras) < 12700)){
            return palabras;
            }else{
                return ""
            };
        };
        };

        // ------------- Busqueda Roll Off ---------- ///////////
        
        var roEXP = "";

        if(parametrosM.includes("ROLLOFF")){
        var rollOff = busRollOff(parametrosM, "ROLLOFF");
        rolloffpublico = analisisRO(rollOff);
        var roEXP = rolloffpublico;
        };

        if(parametrosM.includes("ROLL OFF")){
        var roll_Off = busRollOff(parametrosM, "ROLL OFF");
        rolloffpublico = analisisRO(roll_Off);
        var roEXP = rolloffpublico;
        };

        var splitsplash = parametrosM.split("/");
        for(let palabra of splitsplash){
        if(palabra.includes("RO")&&palabra.includes("%")&&palabra.length<11){
            rolloffpublico = analisisRO(palabra);
            var roEXP = rolloffpublico;
            break;
        };
        };

        function analisisRO(a){

        if(a.includes("30%")||a.includes("0.30")||a.includes("0,30")||a.includes("0.3")){
            rolloffOK = 30;
        };
        
        if(a.includes("35%")||a.includes("0.35")||a.includes("0,35")||a.includes("0.35")||a.includes(".35")){
            rolloffOK = 35;
        };

        if(a.includes("20%")||a.includes("0.20")||a.includes("0,20")||a.includes("0,2")||a.includes("0.2")||a.includes(".20")){
            rolloffOK = 20;
        };

        if(a.includes("5%")||a.includes("0.05")||a.includes("0.05")){
            rolloffOK = 5;
        };

        if(a.includes("25%")||a.includes("0.25")||a.includes("0,25")||a.includes(".25")){
            rolloffOK = 25;
        };

        if(a.includes("1%")||a.includes("0.01")||a.includes("0.01")){
            rolloffOK = 1;
        };

        if(a.includes("10%")||a.includes("0.10")||a.includes("0,10")||a.includes("0,1")||a.includes("0.1")){
            rolloffOK = 10;
        };

        if(a.includes("2%")||a.includes("0.02")||a.includes("0.02")){
            rolloffOK = 2;
        };


        return rolloffOK;
        };

        function busRollOff(a,b){
        busqueda = a.indexOf(b);
        subsRO = a.substring(busqueda + b.length, busqueda + b.length + 7);
        return subsRO;
        };

        ///////////////// ----- Busqueda BW --------////////////

        const indicesIni = [];
        const posiblesBW = [];
        const posiblesBW2 = [];

        for(let index in paramSplitPal){
        if(paramSplitPal[index].includes("MHZ")){
            indicesIni.push(parseInt(index)-1);
            indicesIni.push(parseInt(index));
            indicesIni.push(parseInt(index)+1);
        };
        };
        
        for(let index of indicesIni){
        if(parseInt(paramSplitPal[index])>2 && parseInt(paramSplitPal[index]) < 73){
            posiblesBW.push(paramSplitPal[index]);
        };
        };

        for(let posible of posiblesBW){
        if(posible.includes("A")||posible.includes("B")||posible.includes("C")||posible.includes("D")||posible.includes("E")||posible.includes("F")||posible.includes("G")||posible.includes("I")||posible.includes("J")||posible.includes("K")||posible.includes("L")||posible.includes("N")||posible.includes("O")||posible.includes("P")||posible.includes("Q")||posible.includes("R")||posible.includes("S")||posible.includes("T")||posible.includes("U")||posible.includes("V")||posible.includes("W")||posible.includes("X")||posible.includes("Y")||posible.includes(".1")||posible.includes(".2")||posible.includes(".3")||posible.includes(".4")||posible.includes(".5")||posible.includes(".6")||posible.includes(".7")||posible.includes(".8")||posible.includes(".9")||posible.includes(",1")||posible.includes(",2")||posible.includes(",3")||posible.includes(",4")||posible.includes(",5")||posible.includes(",6")||posible.includes(",7")||posible.includes(",8")||posible.includes(",9")){
        }else{
            posiblesBW2.push(posible);
        };
        };

        if(parametrosM.includes("MHZ")){
        bwEXP = parseInt(posiblesBW2[0]);
        }else{
        bwEXP = "";
        };

        // ----------- Busqueda FEC ----------- //

        var fecEXP = "";

        if(parametrosM.includes(" 1/2 ")){
        fecEXP = "1/2";
        };

        if(parametrosM.includes(" 2/3 ")){
        fecEXP = "2/3";
        };
        if(parametrosM.includes(" 3/4 ")){
        fecEXP = "3/4";
        };
        if(parametrosM.includes(" 4/5 ")){
        fecEXP = "4/5";
        };
        if(parametrosM.includes(" 5/6 ")){
        fecEXP = "5/6";
        };
        if(parametrosM.includes(" 6/7 ")){
        fecEXP = "6/7";
        };
        if(parametrosM.includes(" 7/8 ")){
        fecEXP = "7/8";
        };
        if(parametrosM.includes(" 32/45 ")){
        fecEXP = "32/45";
        };

        if(parametrosM.includes("FEC RATE")){
        var busFR = parametrosM.indexOf("FEC RATE");
        var subsFR = parametrosM.substring(busFR+8);
        var subsFRSpl = subsFR.split(" ");
        for(let index in subsFRSpl){
            if(subsFRSpl[index].includes("/")){
            fecMuestra = subsFRSpl[index];
            fecEXP = analisisFEC(fecMuestra);
            break;
            };
        };
        };

        if(parametrosM.includes("FEC")){
        for(let index in paramSplitPal){
            if(paramSplitPal[index].includes("FEC")){
            fecMuestra = paramSplitPal[parseInt(index) + 1];
            fecEXP = analisisFEC(fecMuestra);
            break;
            };
        };
        };
    
        function analisisFEC(a){

        equiv = "";

        if(a.includes("1/2")){
            equiv = "1/2";
        };
        if(a.includes("2/3")){
            equiv = "2/3";
        };
        if(a.includes("3/4")){
            equiv = "3/4";
        };
        if(a.includes("4/5")){
            equiv = "4/5";
        };
        if(a.includes("5/6")){
            equiv = "5/6";
        };
        if(a.includes("6/7")){
            equiv = "6/7";
        };
        if(a.includes("7/8")){
            equiv = "7/8";
        };
        if(a.includes("32/45")){
            equiv = "32/45";
        };
        if(a.includes("¾")){
            equiv = "3/4";
        };
        return equiv;
        };

        // ----------- Busqueda de Modulacion DVB / DVBS2 / NS3 / NS4 ----------- //
        var busDVB = parametrosM.indexOf("DVB");
        var subsDVB = parametrosM.substring(busDVB, busDVB + 9);
        
        var mod = "";

        if (subsDVB.includes("DVB")){
        mod = "DVB";
        };
        
        if((subsDVB.includes("DVB") && subsDVB.includes("S2"))||(subsDVB.includes("DVB") && subsDVB.includes("S-2"))){
        mod = "DVB-S2";
        };

        if(parametrosM. includes("NS3") || parametrosM.includes("NS 3") || parametrosM.includes("NS-3")){
        mod = "NS3";
        };

        if(parametrosM. includes("NS4") || parametrosM.includes("NS 4") || parametrosM.includes("NS-4")){
        mod = "NS4";
        };

        // ---------- Busqueda de SYMBOL RATE / Premier / SR / SR: / MS S/R / L Rate / ---------- //
        // -------------------------------- SR -------------------------------//
        var busSR = subsSRLH.indexOf("SR ");
        var subsSR = subsSRLH.substring(busSR + 3);
        var subsSR = subsSR.trim();
        var busFinSRNum = subsSR.indexOf(" ");
        var srPSR = subsSR.substring(0, busFinSRNum);
        
        if(parametrosM.includes("SR ")){
        }else{
        srPSR = ("");
        };
    
        // -------------------------------- SR: ------------------------------//
        var busSRdp = subsSRLH.indexOf("SR: ");
        var subsSRdp = subsSRLH.substring(busSRdp + 4);
        var subsSRdp = subsSRdp.trim();
        var busFinSRdpNum = subsSRdp.indexOf(" ");
        var srPSRdp = subsSRdp.substring(0, busFinSRdpNum);
        
        if(parametrosM.includes("SR: ")){
        }else{
        srPSRdp = "";
        }
    
        // -------------------------------- Ms -------------------------------//
        var parMsplit = subsSRLH.split("");
        var parMsplitinv = parMsplit.reverse();
        var parMinv = parMsplitinv.join("");
        var busSM = parMinv.indexOf("SM");
        var subsSM = parMinv.substring(busSM + 2);
        var subsSM = subsSM.trim();
        var busFinSMnum = subsSM.indexOf(" ");
        var subsSMnum = subsSM.substring(0, busFinSMnum);
        var megs = subsSMnum.split("");
        var megs = megs.reverse();
        var megs = megs.join("");
        
        if(parametrosM.includes("MS")){
        }else{
            megs = ("")
        }
    
        // ---------------------------------- S/R ---------------------------------//
        var busSbR = subsSRLH.indexOf("S/R");
        var subsSbR = subsSRLH.substring(busSbR + 2);
        var busEspPosteriorSbR = subsSbR.indexOf(" ");
        var subsSbR = subsSbR.substring(busEspPosteriorSbR);
        var subsSbR = subsSbR.trim();
        var busFinSbRNumconesp = subsSbR.indexOf(" ");
        var busFinSbRNumconcero = subsSbR.indexOf("0");
        
        if (busFinSbRNumconesp<busFinSbRNumconcero){
            var busFinSbRNum = busFinSbRNumconesp
        }else{
            var busFinSbRNum = busFinSbRNumconcero
        }
        
        var srPSbR = subsSbR.substring(0, busFinSbRNum);
        if(parametrosM.includes("S/R")){
        }else{
            srPSbR = ("");
        }
    
        // ------------------------------ Symbol Rate ----------------------------//
        var busLrate = subsSRLH.indexOf("L RATE");
        var subsLrate = subsSRLH.substring(busLrate + 6);
        var busEspacioPosteriorLRate = subsLrate.indexOf(" ");
        var subsLrate = subsLrate.substring(busEspacioPosteriorLRate);
        var subsLrate = subsLrate.trim();
        var busFinLrate = subsLrate.indexOf(" ");
        var srLrate = subsLrate.substring(0, busFinLrate);
        
        if(parametrosM.includes("L RATE")){
        }else{
            srLrate = ("");
        }

        // ------------------------------ S Rate ----------------------------//
        var busSrate = subsSRLH.indexOf("S RATE");
        var subsSrate = subsSRLH.substring(busSrate + 5);
        var busEspPostClave = subsSrate.indexOf(" ");
        var subsSrate = subsSrate.substring(busEspPostClave);
        var subsSrate = subsSrate.trim();
        var busEspacioPosteriorNumSRate = subsSrate.indexOf(" ");
        var srSrate = subsSrate.substring(0, busEspacioPosteriorNumSRate);
        
        if(parametrosM.includes("S RATE")){
        }else{
            srSrate = ("");
        }
        
        // -------------------------------- Premier -------------------------------//
        srEPL = ""
        
        if (subsSRLH.includes("35,294,118")||subsSRLH.includes("35,294118")){
        srEPL = "35,294,118"
        }

        if (subsSRLH.includes("25.71")){
        srEPL = "25.71"
        }

        if (subsSRLH.includes("23,529,412")||subsSRLH.includes("23,529412")){
        srEPL = "23,529,412"
        }

        if(subsSRLH.includes("17,647,059")||subsSRLH.includes("17,647059")){
        srEPL = "17,647,059"
        }

        if (subsSRLH.includes("8.571429")||subsSRLH.includes("8,571,429")){
        srEPL = "8.571429"
        }

        if (subsSRLH.includes("34.285")||subsSRLH.includes("34,285")){
        srEPL = "34.285"
        }

        if (subsSRLH.includes("8,57")||subsSRLH.includes("8.57")){
        srEPL = "8,57"
        }

        if (subsSRLH.includes("7,2")||subsSRLH.includes("7,2")){
        srEPL = "7,2"
        }

        if (subsSRLH.includes("7,5")||subsSRLH.includes("7.5")){
        srEPL = "7,5"
        }

        if (subsSRLH.includes(" 70 ")){
        srEPL = "70"
        }

        // -------------------------------- LH -------------------------------//
        // enviar palabras a la funcion "filtrar con desimales" //
        subsSRLH
        const arrFiltro1 = []
        for(let name of arrParaSrLH){
        arrFiltro1.push(fueraletras(name));// filtrando letras excepto "M" "S"
        }
    
        const arrFiltro2 = []
        for(let name of arrFiltro1){
        arrFiltro2.push(rangoSR(name));// parseInteable
        }
        
        const arrFiltro3 = []
        for(let name of arrFiltro2){
        arrFiltro3.push(fueracosasraras(name));// filtrando caracteres raros excepto "/"
        }
        
        const arrFiltro4 = []
        for(let name of arrFiltro3){
        arrFiltro4.push(filtPalConDecimales(name));// filtrando palabras con decimales
        }
        
        
        const arrFiltro5 = [];
        for(let name of arrFiltro4){
        arrFiltro5.push(ultimacomaopunto(name));// filtrando palabras con ultimo caracter coma o punto
        }
        
        const arrFiltro6 = [];
        for(let name of arrFiltro5){
        arrFiltro6.push(detectarDByBW(name));// filtrando dB y BW
        }
        
        srLH = arrFiltro6.join(" ");
        srLH = srLH.trim()+ " ";
    
        //----------------------- Funciones aplicadas para filtrar LH ------------------------//
        function rangoSR(a){
        b = parseInt(a)
            if(b>1 && b<71){
            return a}
            else return ""
        }
    
        function fueraletras(a){
        if(a.includes("A")||a.includes("B")||a.includes("C")||a.includes("D")||a.includes("E")||a.includes("F")||a.includes("G")||a.includes("H")||a.includes("I")||a.includes("J")||a.includes("K")||a.includes("L")||a.includes("N")||a.includes("O")||a.includes("P")||a.includes("Q")||a.includes("R")||a.includes("T")||a.includes("U")||a.includes("V")||a.includes("W")||a.includes("X")||a.includes("Y")||a.includes("Z")){
        return " "}
        else return a
        }
    
        function fueracosasraras(a){
        if(a.includes(":")||a.includes(";")||a.includes("_")||a.includes("-")||a.includes("(")||a.includes(")")||a.includes("=")||a.includes("+")||a.includes("!")||a.includes("#")||a.includes("$")||a.includes("&")||a.includes("*")||a.includes("%")||a.includes("59,94")||a.includes("59.94")||a.includes("4.2.0")||a.includes("4.2.2")){
        return " "}
        else return a
        }
    
        function filtPalConDecimales(a){
        if(a.includes(".")){
            return a
        }else{
            if(a.includes(",")){
            return a
            }else{return ""
            }
        }
        }
    
        function ultimacomaopunto(a){
        b = a.split("");
        if ((b[b.length-1] === ".")||(b[b.length-1] === ",")){
            return ""
        }else{return a}
        }
    
        function detectarDByBW(a){
        busA = parametrosM.indexOf(a)
        if(busA == 0){
            return ""
        }

        subsA = parametrosM.substring(busA-8, busA+18)
            subsa = a.substring(busA-8, busA+18)
        if(subsA.includes("BW")||subsa.includes("dB")||subsA.includes("FREQ")||subsA.includes("MBPS")||subsA.includes(a + " W ")||subsA.includes(a + " E ")||subsA.includes("MHZ")){
            return ""
        }else{
            return a}
        }
    
        // -------------- Consolidacion de SR -------------------- //
        var srConcatenado = ` ${srPSbR} ${srPSR} ${srPSRdp} ${megs} ${srSrate} ${srLrate} ${srLH} ${srEPL} `;
        
        var srConcatenado = srConcatenado.trim();
        var srConcatenado = (srConcatenado + " ");
        var busEspSrConcat = srConcatenado.indexOf(" ");
        var subsSrConcatAb = srConcatenado.substring(0, busEspSrConcat);
        // ---------- RAS 7 ---------- //
        var busRas = parametrosM.indexOf("ras");
        var subsRas = parametrosM.substring(busRas);
        var subRasSplit = subsRas.split(" ");
        
        const rases = [];
        for (let name of subRasSplit){
        if (name.length==7){
        rases.push(parseInt(1 + name))
        }
        }
    
        const rasesStr = [];
        for (let name of rases){
        rasesStr.push(name.toString())
        }
        
        const rasesOK = [];
        for (let name of rasesStr){
        if(name.length==8){
        rasesOK.push(name.substring(1,8))
        }
        }
        
        var rascode = rasesOK[0] + "a";
        if(rascode.length==8){
        rascode = rascode.substring(0,7);
        }else{
            rascode = ""
        }
        
        if(parametrosM.includes("RAS")){
        }else{
            rascode = ""
        }
        
        if(rascode.length==7){
        }else{
            rascode = ""
        }
    
        // --------- Ras 13 ---------- //
        const posiblesRas13 = [];
        for (var i = 0; i < paramSplitPal.length; i++){
        if(paramSplitPal[i].length===13){ 
            posiblesRas13.push(paramSplitPal[i]);
            }
        }
        
        const temp6 = []
        for (let name of posiblesRas13){
        temp6.push(fuerapuntosRas13(name))
        }
        
        function fuerapuntosRas13(a){
        const temp7 = []
        for(let name of a){
            if (name == "."){
            }else
            {
            temp7.push(name)
            }
        }
        return temp7.join("");
        }
        
        const temp8 = [];
        for (let name of temp6){
        if (name.length==7){
            temp8.push(name);
        }else{
            temp8.push(" ")
        }
        }
    
        var temp9 = temp8.join("") + " ";
        temp9 = "1" + (temp9.trim());
        var temp9 = parseInt(temp9);
        temp9 = temp9.toString();
        
        if(temp9.length==8)
        {
        temp9 = temp9.substring(1,8)
        }else
            {
            temp9 = ""
        }
        
        var ras713 = temp9;
    
        // --------- CA Director5 ---------- //
        var caDir
        
        if (parametrosM.includes("DIRECTOR")){
        caDir = "Director5"
        }else{
            caDir = ""
        }
    
        // --------- HMCRYPT ------ //
        if(parametrosM.includes("HMCRYPT")){
        hmCrypt = "HMCRYPT"
            }else{
            hmCrypt = ""
        }

        var caBISSCA
        
        if (parametrosM.includes("BISS CA")){
        caBISSCA = "BISS-CA"
        }else{
            caBISSCA = ""
        }
    
        // ------------------------------------ Biss ---------------------------------------- //
        // ---------- Buscar Biss AFA --------- //
        var busBissCode = parametrosM.indexOf("BISS CODE");
        var subsBissCode = parametrosM.substring(busBissCode);
        var busPuntoPostBiss = subsBissCode.indexOf(".");
        var subsBCPunto = subsBissCode.substring(0, busPuntoPostBiss);
        var arrayBCP = [];
        arrayBCP = subsBCPunto.split(" ");
        
        var arraybissAFA = [];
        for(let name of arrayBCP){
        arraybissAFA.push(validBiss(name));
        }
        
        var bissAFA = arraybissAFA.join("");
        
        if(bissAFA.length===12)
        {
        }else
        {
            bissAFA = ("")
        }
    
        // ---------- Buscar Biss AFA 2 --------- //
        const posiblesbiss45 = [];
        for (var i = 0; i < paramSplitPal.length; i++){
        if(paramSplitPal[i].length===4||(paramSplitPal[i].length===5 && paramSplitPal[i].includes("."))){ 
            posiblesbiss45.push(paramSplitPal[i]);
            }
        }
        
        const biss45 = []
        for(let name of posiblesbiss45){
        biss45.push(validBissconpunto(name));
        }
    
        var frank3 = biss45.join("");
        var frank3spl = frank3.split("");
        var frank3splrev = frank3spl.reverse("");
        var bissAfa2rev = frank3splrev.join("");
        var busPunBissF = bissAfa2rev.indexOf(".");
        var subsBissFRev = bissAfa2rev.substring(busPunBissF + 1, busPunBissF + 13);
        var bissF3revspl = subsBissFRev.split("");
        var bissF3spl = bissF3revspl.reverse("");
        var frank4 = bissF3spl.join("");
        frank4 = validBiss(frank4);
        // filtrar palabras de 4 caracteres
        const posiblesbiss4 = [];
        for (var i = 0; i < paramSplitPal.length; i++){
        if(paramSplitPal[i].length===4){ 
            posiblesbiss4.push(paramSplitPal[i]);
            }
        }
    
        // validar palabras de 4 caracteres + concatenar biss
        const biss4 = []
        for(let name of posiblesbiss4){
        biss4.push(validBiss(name));
        }
        
        var biss124 = biss4.join("");
        var biss124B = biss124
        // verificador longitud biss 124
        if(biss124.length===12){}else{
        biss124 = ("")
        }
        
        if(biss124B.length != 12){
        biss124 = biss124B.substring(biss124B.length - 12, biss124B.length)
        }
        
        if(biss124.length===12){
        }else{
        biss124 = ("")
        }
    
        // ----- filtrar palabras de 7 caracteres ----- //
        const posiblesbiss7 = [""];
        for (var i = 0; i < paramSplitPal.length; i++){
        if(paramSplitPal[i].length===7){ 
            posiblesbiss7.push(paramSplitPal[i]);
            }
        }
        
        // ----- validar biss con puntos ----- //
        const biss777 = []
        for(let name of posiblesbiss7){
        biss777.push(validBissconpunto(name))
        }
        
        // ----- filtrar los puntos ----- //
        const temp2 = []
        for (let name of biss777){
        temp2.push(fuerapuntosbiss7(name))
        }
    
        function fuerapuntosbiss7(a){
        const temp3 = []
        for(let name of a){
            if (name == "."){
            }else
            {
            temp3.push(name)
            }
        }
        return temp3.join("");
        }
        // ----- medir longitudes y volver a unir ----- //
        const temp4 = [];
        for (let name of temp2){
        if (name.length==4)
            {
            temp4.push(name);
            }else
            {
            temp4.push(" ")
            }
        }
        
        var temp5 = temp4.join("");
        
        temp5 = temp5.trim();
    
        // ----- validar biss 127 ----- //
        if(temp5.length == 12||temp5.length == 16)
        {
        var biss127 = validBiss(temp5);
        }else
        {
        var biss127 = ""
        }

        // filtrar palabras de 12 caracteres
        const posiblesbiss12 = [];
        for (var i = 0; i < paramSplitPal.length; i++){
        if(paramSplitPal[i].length===12){ 
            posiblesbiss12.push(paramSplitPal[i]);
            }
        }
        
        // validar palabras de 12 caracteres
        const biss1212 = []
        for(let name of posiblesbiss12){
        biss1212.push(validBiss(name));
        }
    
        var biss12de12 = biss1212.join("")
        // validar biss de 12 caracteres
        if(biss12de12.includes("1")||biss12de12.includes("2")||biss12de12.includes("3")||biss12de12.includes("4")||biss12de12.includes("5")||biss12de12.includes("6")||biss12de12.includes("7")||biss12de12.includes("8")||biss12de12.includes("9")||biss12de12.includes("0")||biss12de12.includes("A")||biss12de12.includes("B")||biss12de12.includes("C")||biss12de12.includes("D")||biss12de12.includes("E")||biss12de12.includes("F")){
        var biss1_OK = biss12de12
        }else{
            biss1_OK = ("")
        }
        if (biss1_OK.length==12){
        }else{
            biss1_OK = ""
        }
        
        // filtrar palabras de 16 caracteres
        const posiblesbiss16 = [];
        for (var i = 0; i < paramSplitPal.length; i++){
        if(paramSplitPal[i].length===16){ 
            posiblesbiss16.push(paramSplitPal[i]);
            }
        }
        
        // validar palabras de 16 caracteres
        const biss16 = [""]
        for(let name of posiblesbiss16){
        biss16.push(validBiss(name));
        }
    
        var biss16de16 = ("").concat(biss16.join(""))
        // validar biss de 16 caracteres
        if(biss16de16.includes("1")||biss16de16.includes("2")||biss16de16.includes("3")||biss16de16.includes("4")||biss16de16.includes("5")||biss16de16.includes("6")||biss16de16.includes("7")||biss16de16.includes("8")||biss16de16.includes("9")||biss16de16.includes("0")||biss16de16.includes("A")||biss16de16.includes("B")||biss16de16.includes("C")||biss16de16.includes("D")||biss16de16.includes("E")||biss16de16.includes("F")){
        var bissE_OK = biss16de16
        }else{
            bissE_OK = ("")
        }
        if (bissE_OK.length==16){
        }else{
            bissE_OK = ""
        }
    
        // filtrar palabras que tengan 23 caracteres
        const posiblesbiss23 = [""];
        for (var i = 0; i < paramSplitPal.length; i++){
        if(paramSplitPal[i].length===23){ 
            posiblesbiss23.pop();
            posiblesbiss23.push(paramSplitPal[i]);
            }
        }
        
        var biss23 = posiblesbiss23[0];
        
        if((biss23.length)===23)
        {
        biss23 = biss23
            }else{
            biss23 = ".."
        }
    
        biss1223 = biss23.split("");
        const biss1223sinpuntos = [];
        for(let name of biss23){
        biss1223sinpuntos.push(validBiss(name));
        }
        
        var biss12de23 = biss1223sinpuntos.join("");
        
        if (biss12de23.length==12){
        }else{
            biss12de23 = ""
        }
        // filtrar palabras que tengan 31 caracteres
        const posiblesbiss31 = [""];
        for (var i = 0; i < paramSplitPal.length; i++){
        if(paramSplitPal[i].length===31){ 
            posiblesbiss31.pop();
            posiblesbiss31.push(paramSplitPal[i]);
            }
        }
    
        var biss31 = posiblesbiss31[0];
        if((biss31.length)===31)
        {
        biss31 = biss31
            }else{
            biss31 = ".."
        }
    
        biss1631 = biss31.split("");
        const biss1631sinpuntos = [];
        for(let name of biss31){
        biss1631sinpuntos.push(validBiss(name));
        }
        
        var biss16de31 = biss1631sinpuntos.join("");
        
        if (biss16de31.length==16){
        }else{
            biss16de31 = ""
        }
    
        // --------------- Consolidacion de Biss -------------------- //
        if(frank4.length===12){
        }else{
            frank4 = ""
        }
    
        var caChain = ` ${hmCrypt} ${biss1_OK} ${bissE_OK} ${biss127} ${bissAFA} ${biss12de23} ${biss16de31} ${frank4} ${biss124} ${caDir} ${rascode} ${ras713} ${caBISSCA} `;
        var caChain = caChain.trim();
        var caChainSpl = caChain.split(" ");
        var conditionalAccess = caChainSpl[0];

        // validar palabras que contengan caracteres hexadecimales
        function validBiss(a){

        if(a.includes("G")){
            return ("")
        }

        if(a.includes("H")){
            return ("")
        }

        if(a.includes("I")){
            return ("")
        }

        if(a.includes("J")){
            return ("")
        }
        
        if(a.includes("K")){
            return ("")
        }
        
        if(a.includes("L")){
            return ("")
        }
        
        if(a.includes("M")){
            return ("")
        }
        
        if(a.includes("N")){
            return ("")
        }
        
        if(a.includes("O")){
            return ("")
        }
        
        if(a.includes("P")){
            return ("")
        }
        
        if(a.includes("Q")){
            return ("")
        }

        if(a.includes("R")){
            return ("")
        }
        
        if(a.includes("S")){
            return ("")
        }
        
        if(a.includes("T")){
            return ("")
        }
        
        if(a.includes("U")){
            return ("")
        }
        
        if(a.includes("V")){
            return ("")
        }
        
        if(a.includes("W")){
            return ("")
        }
        
        if(a.includes("X")){
            return ("")
        }
        
        if(a.includes("Y")){
            return ("")
        }
        
        if(a.includes("Z")){
            return ("")
        }
        
        if(a.includes("(")){
            return ("")
        }
        
        if(a.includes(")")){
            return ("")
        }

        if(a.includes("/")){
            return ("")
        }

        if(a.includes("_")){
            return ("")
        }

        if(a.includes("-")){
            return ("")
        }

        if(a.includes(",")){
            return ("")
        }

        if(a.includes(".")){
            return ("")
        }

        if(a.includes(":")){
            return ("")
        }

        if(a.includes("+")){
            return ("")
        }

        return a

        }
    
        // validar palabras que contengan caracteres hexadecimales con punto
        function validBissconpunto(a){
        if(a.includes("G")){
            return ("")
        }
        
        if(a.includes("H")){
            return ("")
        }
        
        if(a.includes("I")){
            return ("")
        }
        
        if(a.includes("J")){
            return ("")
        }
        
        if(a.includes("K")){
            return ("")
        }
        
        if(a.includes("L")){
            return ("")
        }
        
        if(a.includes("M")){
            return ("")
        }
        
        if(a.includes("N")){
            return ("")
        }
        
        if(a.includes("O")){
            return ("")
        }
        
        if(a.includes("P")){
            return ("")
        }
        
        if(a.includes("Q")){
            return ("")
        }
        
        if(a.includes("R")){
            return ("")
        }
        
        if(a.includes("S")){
            return ("")
        }
        
        if(a.includes("T")){
            return ("")
        }
        
        if(a.includes("U")){
            return ("")
        }
        
        if(a.includes("V")){
            return ("")
        }
        
        if(a.includes("W")){
            return ("")
        }
        
        if(a.includes("X")){
            return ("")
        }
        
        if(a.includes("Y")){
            return ("")
        }
        
        if(a.includes("Z")){
            return ("")
        }
        
        if(a.includes("(")){
            return ("")
        }

        if(a.includes(")")){
            return ("")
        }
        
        if(a.includes("/")){
            return ("")
        }
        
        if(a.includes("_")){
            return ("")
        }
        
        if(a.includes("-")){
            return ("")
        }
        
        if(a.includes(",")){
            return ("")
        }
        
        if(a.includes("∑")){
            return ("")
        }
        
        if(a.includes(":")){
            return ("")
        }
        
        return a
        
        }
    
        // --------------------- Circulares 1 ----------------------- //
        busCircL = parametrosM.indexOf("RHC");
        subsCircL = parametrosM.substring(busCircL + 3);
        if (subsCircL.includes("LHC")){
        circL = "L"
            }
            else{
            circL = ("")
        }
        
        busCircR = parametrosM.indexOf("LHC");
        subsCircR = parametrosM.substring(busCircR + 3);
        if (subsCircR.includes("RHC")){
        circR = "R"
            }
            else{
            circR = ("")
        }
        
        var pol0 = circL + circR;
        // --------------------- Polaridad 1 V/H - H/V ------------------------ //
        if(parametrosM.includes("V/H"))
        {
            var polH = ("H")
        }else
            {
            var polH = ("")
        }
        
        if(parametrosM.includes("H/V"))
        {
            var polV = ("V")
        }else
            {
            var polV = ("")
        }
        
        var pol1 = polH + polV;
        // ------------------- Polaridad 2 Vert Hori H Hori Vert V----------------------- //
        var busHorizontal = parametrosM.indexOf("VERT");
        var subsHorizontal = parametrosM.substring(busHorizontal + 1);
        
        if (subsHorizontal.includes("HORIZ"))
        {
        polHoriz = ("H")
        }else
        {
        polHoriz = ""
        }
        
        var busVertical = parametrosM.indexOf("HORIZ");
        var subsVertical = parametrosM.substring(busVertical + 1);
        
        if (subsVertical.includes("VERT"))
        {
        polVert = ("V")
        }else
        {
        polVert = ""
        }
        
        var pol2 = (polHoriz + polVert);
        // ------------------- Polaridad 3 ----------------------- //
        var busLetraH = parametrosM.indexOf(" H ");
        var subsLetraH = parametrosM.substring(busLetraH + 2);
        
        if (subsLetraH.includes(" V "))
        {
        var polLetraV = "V"
        }else
            {
            var polLetraV = ""
        }
        var busLetraV = parametrosM.indexOf(" V ");
        var subsLetraV = parametrosM.substring(busLetraV + 2);
        if (subsLetraV.includes(" H "))
        {
        var polLetraH = "H"
        }else
            {
            var polLetraH = ""
        }
        
        if (parametrosM.includes(" H ") && parametrosM.includes(" V "))
        {
        polLetraH = polLetraH;
        polLetraV = polLetraV;
        }else
            {
            polLetraH = "";
            polLetraV = "";
        }
        var pol3 = polLetraH + polLetraV;

        
        // -------------- Polaridad  / Circularidad Post frecuencia ------------------ //
        var subsVerifPol = subsSRLH;

        pol4 = ""

        if(subsVerifPol.includes(" VERT")||subsVerifPol.includes(" V ")||subsVerifPol.includes(" Y ")||subsVerifPol.includes("(Y)")){
        pol4 = "V"
        }
        if (subsVerifPol.includes(" HORI")||subsVerifPol.includes(" H ")||subsVerifPol.includes(" X ")||subsVerifPol.includes("(H)")){
        pol4 = "H"
        }
        if (subsVerifPol.includes("RHCP")||subsVerifPol.includes(" R ")){
        pol4 = "R"
        }
        if (subsVerifPol.includes("LHCP")||subsVerifPol.includes(" L ")){
        pol4 = "L"
        }

        if (pol2.includes("V")||pol2.includes("H")){
        pol4 = ""
        }
        
        if (pol3.includes("V")||pol3.includes("H")){
        pol4 = ""
        }
        
        if (pol0.includes("R")||pol0.includes("L")){
        pol4 = ""
        }

        // ---------- Servicio 1 ------------ //
        function proximapalabra(a){
        var aSplitPal = a.split(" ");
        var segPal = aSplitPal[1];
        return segPal;
        }
    
        var busSvc = parametrosM.indexOf("SVC");
        var subsSvc = parametrosM.substring(busSvc);
        var svc = proximapalabra(subsSvc);
        
        if(parametrosM.includes(" SVC"))
        {
        }else
            {
            svc = ("");
        }
        
        if (svc != (""))
        {
        srv = "Srv"
        }else
            {
            srv = ""
        }
        
        if (svc > 0)
        {
        srv = "Srv"
        }else
            {
            srv = ""
            svc = ""
        }
    
        // ---------- Servicio 2 ------------ //
        var busSid = parametrosM.indexOf("SID");
        var subsSid = parametrosM.substring(busSid);
        var sid = proximapalabra(subsSid);
        var sid = parseInt(sid);
        
        if(parametrosM.includes(" SID"))
        {
        }else
            {
            sid = ("");
        }
        
        if (sid != (""))
        {
        srv2 = "Srv"
        }else
            {
            srv2 = ""
        }
        
        if (sid > 0)
        {
        srv2 = "Srv"
        }else
            {
            srv2 = ""
            sid = ""
        }
    
        // ---------- Servicio 3 ------------ //
        var busSrvc = parametrosM.indexOf("SRVC");
        var subsSrvc = parametrosM.substring(busSrvc);
        var srvc = proximapalabra(subsSrvc);
        var srvc = parseInt(srvc);
        if(parametrosM.includes(" SRVC"))
        {
        }else
            {
            srvc = ("");
        }
        
        if (srvc != (""))
        {
        srv3 = "Srv"
        }else
            {
            srv3 = ""
        }
    
        if (srvc > 0)
        {
        srv3 = "Srv"
        }else
            {
            srv3 = ""
            srvc = ""
        }
    
        // ---------- Servicio 4 ------------ //
        var busService = parametrosM.indexOf("SERVICE");
        var subsService = parametrosM.substring(busService);
        var service = proximapalabra(subsService);
        var service = parseInt(service);
        
        if(parametrosM.includes("SERVICE"))
        {
        }else
            {
            service = ("");
        }
        
        if (service != (""))
        {
        srv4 = "Srv"
        }else
            {
            srv4 = ""
        }
    
        if (service > 0)
        {
        srv4 = "Srv"
        }else
            {
            srv4 = ""
            service = ""
        }

        // ---------- Servicio 5 ------------ //
        var busID = parametrosM.indexOf("SERVICE ID");
        var subsID = parametrosM.substring(busID+9);
        var srvid = proximapalabra(subsID);
        var srvid = parseInt(srvid);
        if(parametrosM.includes("SERVICE ID")){

        }else
        {
        srvid = ("");
        }
        
        if (srvid != (""))
        {
        srv5 = "Srv"
        }else
            {
            srv5 = ""
        }
    
        if (srvid > 0)
        {
        srv5 = "Srv"
        }else
            {
            srv5 = ""
            srvid = ""
        }

        // ---------------- Standard -------------------- //
        var bus720 = parametrosM.indexOf("720");
        var subs720 = parametrosM.substring(bus720, bus720 + 10);
    
        if (parametrosM.includes("720"))
        {
        if (subs720.includes("50"))
            {
            var standard720 = "720p50Hz"
            }else
            {
            if (subs720.includes("59"))
                {
                var standard720 = "720p59,94Hz"
                }else
                {
                if (subs720.includes("60")){
                    var standard720 = "720p60Hz"
                    }else
                    { 
                    standard720 = ""
                    }
                    }
                }
        }else
            {
            standard720 = ""
        }
    
        if (standard720 != (""))
        {
        }else
            {
            standard720 = ""
        }
    
        var bus1080 = parametrosM.indexOf("1080");
        var subs1080 = parametrosM.substring(bus1080, bus1080 + 12);
    
        if (parametrosM.includes("1080"))
        {
        if (subs1080.includes("50"))
            {
            var standard1080 = "1080i50Hz"
            }else
            {
            if (subs1080.includes("59"))
                {
                var standard1080 = "1080i59,94Hz"
                }else
                {
                if (subs1080.includes("60"))
                    {
                    var standard1080 = "1080i60Hz"
                    }else
                    { 
                    standard1080 = ""
                    }
                    }
                }
        }else
        {
        standard1080 = ""
        }
    
        if (standard1080 != (""))
        {
        }else{
            standard1080 = ""
        }
    
        var busHD = parametrosM.indexOf("HD");
        var subsHD = parametrosM.substring(busHD + 2, busHD + 6);
    
        if (parametrosM.includes("HD"))
        {
        if (subsHD.includes("50"))
            {
            var standardHD = "50Hz"
            }else
            {
            if (subsHD.includes("59"))
                {
                var standardHD = "59,94Hz"
                }else
                {
                if (subsHD.includes("60"))
                    {
                    var standardHD = "60Hz"
                    }else
                    { 
                    standardHD = ""
                    }
                    }
                }
        }else
        {
        standardHD = ""
        }
    
        if (standardHD != (""))
        {
        }else{
            standardHD = ""
        }
    
        var busHz = parametrosM.indexOf("HZ");
        var subsHz = parametrosM.substring(busHz - 6, busHz);
    
        if (parametrosM.includes("HZ")){
        if (subsHz.includes("50")){
            var standardHz = "50Hz"
            }else{
            if (subsHz.includes("59")||subsHz.includes("94")){
                var standardHz = "59,94Hz"
                }else{
                if(subsHz.includes("60")){
                    var standardHz = "60Hz"
                    }else{ 
                    standardHz = ""
                    }
                    }
                }
        }else{
            standardHz = ""
        }

        var standardSeguidilla = ` ${standard1080} ${standard720} ${standardHz} ${standardHD} `;
        var standardSeguidilla = standardSeguidilla.trim();
        var standardSplit = standardSeguidilla.split(" ");
        var standardUnif = standardSplit[0];

        ///////// bus PSK

        compressMod = ""

        if(parametrosM.includes("8PSK") || parametrosM.includes("8 PSK")){
        compressMod = "8PSK"
        }

        if(parametrosM.includes("16APSK") || parametrosM.includes("16 APSK")){
        compressMod = "16APSK"
        }

        if(parametrosM.includes("QPSK")){
        compressMod = "QPSK"
        }

        var pskEXP = compressMod

        ////////// ------- Busqueda MegaBytes/S ---------- //////////

        var bitrateEXP = "";

        if(parametrosM.includes("MBPS")){
        for(let index in paramSplitPal){
            if(paramSplitPal[index].includes("MBPS")){
            bitrateEXP = paramSplitPal[parseInt(index) -1]
            }
        }
        }

        // ---/\---/\---/\---/\-------- CONSOLIDACION DE DATOS --------/\---/\---/\---/\--- //
        var sumaPolCir = ` ${pol0} ${pol1} ${pol2} ${pol3} ${pol4} ${polcircCon} `;

        var sumaPolCir = sumaPolCir.trim();
        var sumaPolCirSplit = sumaPolCir.split(" ");
        var polUnif = sumaPolCirSplit[0];
        var srUnif = subsSrConcatAb;

        var srvUnif = ` ${srv}${svc} ${srv2}${sid} ${srv3}${srvc} ${srv4}${service} ${srv5}${srvid} `;
        var srvUnif = srvUnif.trim();
        var srvUnifSpl = srvUnif.split(" ");
        var svc = srvUnifSpl[0];
        // ---/\---/\---/\---/\-------- RETORNO DE RESULTADOS --------/\---/\---/\---/\--- //
        var resultFrec = (frecCB + fKuC + frec3_4 + frecConmN);
        if (resultFrec == 0){
        var resultFrec = "|"
        }
        var resultSr = srUnif;
        var resultMod = mod;
        var resultSrv = svc;
        var resultCa = conditionalAccess;

        let cotaCA = ""
        if(resultCa.length==12){
        cotaCA = "Biss-1"
        }
    
        if (resultCa.includes("HMCRYPT")||resultCa.includes("Director")){
        cotaCA = "";
        }else{
        if(resultCa.length==7){
            cotaCA = "Ras"
        }
        }

        if (resultCa.length==16){
        cotaCA = "Biss-E"
        }else{
        if(resultCa.includes("BISS-CA")){
            cotaCA = ""
        }
        }



        var resultStd = standardUnif;
        // ---/\---/\---/\---/\-------- PRINT --------/\---/\---/\---/\--- //

        var satEXP = condLNB;
        var pcEXP = polUnif;
        var frecEXP = resultFrec;
        var srEXP = resultSr;
        var modEXP = resultMod;
        var srvEXP = resultSrv
        var caEXP = resultCa;
        var stdEXP = resultStd;
        
        //console.log(satEXP, frecEXP, pcEXP, srEXP, modEXP, fecEXP, roEXP, srvEXP, cotaCA, caEXP, stdEXP, bwEXP, pskEXP, bitrateEXP)

        let construccionceldaresultado = satEXP + pcEXP + " " + frecEXP + " " + srEXP + " " + modEXP + " " + srvEXP + " " + cotaCA + " " + caEXP;

        let celdaresultado = construccionceldaresultado.replace("  ", " ")

        if(resultFrec == "|"){

        return ""

        }else{

        return celdaresultado

        }

    }
    
})

let botonStreaming = document.getElementById("botonSTR")
botonStreaming.addEventListener("mousedown", () => {

    let cuerpo2 = document.getElementById("cuerpo2")
    cuerpo2.innerHTML = `        <div id="ventana" class="ventanaSAT">
            <textarea class="inputSat" id="inputSRT" placeholder="IP Addres / Port / Passphrase / AES"></textarea><br>
        </div>
            
        <div id="ventanaResumenSAT" class="ventanaSAT2">
            <text id="resumenSRT" class="resultadoSAT">Detalles Lista de grabaciones</text><br>
        </div>
        <div id="ventanaResumenSAT" class="ventanaURL2">
            <text id="urlCHAIN" class="resultadoSAT">URL para hacer llamada por VLC</text>
            <svg viewBox="0 0 100 100" class="iconVLC">
                <style>
                    .st0{fill:#F57C00;}
                    .st1{fill:#DDDDDD;}
                    .st2{fill:#FF9800;}
                </style>
                    <path id="XMLID_6_" class="st0" d="M84.1,63.4c0,0-0.3-2.3-3.5-2.3h-7l2,6.8c1.4,4.2,2.6,7.7,2.6,9.2c0,6.6-12.6,11.7-28.1,11.7
                        c-15.5,0-28.1-5.1-28.1-11.7c0-1.8,1.1-5,2.5-9.1l2.1-6.9h-7.1c-2.2,0-2.6,2.1-2.6,2.1L6,97.2l1.8,2.8H93l1-2.8L84.1,63.4z"/>
                    <path id="XMLID_5_" class="st1" d="M50.1,77.8c11.9,0,22.2-4.9,25.4-9.9l-2-6.8l-3-10.2c0,0-5.6,7.5-20.5,7.5
                        c-14.8,0-20.5-7.4-20.5-7.4l-3,10.2L24.3,68C27.5,73.1,38.1,77.8,50.1,77.8z"/>
                    <path id="XMLID_4_" class="st1" d="M50,36.1c8.7,0,13.7-3.3,14.6-4l0.2-0.1L59,13.4c0,0-2.5,3.3-9,3.3c-6.5,0-9-3.3-9-3.3L35.2,32
                        l0.1,0.1C36.3,32.7,41.3,36.1,50,36.1z"/>
                    <path id="XMLID_3_" class="st2" d="M50,58.3c14.9,0,20.5-7.5,20.5-7.5L64.8,32c0,0-0.1,0-0.2,0.1c-0.9,0.7-6,4-14.6,4
                        c-8.7,0-13.8-3.4-14.6-4C35.3,32,35.2,32,35.2,32l-5.8,18.9C29.5,50.9,35.2,58.3,50,58.3z"/>
                    <path id="XMLID_2_" class="st2" d="M50.1,77.8c-12.1,0-22.7-4.7-25.8-9.8c-1.4,4.1-2.5,7.4-2.5,9.1c0,6.6,12.6,11.7,28.1,11.7
                        c15.5,0,28.1-5.1,28.1-11.7c0-1.5-1.2-5-2.6-9.2C72.3,72.9,62.1,77.8,50.1,77.8z"/>
                    <path id="XMLID_1_" class="st2" d="M50,16.7c6.5,0,9-3.3,9-3.3L55.2,1.1c0,0-0.2-1.1-5.2-1.1c-5.1,0-5.2,1.1-5.2,1.1L41,13.3
                        C41,13.3,43.5,16.7,50,16.7z"/>
            </svg>
        </div>
        
        
        
        `

    let inputparametrossrt = document.getElementById("inputSRT")
    inputparametrossrt.addEventListener("keyup", () => {
    
        let carneSRT = inputparametrossrt.value

        let resultadoSRT = procesadorSRT(carneSRT)
        let urlChain
        let textoresumenSRT = document.getElementById("resumenSRT")
        let urlCHAIN = document.getElementById("urlCHAIN")
        
        if(resultadoSRT.includes("undefined")){
            urlChain = "Incomplete Data"
        }else{
            if(resultadoSRT.includes("Listener")){
                urlChain = "Enlace modo listener"
            }else{
                urlChain = sintaxisCHAIN()
            }
        }

        textoresumenSRT.textContent = resultadoSRT
        urlCHAIN.textContent = urlChain.trim()


        function procesadorSRT(a){

            let listener = checkModoListener(a)
            
            llamadaModo.splice(0, llamadaModo.length)

            if(listener.length > 0){
                llamadaModo.push("Listener")
                numeroIP.push("")
                puerto.push(listener)
                return `modo Listener: Puerto ${listener}`
              }else{
                llamadaModo.push("caller")
                return `modo Caller ${seguirbuscando(a)}`
            }
      
            function checkModoListener(b){
              if(b.includes("181.30.122.85") || b.includes("190.220.6.53") || b.includes("operacionesarg.mediapro.tv")){
      
                if(b.includes("11011") ||  b.includes("11012") ||  b.includes("11013") ||  b.includes("11014") ||  b.includes("11021") ||  b.includes("11022") ||  b.includes("11023") ||  b.includes("11024") ||  b.includes("11031") ||  b.includes("11032") ||  b.includes("11033") ||  b.includes("11034") ||  b.includes("11041") ||  b.includes("11042") ||  b.includes("11043") ||  b.includes("11044") ||  b.includes("11051") ||  b.includes("11052") ||  b.includes("11053") ||  b.includes("11054") ||  b.includes("11061") ||  b.includes("11062") ||  b.includes("11063") ||  b.includes("11064") ||  b.includes("11071") ||  b.includes("11072") ||  b.includes("11073") ||  b.includes("11074") ||  b.includes("11081") ||  b.includes("11082") ||  b.includes("11083") ||  b.includes("11084") ||  b.includes("11091") ||  b.includes("11101") ||  b.includes("11111") ||  b.includes("11121") ||  b.includes("11131") ||  b.includes("11141") ||  b.includes("12011") ||   b.includes("12012") ||   b.includes("12013") ||   b.includes("12014") ||   b.includes("12021") ||   b.includes("12022") ||   b.includes("12023") ||   b.includes("12024") ||   b.includes("12031") ||    b.includes("12032") ||    b.includes("12033") ||    b.includes("12034") ||   b.includes("12041") ||    b.includes("12042") ||    b.includes("12043") ||    b.includes("12044")){
      
                  switch (true) {
                    case b.includes("11011"):
                      return "11011 IRD 01 streaming 1"
                      break;
                    case b.includes("11012"):
                      return "11012 IRD 01 streaming 2"
                      break;
                    case b.includes("11013"):
                      return "11013 IRD 01 streaming 3"
                      break;
                    case b.includes("11014"):
                      return "11014"
                      break;
                    case b.includes("11021"):
                      return "11021 IRD 02 streaming 1"
                      break;
                    case b.includes("11022"):
                      return "11022 IRD 02 streaming 2"
                      break;
                    case b.includes("11023"):
                      return "11023 IRD 02 streaming 3"
                      break;
                    case b.includes("11024"):
                      return "11024"
                      break;
                    case b.includes("11031"):
                      return "11031 IRD 03 streaming 1"
                      break;
                    case b.includes("11032"):
                      return "11032 IRD 03 streaming 2"
                      break;
                    case b.includes("11033"):
                      return "11033 IRD 03 streaming 3"
                      break;
                    case b.includes("11034"):
                      return "11034"
                      break;
                    case b.includes("11041"):
                      return "11041 IRD 04 streaming 1"
                      break;
                    case b.includes("11042"):
                      return "11042 IRD 04 streaming 2"
                      break;
                    case b.includes("11043"):
                      return "11043 IRD 04 streaming 3"
                      break;
                    case b.includes("11044"):
                      return "11044"
                      break;
                    case b.includes("11051"):
                      return "11051 IRD 05 streaming 1"
                      break;
                    case b.includes("11052"):
                      return "11052 IRD 05 streaming 2"
                      break;
                    case b.includes("11053"):
                      return "11053 IRD 05 streaming 3"
                      break;
                    case b.includes("11054"):
                      return "11054"
                      break;
                    case b.includes("11061"):
                      return "11061 IRD 06 streaming 1"
                      break;
                    case b.includes("11062"):
                      return "11062 IRD 06 streaming 2"
                      break;
                    case b.includes("11063"):
                      return "11063 IRD 06 streaming 3"
                      break;
                    case b.includes("11064"):
                      return "11064"
                      break;
                    case b.includes("11071"):
                      return "11071 IRD 07 streaming 1"
                      break;
                    case b.includes("11072"):
                      return "11072 IRD 07 streaming 2"
                      break;
                    case b.includes("11073"):
                      return "11073 IRD 07 streaming 3"
                      break;
                    case b.includes("11074"):
                      return "11074"
                      break;
                    case b.includes("11081"):
                      return "11081 IRD 08 streaming 1"
                      break;
                    case b.includes("11082"):
                      return "11082 IRD 08 streaming 2"
                      break;
                    case b.includes("11083"):
                      return "11083 IRD 08 streaming 3"
                      break;
                    case b.includes("11084"):
                      return "11084"
                      break;
                    case b.includes("11091"):
                      return "11091 IRD 09"
                      break;
                    case b.includes("11101"):
                      return "11101 IRD 10"
                      break;
                    case b.includes("11111"):
                      return "11111 IRD 11"
                      break;
                    case b.includes("11121"):
                      return "11121 IRD 12"
                      break;
                    case b.includes("11131"):
                      return "11131"
                      break;
                    case b.includes("11141"):
                      return "11141 IRD 14"
                      break;
                    case b.includes("12011"):
                      return "12011 SRT 1.1"
                      break;
                    case b.includes("12012"):
                      return "12012 SRT 1.2"
                      break;
                    case b.includes("12013"):
                      return "12013 SRT 1.3"
                      break;
                    case b.includes("12014"):
                      return "12014 SRT 1.4"
                      break;
                    case b.includes("12021"):
                      return "12021 SRT 2.1"
                      break;
                    case b.includes("12022"):
                      return "12022 SRT 2.2"
                      break;
                    case b.includes("12023"):
                      return "12023 SRT 2.3"
                      break;
                    case b.includes("12024"):
                      return "12024 SRT 2.4"
                      break;
                    case b.includes("12031"):
                      return "12031 SRT 3.1"
                      break;
                    case b.includes("12032"):
                      return "12032 SRT 3.2"
                      break;
                    case b.includes("12033"):
                      return "12033 SRT 3.3"
                      break;
                    case b.includes("12034"):
                      return "12034 SRT 3.4"
                      break;
                    case b.includes("12041"):
                      return "12041 SRT 4.1"
                      break;
                    case b.includes("12042"):
                      return "12042 SRT 4.2"
                      break;
                    case b.includes("12043"):
                      return "12043 SRT 4.3"
                      break;
                    case b.includes("12044"):
                      return "12044 SRT 4.4"
                      break;
                    default:
                      return ""
                      break
                  }
      
                }
      
              }else{
                return ""
              }
      
            }
      
            function seguirbuscando(c){
      
              numeroIP.splice(0, numeroIP.length)
              puerto.splice(0, puerto.length)

              passphraseSRT.splice(0, passphraseSRT.length)
              posibleAES.splice(0, posibleAES.length)
      
              let textoSinSaltos0 = c.replace(/\t/g, " ");
              let textoSinSaltos = textoSinSaltos0.replace(/\n/g, " ");
              var parametrosM = textoSinSaltos.toUpperCase()
              var paramSplitPal = parametrosM.split(" ");  
              let paramPal = textoSinSaltos.split(" ")
      

      
              /////////// buscar IP y puerto
              for(palabra in paramSplitPal){
                let diseccion = paramSplitPal[palabra].split(".")
                if(diseccion.length == 4){
                  let confirmacion2 = chequeo2(paramSplitPal[palabra])
                  if(confirmacion2.length > 0){
                      numeroIP.push(confirmacion2)
                  }
                  if(paramSplitPal[palabra].includes(":")){
                    let palabraDividida = paramSplitPal[palabra].split(":")
                    let posiblepuerto = parseInt(palabraDividida[1])
                    if(typeof posiblepuerto == 'number' && posiblepuerto > 0){
                      puerto.push(posiblepuerto)
                    }
                  }
                }
              }
      
              function chequeo2(a){
                let octetos = a.split(".")
                let posibleenumero1 = parseInt(octetos[0])
                let posibleenumero2 = parseInt(octetos[1])
                let posibleenumero3 = parseInt(octetos[2])
                let posibleenumero4 = parseInt(octetos[3])
                if(typeof posibleenumero1 == 'number' && typeof posibleenumero2 == 'number' && typeof posibleenumero3 == 'number' && typeof posibleenumero4 == 'number'){
                    if(posibleenumero1 > -1 && posibleenumero1 < 257 && posibleenumero2 > -1 && posibleenumero2 < 257 && posibleenumero3 > -1 && posibleenumero3 < 257 && posibleenumero4 > -1 && posibleenumero4 < 257 ){
                        return `${posibleenumero1}.${posibleenumero2}.${posibleenumero3}.${posibleenumero4}`
                    }else{
                        return ""
                    }
                }else{
                    return ""
                }
              }
      
              passPhraseOK.splice(0, passPhraseOK.length)
              aesOK.splice(0, aesOK.length)
      
              
              if(parametrosM.includes("PASS")){
                contador.splice(0, contador.length)
                for(palabra in paramSplitPal){
                  if(paramSplitPal[palabra].includes("PASS")){
                    contador.push(parseInt(palabra))
                  }
                }
      
                posiblesPASS.splice(0, posiblesPASS.length)
      
                for(let i = contador[0] + 1; i < paramSplitPal.length; i++){
                  if(paramSplitPal[i].length > 1){
                    posiblesPASS.push(paramPal[i])
                  }
                }
      
                if(posiblesPASS.length > 0){
                  let passletraxletra = posiblesPASS[0].split("")
                  for(let i = passletraxletra.length -1; i > -1; i--){
                    switch (regex.test(passletraxletra[i])){
                      case false:
                        passletraxletra.splice(i, 1)
                        break
                      default:
                        break
                    }
                  }
                  passPhraseOK.splice(0, passPhraseOK.length)
                  passPhraseOK.push(passletraxletra.join(""))
                }
              }
      
              if(parametrosM.includes("AES")){
      
                contador2.splice(0, contador2.length)
                aesOK.splice(0, aesOK.length)
      
                for(palabra in paramSplitPal){
                  if(paramSplitPal[palabra].includes("AES")){
                    contador2.push(palabra)
                    switch (true){
                      case paramSplitPal[palabra].includes("128"):
                        aesOK.push("128")
                        break
                      case paramSplitPal[parseInt(palabra) + 1].includes("128"):
                        aesOK.push("128")
                        break
                      case paramSplitPal[palabra].includes("192"):
                        aesOK.push("192")
                        break
                      case paramSplitPal[parseInt(palabra) + 1].includes("192"):
                        aesOK.push("192")
                        break
                      case paramSplitPal[palabra].includes("256"):
                        aesOK.push("256")
                      case paramSplitPal[parseInt(palabra) + 1].includes("256"):
                        aesOK.push("256")
                        break
                      default:
                        break;
                    }
                  }
                }
              }
      
              let encripcion1 = ""
              let encripcion2 = ""
              let encripcion3 = ""
      
              if(passPhraseOK.length == 0){
                encripcion1 = ""
              }else{
                if(passPhraseOK[0] != ""){
                  encripcion1 = passPhraseOK[0]
                }else{
                  encripcion1 = ""
                }
              }
      
              if(aesOK.length == 0){
                encripcion2 = ""
              }else{
                if(aesOK[0] != ""){
                  encripcion2 = aesOK[0]
                }else{
                  encripcion2 = ""
                }
              }
      
      
      
              if(encripcion1 == "" && encripcion2 == ""){
                encripcion3 = ""
              }
      
              if(encripcion1 != "" && encripcion2 == ""){
                encripcion3 = ` Key: '${encripcion1}' AES: undefined`
              }
      
              if(encripcion1 == "" && encripcion2 != ""){
                encripcion3 = ` Key: undefined AES${encripcion2}`
              }
      
              if(encripcion1 != "" && encripcion2 != ""){
                encripcion3 = ` Key: '${encripcion1}' AES${encripcion2}`
              }
      
              if(numeroIP.length > 0 && puerto.length == 0){
                let puertoRequerido = buscarPuerto(paramSplitPal, numeroIP)
                puerto.push(parseInt(puertoRequerido))
                return `${numeroIP}:${puerto[0]}${encripcion3}`
              }
      
              if(numeroIP.length == 0 && puerto.length > 0){
                return `${puerto}${encripcion3}`
              }
      
              if(numeroIP.length == 0 && puerto.length == 0){
                return ""
              }

              if(numeroIP.length > 0 && puerto.length > 0){

                return `${numeroIP}:${puerto}${encripcion3}`
              }
      
              function buscarPuerto(d, e){
                acumulacionPosiblesPuertos.splice(0, acumulacionPosiblesPuertos.length)
                for(palabra in d){
                  if(d[palabra].includes(e)){
                    d.splice(0, parseInt(palabra) +1)
                    for(linea in d){
                      if(parseInt(d[linea]) > 0){
                        acumulacionPosiblesPuertos.push(d[linea])
      
                      }
                    }
                  }
                }

                return acumulacionPosiblesPuertos[0]
              
              }
            }
        }

        function sintaxisCHAIN(){
            let fijo = 'srt://'
            let mode = llamadaModo[0]
            let ip = numeroIP[0]
            let aes
            if(aesOK.length == 0){
                aes = ""
            }else{
                aes = aesOK[0]
            }
            let passphrase
            if(passPhraseOK.length == 0){
                passphrase = ""
            }else{
                passphrase = passPhraseOK[0]
            }
            let latency = 1
            let llamada
            if(mode.length == 0){
                llamada = ""
            }else{
                llamada = `mode=${mode}`
            }
            let direccion
            if(numeroIP.length == 0){
                direccion = ""
            }else{
                direccion = numeroIP[0]
            }
            let puertO
/// aca esta la cosa
            if(puerto.length == 0){
                puertO = ""
            }else{
                puertO = puerto[0]
            }
            let latencia
            if(latency.length == 0){
                latencia = "&latency=1000"
            }else{
                latencia = `&latency=${latency*1000}`
            }
            let codigo1
            if(passphrase.length == 0){
                codigo1 = ""
            }else{
                codigo1 = `passphrase=${passphrase}`
            }
            let codigo2
            if(aesOK.length == 0){
                codigo2 = ""
            }else{
                codigo2 = `pbkeylen=${aesOK[0]/8}`
            }
            let codigoconsolidado
            if(aes.length == 0 || passphrase.length == 0){
                codigoconsolidado = ""
            }else{
                codigoconsolidado = `&${codigo2}&${codigo1}`
            }
            

            return `${fijo}${direccion}:${puertO}?${llamada}${latencia}${codigoconsolidado}`

        }

    })

    inputparametrossrt.focus()

})

let monitoreostreaming = document.getElementById("monitoreostreaming")
monitoreostreaming.addEventListener("click", () => {
    let cuerpo2 = document.getElementById("cuerpo2")
    cuerpo2.innerHTML = `<div id="ventana" class="ventanaSAT">
    <text class="resultadoSAT">MONIOREO DE CALIDAD DEL FLUJO DE DATOS SRT/UDP/RTP - LINEA DE COMANDOS (EN CONSTRUCCION)</text><br>
    </div>
    
    <div id="ventanaResumenSAT" class="ventanaSAT2">
        <text id="resumenSat" class="resultadoSAT"></text>
    </div>

    `
})


let transcode = document.getElementById("transcode")
transcode.addEventListener("click", () => {
    let cuerpo2 = document.getElementById("cuerpo2")
    cuerpo2.innerHTML = `<div id="ventana" class="ventanaSAT">
    <text class="resultadoSAT">TRANCODIFICACION TRANSPORT STREAM - LINEA DE COMANDOS (EN CONSTRUCCION)</text><br>
    </div>
    
    <div id="ventanaResumenSAT" class="ventanaSAT2">
        <text id="resumenSat" class="resultadoSAT"></text>
    </div>

    `
})

const imagebank = []

let ubicaciondeltxt = 'imagenes.txt'
fetch(ubicaciondeltxt)
.then(response => response.text())
.then(data => {

    let temp = data.split('\n')
    temp.sort()
    for(item of temp){
        imagebank.push(item)
    }
})

function imagebankCH(){
    
    const randomIndex = Math.floor(Math.random()*1000);
    const randomImage = imagebank[randomIndex % imagebank.length];
    document.body.style.backgroundImage = `url(${randomImage})`;
    ///console.log(randomImage)

}


const randomIndex = Math.floor(Math.random()*1000);
const randomImage = imagebank[randomIndex % imagebank.length];
document.body.style.backgroundImage = `url(${randomImage})`;

setInterval(imagebankCH, 10000)

