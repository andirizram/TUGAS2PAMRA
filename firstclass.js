function Buah(){
    var num1 = 10;
    var num2 = 2;
    return num1 * num2;
    }
function Perhitungan(PassingBuah, name) {
    console.log("\n"+PassingBuah() + name);
    }

Perhitungan(Buah, " Buah Apel\n");