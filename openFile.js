(function (){

     var app = angular.module('myApp', []);
     app.controller('MyController', ['$scope', myController]);

     function myController($scope){
          $scope.uploadExcel = function(){

          var myFile = document.getElementById('file');
          var input = myFile;
          var reader = new FileReader();
          reader.onload = function(){
               var fileData = reader.result;
               var workbook = XLSX.read(fileData, {type: 'binary'});
               workbook.SheetNames.forEach(function(sheetName){
                    var rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
                    excelJsonObj = rowObject;
               });

               var table = document.getElementById('table');
               // var tbody = document.getElementById('tbody');               
               // var thead = document.getElementById('thead');
               var arr1 = [];
                         
               var objSK = {};
               var arrAllMax = [];
               var arrAllMin = [];
               var arrCountMax = [];
               var obj = [];
               // запись данных из excel в html таблицу
               for (var i = 0; i < excelJsonObj.length; i++){

                    var objMax = {};
                    var objMin = {};
                    let tr = document.createElement('tr');
                    var data = excelJsonObj[i];                  
                    var count = 0;
                    if(i ==0){
                         var trhead = document.createElement('tr');
                         table.appendChild(trhead);
                    }
                    
                    var arr = [];
                    var newObj = obj[i];

                    table.appendChild(tr);
                                   
                    obj[i] = excelJsonObj[i];
                    

                    // создания тела и головы таблицы
                    for (var key in data){
                         count++;
                    var td = document.createElement('td');
                         tr.appendChild(td);
                         td.innerText = data[key];
                                                                                                                        
                         if (i == 0 ){                                               
                              var tdhead = document.createElement('td');
                              trhead.appendChild(tdhead);
                              tdhead.innerText = key;
                         }
                         
  
                    }

               }
               var firstStep = createTableWithStep(table);
               var secStep = secondStep(firstStep, table);
               var thStep = thirdStep(table, secStep);
               findOptimum(firstStep, secStep, thStep, table);
                    
          };
     reader.readAsBinaryString(input.files[0]);
        };
     }

})()