import AnimeCard from "../components/AnimeCard";
// you can get the props "function Home(props)" in this manner
/* OR you can destructure it "function Home({handleSearch, search, setSearch, topAnime, animeList })" and use "search" instead of "props.search"   */
import Category from "../components/Category";

const searchResultMarkup = (toggleSearch,animeList) => {
  if(toggleSearch){
    if(toggleSearch&&animeList.length === 0){
      console.log(animeList);
      return <h2 className="text-3xl">No Results try searching by anime name</h2>
    }
    return <h2 className="text-3xl">Anime Result</h2>
  }

 else{
    return "";
  }
};


function Home(props) {
  // console.log(props.search);
  // console.log(props.animeList);
  return (
    <main className="bg-lightblue">
      <div className="bg-tomato p-2">
        <form
          className=" flex justify-center space-x-2 items-center m-2>"
          onSubmit={props.handleSearch}
        >
          <input
            type="search"
            placeholder="  Search Anime title..."
            required
            value={props.search}
            onChange={(e) => {
              props.setSearch(e.target.value);
              props.setAnimeList([]);
            }}
            className="my-8 w-1/2 h-10 rounded-lg"
          />
          <button
            onClick={() => props.setToggleSearch(true)}
            className="border border-solid p-2 w-1/4 md:w-1/6 rounded-lg bg-darkBisque hover:bg-bisque transition-all duration-150 ease-in-out hover:text-tomato"
          >
            Search
          </button>
        </form>
      </div>
      {/* if there is no text in the search bar it will show top anime(by popularity)
          and on searching it will show search results
          use map() function to get all element in the array
      */}
      <div className="flex justify-center flex-col items-center p-4 overflow-hidden">
        <Category handleCategory={props.handleCategory} />
        {!props.search && props.animeList.length === 0 ? (
          <>
            <div className=" grid md:grid-cols-3 md:gap-8 m-4 p-4 place-items-center overflow-hidden ">
              {props.topAnime.map((anime) => (
                <AnimeCard anime={anime} key={anime.mal_id} />
              ))}
            </div>
          </>
        ) : (
          <>

           {/* display Anime result <h2> after clicking search button */}
            {searchResultMarkup(props.toggleSearch,props.animeList)}
            <div className="grid md:grid-cols-3 md:gap-8 m-4 p-4 place-items-center">
              {props.animeList.map((anime) => (
                <AnimeCard anime={anime} key={anime.mal_id} />
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
export default Home;
