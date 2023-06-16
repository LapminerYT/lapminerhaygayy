const path = require('path'); app.get('*', (req, res)=> { res.status(404).sendFile(path.join(__dirname, "/404.html")); });
