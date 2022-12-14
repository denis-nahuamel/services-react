import AddService from "../components/add-service";
import ListAllServices from "../components/list-all-services";

const ServicesPage = () => {
    
    return (
        <div className="d-flex flex-row gap-3 m-3">
            <ListAllServices/>
            <AddService />
        </div>
    )

}
export default ServicesPage;