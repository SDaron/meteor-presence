Package.describe({
  summary: "A package to help track users' presence"
});

Package.on_use(function (api) {
  api.use('accounts-base', ['client', 'server']);
  api.use('session', 'client');
  
  api.add_files('presence_common.js', ['client', 'server']);
  api.add_files('presence_client.js', 'client');
  api.add_files('presence_server.js', 'server');
});