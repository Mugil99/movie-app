import logo from './logo.svg';
import './App.css';
import MovieDisplay from './Components/MovieDisplay';

function App() {
  const moviesArr = [
    { name: "Mauli", genere: "Action", rating: 4.2, image: "https://wallpapercave.com/wp/wp9860655.jpg" },
    { name: "Ved", genere: "Love Story", rating: 4.3, image: "https://i.pinimg.com/564x/3c/1e/f8/3c1ef8f32b4ca3355133af41124b605a.jpg" },
    { name: "Sarsenapati Hambirrao", genere: "Historic", rating: 4.8, image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1188/1451188-h-bd4596917070" },
    { name: "Baghtos Kay Mujara Kar", genere: "Inspiring", rating: 4.7, image: "https://images.slivcdn.com/videoasset_images/bkmk_25dec_landscape_thumb.jpg?h=394&w=708&t=c_fill&q=low&fr=webp" },
    { name: "Mitawa", genere: "Romantic", rating: 4.5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbFilQFXZlLu4bkAXiALrPL5nUdPDi792-FjjDue1b2qt7NQVp75gxB_GTDNhbLL4r32k&usqp=CAU" },
    { name: "Sairat", genere: "Love Story", rating: 4.5, image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/Sairat_Marathi_Film_Poster.jpg/220px-Sairat_Marathi_Film_Poster.jpg" },
    { name: "Online Binline", genere: "Comedy", rating: 4.4, image: "https://wallpapercave.com/wp/wp9860685.jpg" },
    { name: "Dharmavir", genere: "Real Life Story", rating: 4.5, image: "https://upload.wikimedia.org/wikipedia/en/1/13/Dharmaveer_Marathi_film.jpeg" },
    { name: "Ashi Hi Banwa Banwi ", genere: "Comedy", rating: 4.6, image: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/eead86202416219b02fa250fb152167d4906cc219ce79d03d338eb8c351c0b9c._UY500_UX667_RI_TTW_.jpg" },
  ]
  return (
    <div>
       <MovieDisplay moviesArr={moviesArr}/>
    </div>
  );
}

export default App;
