import _ from 'lodash';
// import { cube } from './math.js';
// import printMe from './print.js';
require('../sass/styles.sass');

if(process.env.NODE_ENV !== 'production')
	console.log('DEVELOPMENT MODE');

function component(){
	var element = document.createElement('div');
	var button = document.createElement('button');
	var br = document.createElement('br');

	button.innerHTML = ('Click me and look into console!');
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.appendChild(br);
	element.appendChild(button);

	button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
	    var print = module.default;
	    print();
	  });

	return element;
}

document.body.appendChild(component());

// if(module.hot){
// 	module.hot.accept('./print.js', function(){
// 		console.log('Acceptng the updated printMe module');
// 		document.body.removeChild(element);
// 		element = component();
// 		document.body.appendChild(element);
// 	})
// }