import AddService from "../components/add-service";
import ListAllServices from "../components/list-all-services";
import { useServiceProvider } from "../context/service-context";

const ServicesPage = () => {
    
    return (
        <div className="d-flex flex-row gap-3 m-3 justify-content-between">
            <ListAllServices/>
            <AddService />
        </div>
    )

}
export default ServicesPage;