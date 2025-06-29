const app = express();
const port = 3000;
app.use(bodyParser.json());
// Konfigurasi koneksi ke database
const db = mysql.createConnection({
 host: 'localhost',
 user: 'root',
 password: '',
 database: 'akademik'
});
// Koneksi ke database
db.connect((err) => {
 if (err) {
 console.error('Error connecting to the database:', err);
 return;
 }
 console.log('Connected to the database.');
});