var md2conflu = require('./'),
	assert = require('assert');

[
	  ['# h1', 'h1. h1\n\n']
	, ['head1\n===', 'h1. head1\n\n']
	, ['### h3', 'h3. h3\n\n']
].forEach(function(arr, i) {
	assert.equal(md2conflu(arr[0]), arr[1], [i,': ',arr[0],' = ',arr[1]].join(''));
})

console.log('all pass!')
