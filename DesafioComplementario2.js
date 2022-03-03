/* El siguiente simulador solicita al usuario la carga del salario mensual y el plazo en el que se 
quiere solicitar el credito.
En base a esos datos, tasas nominales anuales estandares y utilizando el sistema de amortizacion frances, 
calcula periodo a periodo el valor de la cuota (en sistema frances es fijo), y la composicion (interes y capital).
Como asi tambien el saldo de capital periodo a periodo.
Cargando todos los datos en forma ordenada en Arrays y mostrandolos por consola
*/
console.log('Desafio entregable 2 esta en funcionamiento');
alert('Calculadora de Credito')
let ingreso=0
let plazo=0
let TNA=0
let monto=0;
let periodos = ['Periodos'];
let interes =['Interes de la cuota'];
let capital=['Capital de la cuota'];
let cuota=['Cuota Mensual'];
let saldo=['Saldo Adeudado'];
function definirTNA(ingreso,plazo){
    monto=(ingreso*.2*plazo*12);
    if (ingreso<100000){
        if (plazo==1){
            TNA=1.8;
        } else if (plazo==2){
            TNA=2;
        } else {
            TNA=2.2;
        }
    } else if (ingreso<250000){
        if (plazo==1){
            TNA=1.1;
        } else if (plazo==2){
            TNA=1.5;
        } else {
            TNA=1.8;
        }
    } else {
        if (plazo==1){
            TNA=0.6;
        } else if (plazo==2){
            TNA=0.75;
        } else {
            TNA=0.95;
        }
    }
}
function ingresoDatos(){
        while (ingreso<=0 || isNaN(ingreso)){
        ingreso=parseInt(prompt('Cuál es su ingreso mensual en pesos'))
        if(ingreso<0 || isNaN(ingreso)){
            alert('Valor invalido')
        }
    }
    while (plazo>3 || plazo<1 || isNaN(plazo)){
        plazo=(prompt('Ingrese plazo de devolución del credito \n 1-12 meses \n 2-24 meses \n 3-36 meses'))
        if(plazo>3 || plazo<1 || isNaN(plazo)){
            alert('Plazo invalido')
        }
    }
}
function calculoCredito(TNA,ingreso,plazo){
    let j=TNA/12;
    let C=(monto*j*(1+j)**plazo)/((1+j)**plazo-1);
    let Tp=0;
    let tpi=0;
    let Si=0;
    let ip=0;
    let Si0=monto;
    for(i=1;i<=plazo;i++){
        tpi=C-Si0*j-Si*j;    
        Tp=Tp+tpi;    
        Si=monto-Tp;
        ip=C-tpi;
        Si0=0
        periodos.push(i.toFixed(2));
                    capital.push(tpi.toFixed(2));
                    interes.push(ip.toFixed(2));
                    cuota.push(C.toFixed(2));
                    saldo.push(Si.toFixed(2));
                    
       // alert(`Usted puede acceder a un credito de $${monto.toFixed(2)} con una TNA=${(TNA*100).toFixed(2)}% a devolver en ${plazo} meses. \n La cuota ${i} tiene un valor de $${C.toFixed(2)}, compuesto por $${ip.toFixed(2)} de intereses y $${tpi.toFixed(2)} de capital. \n El saldo de capital para este periodo es de $${Si.toFixed(2)}`)
    }
}
function casos(){
    switch (plazo){
        case "1":
            definirTNA(ingreso,plazo);
            calculoCredito(TNA,monto,12);
            break;
        case "2":
            definirTNA(ingreso,plazo);
            calculoCredito(TNA,monto,24);
            break;
        case "3":
            definirTNA(ingreso,plazo);
            calculoCredito(TNA,monto,36);
            break;        
    }
    
}
ingresoDatos();
casos();
console.log(periodos);
console.log(capital);
console.log(interes);
console.log(cuota);
