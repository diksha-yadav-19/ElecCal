function unitbill(){
    var unitinput=document.getElementById("txtunits")
    var unitsConsumed = parseFloat(unitinput.value);

    let ratePerUnit;
    if (unitsConsumed < 100) {
      ratePerUnit = 2.0;
    } else {
      ratePerUnit = 5.0;
    }
   var billAmount = ratePerUnit * unitsConsumed;
    var result = document.getElementById("txtbill");
     result.value=billAmount;
  }
  function loadbill(load){
    var loadInput = document.getElementById("txtloads");
    var load = parseFloat(loadInput.value);
     var ratePerKW = 1000; // Rate per kW
   var loadbill = load * ratePerKW;
  var result = document.getElementById("txtload");
  result.value=loadbill+" KW ";

  }
function doelectcity(ac,fan)
{
    
            // var bill=0;
            const AcCharge = 100;
            const fanCharge = 50;
            if(ac.checked==true)
                    bill= parseFloat(acquant.value)*(AcCharge);
                    document.getElementById("accharges").value = bill;

                    if(fan.checked==true)
                     bill= parseFloat(fanquant.value) * (fanCharge);
                    document.getElementById("fancharges").value = bill;
          
}
function totalbill(){
    var  ac=parseFloat(document.getElementById("accharges").value);
    var  fan=parseFloat(document.getElementById("fancharges").value);
    var  unit=parseFloat(document.getElementById("txtbill").value);
    var  load=parseFloat(document.getElementById("txtload").value);
    var total=ac+fan+unit+load;
document.getElementById("txttotal").value=total;
}

function discount(radcom,radres)
{
      // var dis=0;  
    var input=document.getElementById("txttotal");
    var total = parseFloat(input.value);
    if(radcom.checked==true)
        dis= total*radcom.value /100;
    else
        dis=total*radres.value/100;
        document.getElementById("txtdis").value=dis;
        //  alert(discount);
       
}
function  netbill(){
    var input=document.getElementById("txttotal");
    var total = parseFloat(input.value);
    var input=document.getElementById("txtdis");
    var discount = parseFloat(input.value);

    net = total - discount;
    document.getElementById("txtnet").value=net;


}

