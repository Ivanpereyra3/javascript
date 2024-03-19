let codProd = parseInt(prompt("ingesa el codigo del producto a obtener \n1 - sabalo ... $3000 \n2 - surubi ... $1500\n3 - boga ... $4500 \n4 - dorado ... $5000\n0 - Dejar de comprar 👌"));

let total = 0;
const iva =0.21;
const eft = 0.1;
const credit =0.04;


while(codProd !== 0){


    switch (codProd) {
        case 1:
            total += 3000;
            alert("ya tenes tu sabalo en el carrito🎉 tiene que abonar $" + total)

            break;

        case 2:

            total += 1500;
            alert("ya tenes tu surubi en el carrito🎉 tiene que abonar $" + total)
            break;

        case 3:

            total += 4500;
            alert("ya tenes tu boga en el carrito🎉 tiene que abonar $" + total)
            break;

        case 4:

            total += 5000;
            alert("ya tenes tu dorado en el carrito🎉 tiene que abonar $" + total)

            break;

        default:

            alert("codigo invalido, ingrese un codigo correcto para continuar😢");
            break;
        }
        codProd = parseInt(prompt("ingesa el codigo del producto a obtener \n1 - sabalo ... $3000 \n2 - surubi ... $1500\n3 - boga ... $4500 \n4 - dorado ... $5000\n0 - Dejar de comprar 👌"));
    }

    if(total !== 0){

    
        let formaDePago = parseInt(prompt("el total de tu compra es de $" +total+ "\ncomo abonas ?✔ \n1-Efectivo\n2-Debito\n3-Credito"))
      

if(formaDePago == 1){

    alert ("total a abonar $ " + DescuentoEImpuestos (iva,eft));
}
else if(formaDePago == 2){
    alert ("total a abonar $ "+ DescuentoEImpuestos (iva,0));
}
else if (formaDePago == 3){
    alert ("total a abonar $ "+ DescuentoEImpuestos (iva,credit));
}
else{
    alert("seleccion de pago incorrecto!")
}
}

function DescuentoEImpuestos (impuestos,descuentos){
    let totalConImpuesto = total * (1 + impuestos) 
    let totalDescuentoEImpuesto;
    if(descuentos !== 0 ){
        totalDescuentoEImpuesto= totalConImpuesto * (1 - descuentos);
    }else{totalDescuentoEImpuesto=totalConImpuesto}
       return totalDescuentoEImpuesto
}
   

 
    
