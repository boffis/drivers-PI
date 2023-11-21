const server = require("./src/server");
const { conn } = require('./src/db.js');
const PORT = 3001;
const DownloadTeams = require("./src/controllers/DownloadTeams.js")

conn.sync({ force: true }).then(() => {
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  DownloadTeams();
})
}).catch(error => console.error(error))
