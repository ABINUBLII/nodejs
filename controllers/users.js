const users = [
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
  console.log(req.body); //didalam method post ada banyak, salah satunya body.
  const body = req.body;
  users.push(body);
  res.status(201).send({
    status: 201,
    message: "data berhasil ditambahkan",
  });
};
