const mysql = require('mysql2');
const bodyParser = require('body-parser');
const koneksi = require('../config/db')

// CREATE: Tambah data mahasiswa
app.post('/mahasiswa', (req, res) => {
 const { nim, nama, jurusan, angkatan, email } = req.body;
 const sql = 'INSERT INTO mahasiswa (nim, nama, jurusan,angkatan, email) VALUES (?, ?, ?, ?, ?)';
 db.query(sql, [nim, nama, jurusan, angkatan, email], (err,result) => {
 if (err) {
  return res.status(500).json({ error: err.message });
 }
 res.status(201).json({ message: 'Mahasiswa added successfully', data: result });
 });
});
// READ: Ambil semua data mahasiswa
app.get('/mahasiswa', (req, res) => {
 const sql = 'SELECT FROM mahasiswa';
 db.query(sql, (err, results) => {
 if (err) {
 return res.status(500).json({ error: err.message });
 }
 res.status(200).json({ data: results });
 });
});
// READ: Ambil data mahasiswa berdasarkan NIM
app.get('/mahasiswa/:nim', (req, res) => {
 const { nim } = req.params;
 const sql = 'SELECT FROM mahasiswa WHERE nim = ?';
 db.query(sql, [nim], (err, result) => {
 if (err) {
 return  res.status(500).json({ error: err.message });
 }
 if (result.length === 0) {
 return res.status(404).json({ message: 'Mahasiswa not found' });
 }
 res.status(200).json({ data: result[0] });
 });
});
// UPDATE: Ubah data mahasiswa
app.put('/mahasiswa/:nim', (req, res) => {
 const { nim } = req.params;
 const { nama, jurusan, angkatan, email } = req.body;
 const sql = 'UPDATE mahasiswa SET nama = ?, jurusan = ?, angkatan = ?, email = ? WHERE nim = ?';
 db.query(sql, [nama, jurusan, angkatan, email, nim], (err,
result) => {
 if (err) {
 return res.status(500).json({ error: err.message });
 }
 if (result.affectedRows === 0) {
 return res.status(404).json({ message: 'Mahasiswa not found' });
 }
 res.status(200).json({ message: 'Mahasiswa updated successfully' });
 });
});
const mysql = require('mysql2');
const bodyParser = require('body-parser');

// CREATE: Tambah data mahasiswa
app.post('/mahasiswa', (req, res) => {
 const { nim, nama, jurusan, angkatan, email } = req.body;
 const sql = 'INSERT INTO mahasiswa (nim, nama, jurusan,angkatan, email) VALUES (?, ?, ?, ?, ?)';
 db.query(sql, [nim, nama, jurusan, angkatan, email], (err,result) => {
 if (err) {
  return res.status(500).json({ error: err.message });
 }
 res.status(201).json({ message: 'Mahasiswa added successfully', data: result });
 });
});
// READ: Ambil semua data mahasiswa
app.get('/mahasiswa', (req, res) => {
 const sql = 'SELECT FROM mahasiswa';
 db.query(sql, (err, results) => {
 if (err) {
 return res.status(500).json({ error: err.message });
 }
 res.status(200).json({ data: results });
 });
});
// READ: Ambil data mahasiswa berdasarkan NIM
app.get('/mahasiswa/:nim', (req, res) => {
 const { nim } = req.params;
 const sql = 'SELECT FROM mahasiswa WHERE nim = ?';
 db.query(sql, [nim], (err, result) => {
 if (err) {
 return  res.status(500).json({ error: err.message });
 }
 if (result.length === 0) {
 return res.status(404).json({ message: 'Mahasiswa not found' });
 }
 res.status(200).json({ data: result[0] });
 });
});
// UPDATE: Ubah data mahasiswa
app.put('/mahasiswa/:nim', (req, res) => {
 const { nim } = req.params;
 const { nama, jurusan, angkatan, email } = req.body;
 const sql = 'UPDATE mahasiswa SET nama = ?, jurusan = ?, angkatan = ?, email = ? WHERE nim = ?';
 db.query(sql, [nama, jurusan, angkatan, email, nim], (err,
result) => {
 if (err) {
 return res.status(500).json({ error: err.message });
 }
 if (result.affectedRows === 0) {
 return res.status(404).json({ message: 'Mahasiswa not found' });
 }
 res.status(200).json({ message: 'Mahasiswa updated successfully' });
 });
});
const mysql = require('mysql2');
const bodyParser = require('body-parser');

