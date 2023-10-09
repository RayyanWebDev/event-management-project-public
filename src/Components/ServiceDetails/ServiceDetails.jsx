import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const services = useLoaderData();
  const { id } = useParams();
  const idInteger = parseInt(id);
  const service = services.find((service) => service.id == idInteger);
  console.log(service);

  return (
    <div>
      <img
        className="mx-auto border-2 border-amber-600"
        src={service.image}
        alt=""
      />
    </div>
  );
};

export default ServiceDetails;
