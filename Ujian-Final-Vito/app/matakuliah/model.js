const mongoose= require("mongoose");

const matakuliahSchema = new mongoose.Schema({
    kode:{type:Number, require:[true,"kode matakuliah harus diisi"]}, 
    nama:{type:String, require:[true,"nama matakuliah harus diisi"]},
    ruangan:{type:String, require:[true,"ruangan kelas harus diisi"]},
    jam:{type:Number, require:[true,"jam kelas harus diisi"]},

    
});

const Matakuliah = mongoose.model("Matakuliah",matakuliahSchema);

module.exports = Matakuliah;