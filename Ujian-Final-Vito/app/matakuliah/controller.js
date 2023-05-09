// Import model User
const Matakuliah = require('./model');

// Fungsi untuk membuat data matakuliah baru
const createUser = async (req, res, next) => {
  try {
    const { kode, nama, ruangan, jam } = req.body;

    // Membuat objek user baru berdasarkan model User
    const newUser = new User({
      kode,
      nama,
      ruangan,
      jam
    });

    // Menyimpan data matakuliah baru ke database
    await newUser.save();

    res.send({ status: 'success', message: 'Matakuliah berhasil ditambahkan', data: newUser });
  } catch (error) {
    res.send({ status: 'error', message: error.message });
  }
};

// Fungsi untuk mendapatkan daftar semua matakuliah
const getAllUsers = async (req, res, next) => {
  try {
    const users = await Matakuliah.find();
    res.send({ status: 'success', message: 'Daftar matakuliah', data: users });
  } catch (error) {
    res.send({ status: 'error', message: error.message });
  }
};

// Fungsi untuk mendapatkan data matakuliah berdasarkan ID
const getUserById = async (req, res, next) => {
  try {
    const user = await Matakuliah.findById(req.params.id);
    if (user) {
      res.send({ status: 'success', message: 'Detail matakuliah', data: user });
    } else {
      res.send({ status: 'warning', message: 'Matakuliah tidak ditemukan' });
    }
  } catch (error) {
    res.send({ status: 'error', message: error.message });
  }
};

// Fungsi untuk mengupdate data matakuliah berdasarkan ID
const updateUserById = async (req, res, next) => {
  try {
    const { kode, nama, ruangan, jam } = req.body;

    const updatedUser = await Matakuliah.findByIdAndUpdate(
      req.params.id,
      { kode, nama, ruangan, jam },
      { new: true }
    );

    if (updatedUser) {
      res.send({ status: 'success', message: 'Matakuliah berhasil diupdate', data: updatedUser });
    } else {
      res.send({ status: 'warning', message: 'Matakuliah tidak ditemukan' });
    }
  } catch (error) {
    res.send({ status: 'error', message: error.message });
  }
};

// Fungsi untuk menghapus data matakuliah berdasarkan ID
const deleteUserById = async (req, res, next) => {
  try {
    const deletedUser = await Matakuliah.findByIdAndDelete(req.params.id);
    if (deletedUser) {
      res.send({ status: 'success', message: 'Matakuliah berhasil dihapus', data: deletedUser });
    } else {
      res.send({ status: 'warning', message: 'Matakuliah tidak ditemukan' });
    }
  } catch (error) {
    res.send({ status: 'error', message: error.message });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById
};
