
map = "YnTUpNFLkNVtjMYQuXdrZnCzRYhdYUeuRyXShodaxCEFIlfgyksWBKTRuaPUBOZuEaDxubsiSgRZJloYjgOsCNgVFokaumnaflNYNWtZpOxaBpBuAvZVtYdyBmvRNZgIzJfzaPMBmzKhKlZkTyMhXOCuaOiDMskdaaTMyuRdKoVsYxcHjWjHXmMVnXZXWbBFrEOJyNfxBtmvYEVWbOdSsPbZaoFzDArbiRTiFUCQKwlssrSvDpiNOgXbAwfxRzvKvNzWiQOuLcPAUjNRvMVNxciwtBZdGgixZWMmWxmoreZodOwMtjrHPKRsgIOLPUdvGseWpqXRdvigObBMetrSKZccjZjCyUAsceiWyLemGYOhowNmzzxMUfGazstpiskhtBZTAIDKueVxiZjFfFdyydDYCTHYKJhXBkrUxqtkNrHPOKpHxQvwpkEHmKvoBeZTwuwUPbbSpIsheXWPeMkWpWtQinMfFIlKPULMUNeuqdjduEQZIzYJzCHBJRRVDFpMEkVIuHoHWdFvCdhQfSqoxkuVTQFhvKLdaiYMsZIRRoYsEOKhwjuikAUGhuEgrFWPXxwyohgtzSyDbJJGEGuzFncjYqigVCOnwnuuCWBCTcWdiJMwEcarZdqTFErcRKIYCgERzRJGjAbXTcWQnnvlqnsnJzZwWgfevKkoJchStzofmySUFWuVsWNRXkiBopMylpkAtbIVtYBGJkDUuRoubioelTCWVrfVnjAsOKoinHefrrvfJpYOKHqFEOSvYUQsXcjgtKFRZFeaLBxgACHGTRhVwizHpmEZMflmqJIlvJHOdyelxqHyLwhBPzrNySjiQurwYUJBVFNHULXriSLOoPfMNUHBtHlaffqZBDJgcNkDvIqlTKMVoNBRAiJpeIhwscvMReVASqUgNGKlKBMJXLaZbduttVgqwyTEtiuIiFhcoPKEGOmKWCkdMOuKlXDdmYdAQvcpHiAIfZRGPcXGNxtgwSOJrckxCEHpnPtKeYvBVFEPGhkHJIZTJboJGFdGslzXbcinTPwTSnaN";

var x=0; 
var y=0;
N =2;
E = 3;
W = 7;
S = 11;
var digit = 0;
for (let i = 0; i < map.length; i++) {
   ascii = map.charCodeAt(i);
   tocarnorth =(ascii/N).toString();
   if (ascii % N == 0) {
    digitnorth='0';
   }else{
    digitnorth =tocarnorth.substring((tocarnorth.indexOf('.') + 1), (tocarnorth.indexOf('.') + 1)+1);
   }
   console.log(tocarnorth,digitnorth);
   tocareast =(ascii/E).toString();
   if(ascii % E ==0){
    digiteast='0';
   }else{
    digiteast =tocareast.substring((tocareast.indexOf('.') + 1), (tocareast.indexOf('.') + 1)+1);
   }
   console.log(tocareast,digiteast);
   tocarwest =(ascii/W).toString();
   if (ascii % W == 0) {
    digitwest = '0';
   }else{
    digitwest =tocarwest.substring((tocarwest.indexOf('.') + 1), (tocarwest.indexOf('.') + 1)+1);
   }
   console.log(tocarwest,digitwest);
   tocarsouth =(ascii/S).toString();
   if(ascii % S ==0){
    digitsouth='0';
   }else{
    digitsouth =tocarsouth.substring((tocarsouth.indexOf('.') + 1), (tocarsouth.indexOf('.') + 1)+1);
   }
    console.log(tocarsouth,digitsouth);
   x = x + Number(digiteast)-Number(digitwest);
   y = y + Number(digitnorth) - Number(digitsouth);
   console.log(x,y);
}
console.log(x,y);