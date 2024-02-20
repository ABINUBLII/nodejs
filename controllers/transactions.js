const { transactions, products } = require("../dummy/data");

//getall
exports.getTransactions = (req, res) => {
  res.send(transactions);
};

//post
exports.postTransactions = (req, res) => {
  const { productId, quantity } = req.body;

  const dataProduct = products.find((item) => item.id == productId);
  console.log(dataProduct);
  if (!dataProduct) {
    res.status(404).send({
      status: 404,
      message: `id product ${productId} tidak ditemukan`,
    });
  } else {
    const newTransaction = {
      id: transactions.length + 1,
      productId: productId,
      quantity: quantity,
      total: dataProduct.price * quantity,
    };

    transactions.push(newTransaction);
    res.status(201).send({
      data: { ...newTransaction, product: dataProduct },
      status: 201,
      message: "transaksi berhasil",
    });
  }
};
