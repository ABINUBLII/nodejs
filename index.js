const http = require("http");

const contact = [
  {
    nama: "abi nubli",
    Hp: 5540001,
  },
  {
    nama: "ancok",
    Hp: 5540002,
  },
  {
    nama: "embot",
    Hp: 5540003,
  },
  {
    nama: "abi nubli 2",
    Hp: 55400012,
  },
  {
    nama: "abi nubli 3",
    Hp: 55400013,
  },
];
// console.log(contact);

// const contactConvert = JSON.stringify(contact); //  JSON.stringify convert ke format JSON
// const contactConvert2 = JSON.parse(contactConvert);
const findContact = contact.filter((contact) => contact.nama.includes("abi nubli"));

const server = http.createServer((req, res) => {
  if (req.url === "/contactList") {
    res.writeHead(200, { "Content-Type": "application/JSON" }); //data yang mau kita tampilin di header network

    res.end(JSON.stringify(findContact));
  }
});

const port = 2000;

server.listen(port, () => console.log(`server running on ${port}`));
