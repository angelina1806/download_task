function findOptimum(t1, t2, f, table){
	t2.rows[f + 2].style.background = 'green';
	var m = +t2.rows[f + 2].cells[2].innerHTML.slice(52, 53);
	var f2 = f - (+table.rows[2].cells[1].innerHTML * m);
	t1.rows[f2 + 2].style.background = 'green';
}