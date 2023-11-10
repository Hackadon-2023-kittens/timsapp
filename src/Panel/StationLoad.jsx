import { Tag } from "@chakra-ui/react";
import { getColorForLoad } from "../utils";

export default function StationLoad({ load }) {
  return <Tag bgColor={getColorForLoad(load)}>{load}</Tag>;
}
