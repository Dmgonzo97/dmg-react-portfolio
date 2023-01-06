import {
    faTrash,
    faSignOutAlt,
    faEdit,
    faSpinner,
    faCirclePlus,
    faEnvelope,
    faLink,
    faPhone,
    faLocationDot
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";


const Icons = () => {
    return library.add(faTrash,
        faSignOutAlt,
        faEdit,
        faSpinner,
        faCirclePlus,
        faEnvelope,
        faLink,
        faPhone,
        faLocationDot
    );
}

export default Icons