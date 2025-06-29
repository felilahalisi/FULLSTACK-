import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const MahasiswaDetail = () => {
 const { id } = useParams();
 const [mahasiswa, setMahasiswa] = useState(null);
 useEffect(() => {
 const fetchData = async () => {
 try {
 const response = await
axios.get(`http://localhost:3000/mahasiswa/${id}`);
 setMahasiswa(response.data);
 } catch (error) {
 console.error('Error fetching data:', error);
 }
 };
 fetchData();
 }, [id]);
 if (!mahasiswa) return <div>Loading...</div>;
 return (
 <div>
 <h1>{mahasiswa.nama}</h1>
 <p>Jurusan: {mahasiswa.jurusan}</p>
 <p>Angkatan: {mahasiswa.angkatan}</p>
 <p>Email: {mahasiswa.email}</p>
 </div>
 );
};
export default MahasiswaDetail;