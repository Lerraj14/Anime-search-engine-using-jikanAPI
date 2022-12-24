
/* You can add anime synopsis you can check all elements using "console.log(getTopAnime)" in useEffect (App.js) if you want */
function AnimeCard({ anime }) {

// console.log(anime);
const loadgenres=(anime)=>{
  let genreArr=[]
  anime.genres.map((title)=>(genreArr.push(title.name)));
  return genreArr.toString();
}
// console.log(genres(anime));
  // Anime Cards
  return (
    <>
    <div>
      <div className=" p-4">
        <img
          src={anime.images.jpg.image_url}
          alt="AnimeImage"
          className="inline-block"
        />
        <div>
        <h3 className="text-tomato font-light text-lg">{anime.title}</h3>
        <h4>Score: {anime.score}</h4>
        <h4>Aired: {anime.aired.string}</h4>
        <h4>Episodes: {anime.episodes}</h4>
        <h4>Genres: {loadgenres(anime)}</h4>
        <a href={anime.url} alt={anime.title}><h4 className="hover:text-tomato transition-all ease-in duration-100">Visit source</h4></a>
        <p className="text-justify font-thin text-base lowercase">{anime.synopsis}</p>
        </div>
      </div>
 
    </div>
    </>
  );
}
export default AnimeCard;
