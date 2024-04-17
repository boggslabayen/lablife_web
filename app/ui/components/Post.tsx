import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function Post({
  ServiceTitle,
  ServiceDescription,
  onClose,
  serviceList1,
  serviceList2,
  serviceList3,
  serviceList4,
  serviceList5,
}) {
  return (
    <>
      <div className="bg-lab-yellow p-8 md:min-w-80">
        <div className="flex justify-between content-center">
          <div>
            <h3 className="text-xl md:text-3xl font-bold py-4">
              {ServiceTitle}
            </h3>
          </div>
          <div
            className="text-lab-purple pb-2 text-end text-4xl content-center"
            onClick={onClose}
          >
            <FontAwesomeIcon icon={faX} />
          </div>
        </div>

        <div>
          <p className="text-sm leading-relaxed md:text-xl md:leading-10">
            {ServiceDescription}
          </p>
        </div>

        <div className="pt-8">
          <ul className="list-none">
            <li className="md:text-xl text-md pb-4 font-medium pl-4">
              {serviceList1}
            </li>
            <li className="md:text-xl text-md pb-4 font-medium pl-4">
              {serviceList2}
            </li>
            <li className="md:text-xl text-md pb-4 font-medium pl-4">
              {serviceList3}
            </li>
            <li className="md:text-xl text-md pb-4 font-medium pl-4">
              {serviceList4}
            </li>
            <li className="md:text-xl text-md pb-4 font-medium pl-4">
              {serviceList5}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Post;