// CREATE: Tambah data mahasiswa
app.post('/mahasiswa', (req, res) => {
 const { nim, nama, jurusan, angkatan, email } = req.body;
 const sql = 'INSERT INTO mahasiswa (nim, nama, jurusan,angkatan, email) VALUES (?, ?, ?, ?, ?)';
 db.query(sql, [nim, nama, jurusan, angkatan, email], (err,result) => {
 if (err) {
  return res.status(500).json({ error: err.message });
 }
 res.status(201).json({ message: 'Mahasiswa added successfully', data: result });
 });
});
// READ: Ambil semua data mahasiswa
app.get('/mahasiswa', (req, res) => {
 const sql = 'SELECT FROM mahasiswa';
 db.query(sql, (err, results) => {
 if (err) {
 return res.status(500).json({ error: err.message });
 }
 res.status(200).json({ data: results });
 });
});
// READ: Ambil data mahasiswa berdasarkan NIM
app.get('/mahasiswa/:nim', (req, res) => {
 const { nim } = req.params;
 const sql = 'SELECT FROM mahasiswa WHERE nim = ?';
 db.query(sql, [nim], (err, result) => {
 if (err) {
 return  res.status(500).json({ error: err.message });
 }
 if (result.length === 0) {
 return res.status(404).json({ message: 'Mahasiswa not found' });
 }
 res.status(200).json({ data: result[0] });
 });
});
// UPDATE: Ubah data mahasiswa
app.put('/mahasiswa/:nim', (req, res) => {
 const { nim } = req.params;
 const { nama, jurusan, angkatan, email } = req.body;
 const sql = 'UPDATE mahasiswa SET nama = ?, jurusan = ?, angkatan = ?, email = ? WHERE nim = ?';
 db.query(sql, [nama, jurusan, angkatan, email, nim], (err,
result) => {
 if (err) {
 return res.status(500).json({ error: err.message });
 }
 if (result.affectedRows === 0) {
 return res.status(404).json({ message: 'Mahasiswa not found' });
 }
 res.status(200).json({ message: 'Mahasiswa updated successfully' });
 });
});
const mysql = require('mysql2');
const bodyParser = require('body-parser');

// CREATE: Tambah data mahasiswa
app.post('/mahasiswa', (req, res) => {
 const { nim, nama, jurusan, angkatan, email } = req.body;
 const sql = 'INSERT INTO mahasiswa (nim, nama, jurusan,angkatan, email) VALUES (?, ?, ?, ?, ?)';
 db.query(sql, [nim, nama, jurusan, angkatan, email], (err,result) => {
 if (err) {
  return res.status(500).json({ error: err.message });
 }
 res.status(201).json({ message: 'Mahasiswa added successfully', data: result });
 });
});
// READ: Ambil semua data mahasiswa
app.get('/mahasiswa', (req, res) => {
 const sql = 'SELECT FROM mahasiswa';
 db.query(sql, (err, results) => {
 if (err) {
 return res.status(500).json({ error: err.message });
 }
 res.status(200).json({ data: results });
 });
});
// READ: Ambil data mahasiswa berdasarkan NIM
app.get('/mahasiswa/:nim', (req, res) => {
 const { nim } = req.params;
 const sql = 'SELECT FROM mahasiswa WHERE nim = ?';
 db.query(sql, [nim], (err, result) => {
 if (err) {
 return  res.status(500).json({ error: err.message });
 }
 if (result.length === 0) {
 return res.status(404).json({ message: 'Mahasiswa not found' });
 }
 res.status(200).json({ data: result[0] });
 });
});
// UPDATE: Ubah data mahasiswa
app.put('/mahasiswa/:nim', (req, res) => {
 const { nim } = req.params;
 const { nama, jurusan, angkatan, email } = req.body;
 const sql = 'UPDATE mahasiswa SET nama = ?, jurusan = ?, angkatan = ?, email = ? WHERE nim = ?';
 db.query(sql, [nama, jurusan, angkatan, email, nim], (err,
result) => {
 if (err) {
 return res.status(500).json({ error: err.message });
 }
 if (result.affectedRows === 0) {
 return res.status(404).json({ message: 'Mahasiswa not found' });
 }
 res.status(200).json({ message: 'Mahasiswa updated successfully' });
 });
});
// DELETE: Hapus data mahasiswa
app.delete('/mahasiswa/:nim', (req, res) => {
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
app.listen(port, () => {
 console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;