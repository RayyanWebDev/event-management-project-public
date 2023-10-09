import React from "react";
import { Link } from "react-router-dom";

const Movies = () => {
  return (
    <div className="marque1">
      <div className="marque1">
        <div>
          <img
            src="https://i.ibb.co/VWFbD48/wallpaperflare-com-wallpaper-12.jpg"
            alt=""
          />
        </div>

        <h3 className="text-4xl font-bold mt-14 mb-14">Movies</h3>
        <div
          className="flex
         gap-4 marque mb-14"
        >
          <img
            className="w-80 h-44"
            src="https://i.ibb.co/8DFFP97/wallpaperflare-com-wallpaper-22.jpg"
            alt=""
          />
          <img
            className="w-80 h-44"
            src="https://i.ibb.co/bBYx3x9/wallpaperflare-com-wallpaper-11.jpg"
            alt=""
          />
          <img
            className="w-80 h-44"
            src="https://i.ibb.co/pLxDQX1/wallpaperflare-com-wallpaper-29.jpg"
            alt=""
          />
          <img
            className="w-80 h-44"
            src="https://i.ibb.co/Dk9QfbQ/wallpaperflare-com-wallpaper-7.jpg"
            alt=""
          />
          <img
            className="w-80 h-44"
            src="https://i.ibb.co/qJRGLD8/wallpaperflare-com-wallpaper-3.jpg"
            alt=""
          />
          <img
            className="w-96 h-44"
            src="https://i.ibb.co/N1Gq90J/wallpaperflare-com-wallpaper-25.jpg"
            alt=""
          />
          <img
            className="w-80 h-44"
            src="https://i.ibb.co/86ML9qt/wallpaperflare-com-wallpaper-27.jpg"
            alt=""
          />
        </div>

        <Link to="/movieSynopsis">
          <div className="flex justify-center mx-auto mb-14">
            <button className="btn but btn-primary">Read Movie Synopsis</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Movies;
