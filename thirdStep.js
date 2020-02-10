function thirdStep (table, table2){
	var table3 = document.createElement('table');
	table2.after(table3);
	var count = +table.rows[1].cells[0].innerHTML;
	var count2 = count + 1;
	w = 10;
		var arr = [];

	for (i = 0; i < table2.rows.length; i++){
		var tr = document.createElement('tr');
		table3.appendChild(tr);

		for (j = 0; j < 3; j++){
			var td = document.createElement('td');
			tr.appendChild(td);
			}

			if (i == 0){
				table3.rows[i].cells[0].innerText = `X${count}`;
				table3.rows[i].cells[1].innerText = `${table.rows[count].cells[1].innerHTML} * m${count} + f${count2}(X${count} - ${table.rows[count].cells[1].innerHTML} * m${count})`;
				table3.rows[i].cells[2].innerText = 'Оптимальное решение';
			}else

			if (i == 1){
				var tableM = document.createElement('table');
				var tableF = document.createElement('table');
				table3.rows[i].cells[1].appendChild(tableM);
				table3.rows[i].cells[2].appendChild(tableF);
				var trM = document.createElement('tr');
				var trF = document.createElement('tr');
				tableM.appendChild(trM);
				tableF.appendChild(trF);
				var coun = Math.ceil(w / +table.rows[count].cells[1].innerHTML);

				for (let k = 1; k < coun; k++){
					var tdM = document.createElement('td');
					tdM.className = 'tdCl';
					trM.appendChild(tdM);
					tableM.rows[0].cells[k - 1].innerText = `m${count}=${k}`;
				}

				for (let k = 0; k < 2; k++){
					var tdF = document.createElement('td');
					tdF.className = 'tdCl';
					trF.appendChild(tdF);
				}

				tableF.rows[0].cells[0].innerText = `f${count}(X${count})`;
				tableF.rows[0].cells[1].innerText = `m${count}`;
		} else{
			table3.rows[i].cells[0].innerText = i - 2;

			var tableM2 = document.createElement('table');
			var tableF2 = document.createElement('table');
			table3.rows[i].cells[1].appendChild(tableM2);
			table3.rows[i].cells[2].appendChild(tableF2);
			var trM2 = document.createElement('tr');
			var trF2 = document.createElement('tr');
			tableM2.appendChild(trM2);
			tableF2.appendChild(trF2);
			var arrMax = [];
			var max;
			var id;

			for (let k = 0; k < coun - 1; k++){
				var plus = +table3.rows[i].cells[0].innerHTML - 
				+table.rows[count].cells[1].innerHTML * 
				+tableM.rows[0].cells[k].innerHTML.slice(3, 4);
				var tdM2 = document.createElement('td');
				tdM2.className = 'tdCl';
				trM2.appendChild(tdM2);
				if (+table3.rows[i].cells[0].innerHTML >= (+table.rows[count].cells[1].innerHTML * +tableM.rows[0].cells[k].innerHTML.slice(3, 4))){
					tableM2.rows[0].cells[k].innerText = +tableM.rows[0].cells[k].innerHTML.slice(3, 4) * +table.rows[count].cells[2].innerHTML + parseInt(table2.rows[plus + 2].cells[2].innerHTML.slice(28, 31));			
					if (tableM2.rows[0].cells[k].innerHTML != '-'){
						arrMax[k] = +tableM2.rows[0].cells[k].innerHTML;
					}
				} else tableM2.rows[0].cells[k].innerText = '-';
			}

			max = Math.max.apply(null, arrMax);
			id = arrMax.indexOf(max) + 1;

			for (let k = 0; k < 2; k++){
				var tdF2 = document.createElement('td');
				tdF2.className = 'tdCl';
				trF2.appendChild(tdF2);
			}
			if (tableM2.rows[0].cells[0].innerHTML != '-'){
				tableF2.rows[0].cells[0].innerText = max;
				tableF2.rows[0].cells[1].innerText = id;
				arr[i-2] = +tableF2.rows[0].cells[0].innerHTML;
			} else{
				arr[i-2] = 0;
				tableF2.rows[0].cells[0].innerText = '-';
				tableF2.rows[0].cells[1].innerText = '-';
			}
			
			
		}

	}
let max2 = Math.max.apply(null, arr);
var id = arr.indexOf(max2);
var m = +table3.rows[id + 2].cells[2].innerHTML.slice(52, 53);

table3.rows[id + 2].style.background = 'green';

var f = id - (+table.rows[count].cells[1].innerHTML * m);

return f;
}