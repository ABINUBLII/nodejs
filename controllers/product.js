const products = [
  {
    id: 1,
    nama: "kambing",
    harga: "200000",
  },
  {
    id: 2,
    nama: "jerapah",
    harga: "500000",
  },
];

exports.getAllProducts = (req, res) => {
  res.send(products);
};

exports.getIdProducts = (req, res) => {
  const params = req.params.id;
  const findOne = products.find((item) => item.id === Number(params));
  if (!findOne) {
    res.status(404).send({
      status: 404,
      message: "data tidak ditemukan",
    });
  }
  res.send(findOne);
};
