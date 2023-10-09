import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const services = useLoaderData();
  const { id } = useParams();
  const idInteger = parseInt(id);
  const service = services.find((service) => service.id == idInteger);
  console.log(service);

  return (
    <div>
      <div
        className="hero min-h-screen "
        style={{
          backgroundImage: `url(${service.image})`,
        }}
      >
        <div className="card flex-shrink-0 w-full max-w-2xl  bg-black backdrop-filter  bg-opacity-50  shadow-xl ">
          <h2 className="mt-11">
            <span
              style={{ textTransform: "uppercase" }}
              className="text-white  text-7xl font-bold "
            >
              {service.name}
            </span>
          </h2>
          <h3 className="text-red-600 mb-10  text-7xl font-bold">
            {" "}
            ${service.price}
          </h3>

          <h3 className="text-white mb-6 text-2xl font-bold"> Details:</h3>
          <h3 className="text-gray-100 mb-11  text-xl font-bold">
            {" "}
            {service.details}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
