import { Tag } from "@chakra-ui/react";
import { getColorForLoad } from "../utils";

export default function StationLoad({ load, label }) {
  return <Tag bgColor={getColorForLoad(load)}>{label ? label : load}</Tag>;
}
