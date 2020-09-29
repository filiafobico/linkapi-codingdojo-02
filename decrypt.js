const Encryption = require('node_triple_des');
const fs = require('fs');

(async () => {
  let files = await fs.readdirSync('./docs');
  for (const file of files) {
    const encriptado = await fs.readFileSync('docs/' + file, { encoding: 'utf-8'});
    const decrypt = await Encryption.decrypt('0123456789ABCDEFFEDCBA987654321089ABCDEF01234567', encriptado);

    await fs.writeFileSync(`docs/${file.replace('.3des', '.json')}`, decrypt);
  }
})();
