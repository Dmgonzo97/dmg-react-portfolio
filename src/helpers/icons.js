import {
    faTrash,
    faSignOutAlt,
    faEdit,
    faSpinner,
    faCirclePlus,
    faEnvelope,
    faLink,
    faPhone,
    faLocationDot,
    faLock
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
        faLocationDot,
        faLock
    );
}

export default Icons