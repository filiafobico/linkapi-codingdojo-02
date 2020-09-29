const ftp = require("basic-ftp")
const Encryption = require('node_triple_des');
const csv = require('csvtojson');
const fs = require('fs');

async function example() {
  const client = new ftp.Client()
  client.ftp.verbose = true
  try {
    await client.access({
      host: "64.31.33.10",
      user: "kapi",
      password: "senhatopdelinha",
      secure: false
    })
    const files = await client.list('./docs');
    let jaFoi = await fs.readdirSync('./docs');

    jaFoi = jaFoi.map(name => name.replace('.3des', ''))

    for (const file of files) {
      const name = file.name;
      if (jaFoi.includes(name)) {
        console.log('me da kapicoin')
        return;
      }
      const filePath = `./docs/${name}`;
      await client.downloadTo(filePath, filePath);
      csv()
      .fromFile(filePath)
      .then( async (jsonObj) => {
        const encrypt = await Encryption.encrypt('0123456789ABCDEFFEDCBA987654321089ABCDEF01234567', JSON.stringify(jsonObj));

        await fs.writeFileSync(`${filePath}.3des`, encrypt)
        await fs.unlinkSync(filePath);
      })
    }
  } catch (err) {
    console.log(err)
  }
}

var CronJob = require('cron').CronJob;
var job = new CronJob(
  '*/10 * * * * *',
  async function () {
    await example();
  },
  null,
  true,
  'America/Los_Angeles',
);
job.start();