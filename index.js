const server = require('./api/server');

const PORT = 4000;

server.listen(PORT, () => {
    console.log(`\n== API running on port ${PORT} ==\n`);
}); 