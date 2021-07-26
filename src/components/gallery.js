import "./gallery.css";
import { getSearchImage } from "./api/api";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useLocation } from "react-router-dom";
function Gallery() {
  const [index,setIndex]=useState(0);
  const [length,setlength]=useState();
  const [temp,setTemp]=useState(0);
  const [term, setTerm] = useState("music");
  const [term1, setTerm1] = useState("");
  const [loading, setLoading] = useState(false);
  const imgData=[];
  const key = "W3pl_4jDBKtl67uFMEuboGfVy1mxERENBhGsXP7Pn9U";
  const location = useLocation();
  const [data, setData] = useState();
  let images;
  const { control, handleSubmit, formState } = useForm({
    // defaultValues: { ...initialValues },
    mode: "onChange",
  });
  const onSubmit = async () => {
    setTerm(term1);
  };
  useEffect(() => {
    console.log(location.pathname);
    localStorage.setItem("key", key);
    if (term === "") {
      setTerm("Music");
    }
    const init = async () => {
      setIndex(0);
      setLoading(true);
      const [error, response] = await getSearchImage(key, term);
      setData(response.photos.results);
     
      // setData(temp2)
      setLoading(false);
    };
    init();
  }, [term]);
  
  if (!data || loading) {
    return <div className="spinner-border text-primary spinner-position"></div>;
  }

  return (
    
    <div>
      <div className="business_form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="container h-100">
            <div className="d-flex justify-content-center h-100">
              <div className="searchbar">
                <input
                  className="search_input"
                  type="text"
                  name=""
                  placeholder="Search..."
                  onChange={(e) => {
                    setTerm1(e.target.value);
                  }}
                />
                <button className="btn">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      {
        <div className="container">
        <div className="row">
          {
            
            data.map((img)=>{
              const ID = img.id;
          return(
          
              <div className="col-md-3 col-sm-4 col-xs-6 img-div"><a href={`${location.pathname}/${ID}`}><img className="img-responsive img-size" src={img.urls.regular} alt="loading..." /></a></div>
            
	 
        
            )})}
            </div>
</div>
}
<button>Load More</button>
    </div>
  );
}
export default Gallery;
