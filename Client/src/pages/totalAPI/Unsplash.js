import React, { useState } from "react";

const Unsplash = () => {
  const [photos, setPhotos] = useState([]);
  const [search, setSearch] = useState();
  const dataUrl = `https://api.unsplash.com/search/photos/?client_id=ISEwowgLnIB8FOk6e-1MOPm2kePDGBYdpINxoKW0HjU&query=${search}&page=1&per_page=15`;

  const handleSearchInput = (e) => {
    setSearch(e.target.value);
  };

  const searchPhotos = () => {
    fetch(dataUrl, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((e) => {
        console.log(e.results);
        setPhotos(e.results);
      });
  };
  //
  return (
    <div className="Unsplash">
      <h3>searchPhotos</h3>
      <div className="searchPhotos">
        <input
          placeholder="請輸入要尋找的照片"
          onChange={(e) => {
            handleSearchInput(e);
          }}
          type="text"
        />
        <button onClick={searchPhotos}>search</button>
      </div>

      <div className="photos">
        {photos.map((d) => {
          return (
            <div className="photo">
              <img src={d.urls.regular} alt="" />
              <p className="bio">作者：{d.user.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Unsplash;
