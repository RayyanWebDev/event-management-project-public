import React from "react";

const GamingSite = () => {
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto ">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex justify-center">
            {" "}
            {/* Use justify-center to horizontally center */}
            <div>
              <img
                className="rounded"
                src="https://i.ibb.co/ZTvNzky/wallpaperflare-com-wallpaper-32.jpg"
                alt=""
              />
            </div>
            <div className="mt-50">
              <p className="mt-50 text-center text-red-900 text-xl">
                {" "}
                {/* Use text-center to center text */}
                Interactive digital entertainment spanning genres, technology
                advancements, esports, social connections, and cultural impact,
                offering diverse experiences and communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamingSite;
