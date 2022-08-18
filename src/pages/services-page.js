import AddService from "../components/add-service";
import ListAllServices from "../components/list-all-services";

const ServicesPage = ({onSetType}) => {
    return (
        <div className="d-flex flex-row gap-3 m-3 justify-content-between">
            <ListAllServices onSetType ={onSetType}/>
            <AddService />
        </div>
    )

}
export default ServicesPage;