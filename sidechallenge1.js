//It has at least 6 characters and at most 20 characters.
//It contains at least one lowercase letter, at least one uppercase letter, and at least one digit, and at least one special character.
//The password must contain at least one capital letter, a lowercase one, a number, and a special character.

//?Given a text file full of a bunch of passwords, find the correct passwords and return the sum of the first digit of each one of them.
passwords =["se<8",
    "hOT*!y'anX7MIpf0tlYhgK#EpDCYe",
    "amTbbPz$79)zW",
    ")WvL3o?$zz6UhDt",
    "*mkcxbGpM26xX",
    "VQU&d2'VL7daqvTSr",
    "BxCqI))h)S)MSX1",
    "KgVl7pFlwTE@vsyU9F=h",
    "s0LB5we(NnxAvadCLPkHEy@",
    "Xxr(jR4mMDkFkKJ*FNCsT#W$STM",
    "!!zS>R>puK0VKnbYEEZ0",
    "mn'Vf%cIc",
    "((vvz=y#Vfy",
    "5T2(2jn",
    "&H<JTPsFb",
    "VHXqg3'JRoCVClAh<!U",
    "7>B0gB",
    "eDTGQu>w",
    "jN28Km",
    "ocozagdx&ja0&TG'",
    "R<B36@zetduKDWoMvHs!0?4&",
    "rnZ6Kae",
    "tJJXQ(9hHpB",
    "M5'GVf<7ESM>i5ngG2rwU<QlbQQl",
    "cZ0@W9",
    "f0ci9xUVVNZlO",
    "iigl=lZ&u($rYOho=",
    "vvB5",
    "k%#r8io#l<",
    "2oXwV!OCGnr00i",
    "eGf%B7'",
    "1mbmaLnjMj6PEuVSov",
    "(F7wt&Hzx9@yuG@7ECoYO%w>5V",
    "Ig!cLnfQTnpQz'&%cqjsN%fV0ilG&",
    "9(pYzE=k@p6gQ1",
    "Pt9t@U43gR%GDu(3'W*Sd0Q5FGli",
    "=u?rR6Ue)GJ01tu#WH1",
    "$*q=6e78'tnl&(%lPy(kOe'Qw",
    "L519*TmDUTT=M$",
    "is#QyaORhy5bxeTwa(@=o3$?0nFL",
    "q3Lw&1HUmzZ#ZemU5ic3gx)n1",
    "ru%1QRiK8n=XU20",
    "UHwqSZOb*El",
    "XO=XT@&J3VBMSR2rJM'U!6OV6D",
    "JJ93)4XY99R'?!'&eq6r$Y",
    "gg@l3zn=30D",
    "AYFkqHQBKSe%pg5",
    "IZ#kl2O=TE&<NgGhZkc&AsF",
    "fZ1St",
    "9JiU$#Lz",
    "7%4##YN=eV)ur",
    "v<8WT9rT*v(eqcorl",
    "xq9r#!$UgSNmeZ",
    ")(8*%",
    "hxMNMyww04m*&HBicqr%",
    "sxsfPc<Tj",
    "t4kKs#675zFLPw%CTlF?",
    "!7z'%T&T>V8lkTm",
    "klTEe)2Nr16PQTloN&",
    "$PSm0Vs$k>a@Ci&t'Th2!QZI9ka",
    "(gep1",
    "2C(sEes6Z=PS%1l)JdPZ4Ba",
    "Wwz@FNTJTpN)G3MmwxY418N<YW",
    "@8460w",
    "5S0Iryu#y)g0cWAT#Q4B$uz7j$v",
    "92BScgIEPjhnH",
    "Jbidc&PkI&",
    "nz&6<Skd<4NcudEt7r3Y>tq>%BXFT",
    "$M%2=XoxaCr9",
    "GK(BK$rS'",
    "1&0v8I1KR5!",
    "wQNwhcZ@CzgWjA#2I7",
    "m63'HtEQWi>Lx<V!QIu5'M7F('r",
    "pkctgMRPTSrc7Wv",
    "LH7x8Hirs?(ZPQB5o",
    "r(FYKFuf",
    "mam&SWxxEeabG'",
    ">!V76c55X",
    "h?Yz",
    "BFCQ=%D?MKl@E>XvhK0=40wSxm>",
    "Fv7Y9PNwW$Y#F",
    ")LPQ)w6K4&WMmJ9",
    "s2m6Q6r)*BVct'b1zSx#b&w'f#sM*5",
    "jcY9Fhz)i",
    "P@l7GZ7A",
    "qRJB>f64sOIorKAORr",
    "BYd()nD?GI",
    "Kuxka&5nu$<umHd#HQS",
    "!DLoyS!Mr1n0t@JrMt8M$",
    "gn@DpnS*21'uF<f",
    "QYkn58IY",
    "BVP&POEHMqbjb=Pf=",
    "GacSfYD%cYNZ",
    "IGkGso1",
    "RPp8%EnbGH)9qC$)wk?!i4S4U",
    "iXpKIB(DVmW3%gNf",
    "e<N4%Q2zu*dd",
    "qWk%48I*3u>Yphda2Ld)66Q?",
    "$xD0XAHiLH*CqvWlQ#T7#xMMGQ",
    "D@dlrYa9THh8KW&Lve2!E'!",
    "s#s%6JDr",
    "CdaXN'd$zqX418Y5>6X(Mh'XuP",
    "*uN(y$1)>w8E>8#>cLs",
    "GyHy",
    "d<!QPz>BTJ($jTJ9cO5hW!",
    "d9Fo",
    "sK1nK&76@",
    "ynfoLf%",
    "p&LAmqT)zvhL*o3DmOMgsf*hm%A&&s"];

function correctPassword(password){
    if (password.length >=6 && password.length<=20) {
        var upper = 0,
        lower = 0,
        number = 0,
        special = 0;
      for (var i = 0; i < password.length; i++)
      {
        if (password[i] >= "A" && password[i] <= "Z") upper++;
        else if (password[i] >= "a" && password[i] <= "z") lower++;
        else if (password[i] >= "0" && password[i] <= "9") number++;
        else special++;
      }
      if (upper>0 && lower>0 && number>0 && special>0) {
          return true;
      }
    }
    return false;
}
    correctPasswords=[];
for (let i = 0; i < passwords.length; i++) {
   if (correctPassword(passwords[i])) {
    correctPasswords.push(passwords[i]);
   }
    
}
 var sum=0;
correctPasswords.forEach(password => {
        firstDigit = password.match(/\d/);
        sum = sum + Number(firstDigit);
});
console.log(sum);