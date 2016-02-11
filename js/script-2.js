function launch(){
	
	var testdiv = document.getElementById('testDiv');

	var x = window.innerWidth;
	var y = window.innerHeight;

	testdiv.style.width = x + 'px';
	testdiv.style.height = y + 'px';

}

function subDivide() {

	var testdiv = this;

	var divWidth = this.offsetWidth;
	var divHeight = this.offsetHeight;

	var newWidth = divWidth / 3;
	var newHeight = divHeight / 3;

	console.log(divHeight, divWidth);

	for( var i = 0; i < 3; i ++ ){
		for( var j = 0; j < 3; j ++ ){
			var div = document.createElement('div');
			
			div.style.width = newWidth + 'px';
			div.style.height = newHeight + 'px';
			div.setAttribute('id', 'testDiv');

			testdiv.appendChild(div);
		}
	}

}