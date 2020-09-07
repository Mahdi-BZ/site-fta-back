let name = process.argv[2];
if(!name){
	throw 'Please specify model name'
}
let dir = './app/'+name;

const fs = require('fs');

if (fs.existsSync(dir+'/'+name+'-model.js')) { 
	throw 'Files already exist. Exisiting'
} 

if (fs.existsSync(dir+'/router.js')) { 
	throw 'Files already exist. Exisiting'
} 

if (!fs.existsSync(dir)){
	fs.mkdirSync(dir);
}

fs.readFile('./templates/model.template', 'utf8', function(err, data) {
  if (err) throw err;
  console.log('Creating model file');
	fs.writeFileSync(dir+'/'+name+'-model.js', data.replace('{{replace}}',name));
});

fs.readFile('./templates/router.template', 'utf8', function(err, data) {
  if (err) throw err;
	console.log('Creating router file');
	let arr = [];
	let aux = data.split('');
	for(let i = 0;i<aux.length;i++){
		if(aux[i]=='{' && aux[i+1]=='{'){
			arr.push(name)
			i+=10
		}
		else arr.push(aux[i])
	}
	fs.writeFileSync(dir+'/'+'router.js', arr.join(''));
});
