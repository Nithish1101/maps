import { User } from "./models/User";
import { Company } from "./models/Company";
import { GoogleMap } from "./models/GoogleMap";

const user = new User();
const company = new Company();
console.log(user);
console.log(company);

const googleMap = new GoogleMap("map");
googleMap.addMarker(user);
googleMap.addMarker(company);
