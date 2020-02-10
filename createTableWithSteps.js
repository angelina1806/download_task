function createTableWithStep (table){

	var w = 10;
	var arr = [];
	var count;
	var div = document.getElementById('step');
	var table1 = document.createElement('table');
	
	div.appendChild(table1);

	for (i = 0; i <  w+3; i++){
		

		var tr = document.createElement('tr');
		table1.appendChild(tr);



		for(j = 0; j < 3; j++){
			var td = document.createElement('td');
			tr.appendChild(td);
			if (i != 0 && i != 1 && j == 0){
				td.innerHTML = i - 2;
			}
						
		}

		if (i == 0){
				table1.rows[i].cells[0].innerHTML = `X${j}`;
				table1.rows[i].cells[1].innerHTML = `${table.rows[3].cells[2].innerHTML}*m${j}`;
				table1.rows[i].cells[2].innerHTML = `Оптимальное решение`;
			}else if (i == 1){
				var k = 0;
				var k2 = 0;
				var tableM = document.createElement('table');
				var tableF = document.createElement('table');
				var trM = document.createElement('tr');
				tableM.appendChild(trM);
				var trF = document.createElement('tr');
				tableF.appendChild(trF);
				table1.rows[i].cells[1].appendChild(tableM);
				table1.rows[i].cells[2].appendChild(tableF);

				while (k <= 2){
					var tdM = document.createElement('td');
					tdM.className = 'tdCl';
					td.className = 'tdCl';
					trM.appendChild(tdM);
					tdM.innerText = `m${j}=${k}`;
					k++;
				}

				while (k2 <= 1){
					var tdF = document.createElement('td');
					trF.appendChild(tdF);
					k2++;
				}
				tableF.rows[0].cells[0].innerHTML = `f${j}(x${j})`; 
				tableF.rows[0].cells[1].innerHTML = `m${j}`; 
			} else{

			var tableM2 = document.createElement('table');
			var tableF2 = document.createElement('table'); 
			var trM2 = document.createElement('tr');
			var trF2 = document.createElement('tr');
			tableM2.appendChild(trM2);
			tableF2.appendChild(trF2);
			table1.rows[i].cells[1].appendChild(tableM2);
			table1.rows[i].cells[2].appendChild(tableF2);
			var k3 = 0;
			var k4 = 0;
			
			var arr2 = [];
			while (k3 <= 2){
					var tdM2 = document.createElement('td');
					tdM2.className = 'tdCl';
					trM2.appendChild(tdM2);
					if (+tableM.rows[0].cells[k3].innerHTML.slice(3,4) * +table.rows[3].cells[1].innerHTML <= i - 2){
						tdM2.innerText = +table.rows[3].cells[2].innerHTML * +tableM.rows[0].cells[k3].innerHTML.slice(3,4);
					arr2[k3] = +tdM2.innerHTML;
					} else tdM2.innerText = '-';
					k3++;
				}
				var max = Math.max.apply(null, arr2);
				var idMax = arr2.indexOf(max);
				

			while (k4 <= 1){
					var tdF2 = document.createElement('td');
					tdF2.className = 'tdCl';
					trF2.appendChild(tdF2);
					if (k4 == 0){
						tdF2.innerText = max;
					}else tdF2.innerText = idMax;
					k4++;
				} 

			}
	}
	return table1;
}