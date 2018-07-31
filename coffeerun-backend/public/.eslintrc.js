module.exports = {
"env": {
"es6": true,
"browser": true
},

"ecmaFeatures": {
// env=es6 doesn't include modules, which we are using
"modules": true
},

"extends": "eslint:recommended",

"rules": {
"no-console" : 0
}
		
};
	
