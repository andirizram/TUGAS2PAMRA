function TeksToko() {
    var a = 4;
    var b;
    b = a * a;
    return function() {
    console.log("\n"+a+" dipangkatkan dengan 2 adalah = "+ b +"\n");
    }
  }

  TeksToko()();