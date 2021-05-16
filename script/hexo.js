var spawn = require('child_process').exec;
hexo.on('new', function(data){
  spawn('start  "C:/Users/Administrator/AppData/Local/atom/atom.exe" ' + data.path);
});