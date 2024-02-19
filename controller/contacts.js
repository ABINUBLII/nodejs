const contacts = [
  {
    id: 1,
    nama: `abi`,
    alamat: "bandung",
    nomor: 082129610600,
  },
  {
    id: 2,
    nama: `budi`,
    alamat: "depok",
    nomor: 082141434234,
  },
];

//get all prods
exports.getAllContacts = (req, res) => {
  res.send(contacts);
};

//get By ID
exports.getById = (req, res) => {
  const params = req.params.id;

  const findContacts = contacts.find((item) => item.id === Number(params));
  if (!findContacts) {
    res.status(404).send({
      status: 404,
      message: `contacts not available`,
    });
  }
  res.send(findContacts);
};

//post
exports.postContacts = (req, res) => {
  const id = contacts.length + 1;
  const { nama, alamat } = req.body;
  const newContacts = {
    id,
    nama,
    alamat,
  };

  contacts.push(newContacts);

  res.status(201).send({
    status: 201,
    message: `berhasil`,
  });
};

// edit
