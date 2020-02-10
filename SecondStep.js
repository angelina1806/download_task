function secondStep(tableFirstStep, table){
	var tableSecond = document.createElement('table');
	tableFirstStep.after(tableSecond);
	var count = +tableFirstStep.rows[0].cells[0].innerHTML.slice(1,2) - 1;
	var w = 10;


	for(i = 0; i < tableFirstStep.rows.length; i++){
		var tr = document.createElement('tr');
		tableSecond.appendChild(tr);
		


		for(j = 0; j < 3; j++){
			var td = document.createElement('td');
			tr.appendChild(td);
		}
			if(i == 0){
				var count2 = count;
				tableSecond.rows[i].cells[0].innerText = `X${count}`;
				tableSecond.rows[i].cells[1].innerText = `${table.rows[count].cells[2].innerHTML} * m${count} + f${count2 + 1}(X${count} - ${table.rows[count].cells[1].innerHTML} * m${count})`;
				tableSecond.rows[i].cells[2].innerText = `Оптимальное решение`;		
			}else if(i == 1){
				var tableM = document.createElement('table');
				var tableF = document.createElement('table');
				tableSecond.rows[i].cells[1].appendChild(tableM);
				tableSecond.rows[i].cells[2].appendChild(tableF);
				var trM = document.createElement('tr');
				var trF = document.createElement('tr');
				tableM.appendChild(trM);
				tableF.appendChild(trF);

				for (x = 0; x <= w / +table.rows[count].cells[1].innerHTML; x++){
					var tdM = document.createElement('td');
					trM.appendChild(tdM);
					tdM.className = 'tdCl';
					tdM.innerText = `m${count}=${x}`;
				}

				for (k = 0; k < 2; k++){
					var tdF = document.createElement('td');
					trF.appendChild(tdF);
					tdF.className = 'tdCl';
				}
				tableF.rows[0].cells[0].innerText = `f${count}(X${count})`;
				tableF.rows[0].cells[1].innerText = `m${count}`;
			} else {
				var tableM2 = document.createElement('table');
				var trM2 = document.createElement('tr');
				var tableF2 = document.createElement('table');
				var trF2 = document.createElement('tr');
				tableM2.appendChild(trM2);
				tableF2.appendChild(trF2);
				tableSecond.rows[i].cells[0].innerText = i - 2;
				tableSecond.rows[i].cells[1].appendChild(tableM2);
				tableSecond.rows[i].cells[2].appendChild(tableF2);

				var c1 = 0;
				var arrMax = [];

				for (y = 0; y <= w / +table.rows[count].cells[1].innerHTML; y++){
					var f = +tableSecond.rows[i].cells[0].innerHTML -
					+table.rows[count].cells[1].innerHTML *
					+tableM.rows[0].cells[y].innerHTML.slice(3, 4);
					var prev = tableFirstStep.rows[i].cells[2];
					var plus = +prev.innerHTML.slice(28, 29);
					var tdM2 = document.createElement('td');
					tdM2.className= 'tdCl';
					trM2.appendChild(tdM2);

					if (+tableSecond.rows[i].cells[0].innerHTML >=  (+table.rows[count].cells[1].innerHTML * +tableM.rows[0].cells[y].innerHTML.slice(3, 4))){
					tableM2.rows[0].cells[y].innerText = +table.rows[count].cells[2].innerHTML *
					+tableM.rows[0].cells[y].innerHTML.slice(3, 4)  + parseInt(tableFirstStep.rows[f + 2].cells[2].innerHTML.slice(28, 33));			
					}else tableM2.rows[0].cells[y].innerText = '-';
				}

				for (k = 0; k < 2; k++){
					var tdF2 = document.createElement('td');
					trF2.appendChild(tdF2);
					tdF2.className = 'tdCl';
				}

				while (c1 < 5){
					if (tableM2.rows[0].cells[c1].innerHTML != '-'){
						arrMax[c1] = +tableM2.rows[0].cells[c1].innerHTML;
					}

					c1++;
				}

				var max = Math.max.apply(null, arrMax);
				var id = arrMax.indexOf(max);

				tableF2.rows[0].cells[0].innerText = max;
				tableF2.rows[0].cells[1].innerText = id;
			}
	}
	return tableSecond;
}