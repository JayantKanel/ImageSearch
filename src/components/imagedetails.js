import "./imagedetails.css";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { getSingleImage } from "./api/api";
function Imagedetails() {
  const [url, setUrl] = useState();
  const [des,setDes]=useState('');
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const FindId = () => {
    let id = "";
    const url = location.pathname;
    let i = url.length - 1;
    while (url[i] !== "/") {
      id += url[i];
      i--;
    }
    id = id.split("").reverse().join("");
    return id;
  };
  useEffect(() => {
    const init = async () => {
      setLoading(true);
      const id = FindId();
      const [error, response] = await getSingleImage(
        localStorage.getItem("key"),
        id
      );
      console.log(response);
      setUrl(response.urls.raw);
      setDes(response.alt_description)
      setLoading(false);
    };
    init();
  }, []);
  if (loading) {
    return <div className="spinner-border text-primary spinner-position"></div>;
  }
  return (
    <div>
      {/* <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
        <img
          src={url}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="loading..."
        />
      </div> */}
      {/* <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="card">
              <img src={url} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#!" class="btn btn-primary">
                  Button
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="how-section1">
                    <div className="row">
                        <div className="col-md-6 how-img">
                            <img src={url} class="img-fluid" alt=""/>
                        </div>
                        <div className="col-md-6">
                            <h4>{des}</h4>
                                        {/* <h4 class="subheading">GetLance is a great place to find more clients, and to run and grow your own freelance business.</h4> */}
                        {/* <p className="text-muted">Freedom to work on ideal projects. On GetLance, you run your own business and choose your own clients and projects. Just complete your profile and we’ll highlight ideal jobs. Also search projects, and respond to client invitations.
                                            Wide variety and high pay. Clients are now posting jobs in hundreds of skill categories, paying top price for great work.
                                            More and more success. The greater the success you have on projects, the more likely you are to get hired by clients that use GetLance.</p> */}
                        </div>
                    </div>
                    </div>
    </div>
  );
}
export default Imagedetails;
