let users = [
  {
    id: 1,
    name: "abi",
    address: "tangerang",
  },
  {
    id: 2,
    name: "nubli",
    address: "jakarta",
  },
];

// EXER REMINDER
// ganti adress dalam array 1
// const ganti = (users[1].address = "jatinangor");
// console.log(ganti);

// CARI yang id nya 2 dan ubah si addressnya.
// const findById = users.find((item) => item.id === 2);
// findById.adress = "BEKASI";
// console.log(findById);

exports.getAllUsers = (req, res) => {
  res.send(users);
};

exports.getById = (req, res) => {
  const params = req.params.id;
  const findOne = users.find((item) => item.id === Number(params));
  // tampilan status 404 dan jika data not found.
  if (!findOne) {
    res.status(404).send({
      status: 404,
      message: "data tidak ditemukan",
    });
  }

  res.send(findOne);
};
// method post
exports.postByIdUsers = (req, res) => {
  // console.log(req.body); //didalam method post ada banyak, salah satunya body.
  const body = req.body;
  users.push(body);
  res.status(201).send({
    status: 201,
    message: "data berhasil ditambahkan",
  });
};

// patch
exports.patchUsers = (req, res) => {
  const params = req.params.id; // ID pada array object ditampung dalam cont Params
  const findOne = users.find((item) => item.id === Number(params)); //cari ID dalam params
  //konsep destructuring >>>
  const { name, address } = req.body; // memecah atau dijabarin ada atribut apa aja yg ada didalam si req.body
  findOne.name = name;
  findOne.address = address;

  // const body = req.body;
  //mau ubah data address pada array object melalui >> (ID)
  // findOne.name = body.name;
  // findOne.address = body.address;

  res.send(findOne);
};

//delete
exports.deleteUsersId = (req, res) => {
  const id = req.params.id; // mencari 2
  users = users.filter((item) => item.id !== Number(id)); //

  res.send({
    message: "users id berhasil ditambah",
  });
};
