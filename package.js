Package.describe({
	name: 'javascript-playlist-parser',
	version: '0.0.1',
	summary: 'Parse m3u, m3u extended, pls, and asx in JavaScript.',
	git: '',
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom('1.2.1');
	api.use('ecmascript');
	api.export('PlaylistParser', 'server')
	api.addFiles('lib/javascript-playlist-parser.js', 'server')
});

Npm.depends({
	"playlist-parser": '0.0.12',
	"xmldom": '0.1.16'
})
