
function Category(props) {
  // Category
  return (
    <>
      <div className="flex justify-between ">
        <button onClick={()=>props.handleCategory("bypopularity")}className="text-3xl md:m-2 focus:text-tomato hover:bg-bisque p-2 border rounded-lg transition-all ease-in-out duration-300 ">
          Popular Anime
        </button>
        <button onClick={()=>props.handleCategory("airing")}className="text-3xl md:m-2 focus:text-tomato hover:bg-bisque p-2 border rounded-lg transition-all ease-in-out duration-300 ">
        Airing Anime
        </button>
        <button onClick={()=>props.handleCategory("upcoming")}className="text-3xl md:m-2 focus:text-tomato hover:bg-bisque p-2 border rounded-lg transition-all ease-in-out duration-300">
          Upcoming Anime
        </button>
        <button onClick={()=>props.handleCategory("movie")}className="text-3xl md:m-2 focus:text-tomato hover:bg-bisque p-2 border rounded-lg transition-all ease-in-out duration-300">
           Anime Movie
        </button>
      </div>
    </>
  );
}
export default Category;
