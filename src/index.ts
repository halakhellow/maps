import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
import { User } from "./User";

let customMap = new CustomMap("map"),
  user = new User(),
  company = new Company();

customMap.addMarker(user);
customMap.addMarker(company);
