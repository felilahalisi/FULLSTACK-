import React from 'react';
import MahasiswaList from './components/MahasiswaList';
// import MahasiswaDetail from './components/MahasiswaDetail'; // Jika menggunakan
const App = () => {
 return (
 <div className="App">
 <MahasiswaList />
 {/* Tambahkan route detail jika perlu */}
 </div>
 );
};
export default App;