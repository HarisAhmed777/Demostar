import React, { useEffect, useState } from "react";
// import Header from "../header";
// import Menu from "../Menu";
import { base2url } from "../../../url";
// import { baseUrl } from "../../../url";

function SchoolPackage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const imageUrl = "https://demoadminbackend.onrender.com/packageimages/1722495090279-cp1.jpg";

  // "packageimages/1722495348495-TCP1.jpg"
  useEffect(() => {
    fetch(`${base2url}/allpackages `)
      .then(res => res.json())
      .then(view => {
        setData(view);
        console.log(view);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error occurred", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* <Header /> */}
      {/* <Menu /> */}
      <div className="content-wrapper paddingtop">
        <h1>All Package</h1>
        {data.map((packages, index) => (
          <div key={index} className="packages">
            <h2 className="text-center"><span className="clr">Title:</span>{packages.packagename}</h2>
            <div className="text-center">
              <img
              // src={`${base2url}/${packages.image.replace(/\\/g, '/')}`}
              src={imageUrl}
                alt={packages.location}
                style={{width:'500px',height:'350px'}}
              />
            </div>
            <p className="container">{packages.duration}</p>
            <p className="container">{packages.cost}</p>
            <h2 className="text-center">End of a package</h2>
            <hr />
           
          </div>
        ))}
      </div>
    </>
  );
}

export default SchoolPackage;




