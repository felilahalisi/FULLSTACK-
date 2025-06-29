const express = require('express');
const router = express.Router();
const Mahasiswa = require('../models/Mahasiswa');

// GET semua mahasiswa
router.get('/', async (req, res) => {
 try {
 const mahasiswa = await Mahasiswa.find();
 res.json(mahasiswa);
 } catch (err) {
 res.status(500).json({ message: err.message });
 }
});
// GET satu mahasiswa
router.get('/:id', getMahasiswa, (req, res) => {
 res.json(res.mahasiswa);
});
// POST mahasiswa baru
router.post('/', async (req, res) => {
 const mahasiswa = new Mahasiswa({
 _id: req.body.nim,
 nama: req.body.nama,
 jurusan: req.body.jurusan,
 angkatan: req.body.angkatan,
 email: req.body.email
 });
 try {
 const newMahasiswa = await mahasiswa.save();
 res.status(201).json(newMahasiswa);
 } catch (err) {
 res.status(400).json({ message: err.message });
 }
});
// DELETE: Hapus data mahasiswa
router.delete('/mahasiswa/:nim', (req, res) => {
 const { nim } = req.params;
 const sql = 'DELETE FROM mahasiswa WHERE nim = ?';
 db.query(sql, [nim], (err, result) => {
 if (err) {
 return res.status(500).json({ error: err.message });
 }
 if (result.affectedRows === 0) {
 return res.status(404).json({ message: 'Mahasiswa not found' });
 }
 res.status(200).json({ message: 'Mahasiswa deleted successfully' });
 });
});
// Jalankan server
// Middleware untuk mendapatkan mahasiswa berdasarkan ID
async function getMahasiswa(req, res, next) {
 let mahasiswa;
 try {
 mahasiswa = await Mahasiswa.findById(req.params.id);
 if (mahasiswa == null) {
 return res.status(404).json({ message: 'Mahasiswa tidak ditemukan' });
 }
 } catch (err) {
 return res.status(500).json({ message: err.message });
 }
 res.mahasiswa = mahasiswa;
 next();
}

module.exports = router;