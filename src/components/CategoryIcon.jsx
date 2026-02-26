import { Box } from "@chakra-ui/react";
import {
  LuCake,
  LuChartPie,
  LuCandy,
  LuCupSoda,
  LuIceCreamCone,
  LuPartyPopper,
} from "react-icons/lu";

const CATEGORY_ICONS = {
  bolos: LuCake,
  tortas: LuChartPie,
  "doces-finos": LuCandy,
  cupcakes: LuCupSoda,
  sobremesas: LuIceCreamCone,
  festas: LuPartyPopper,
};

export function CategoryIcon({ categoryId, boxSize = 8, ...props }) {
  const IconComponent = CATEGORY_ICONS[categoryId] || LuCake;
  const sizePx = typeof boxSize === "number" ? boxSize * 4 : 32;
  return (
    <Box display="inline-flex" alignItems="center" color="pink.500" _dark={{ color: "pink.400" }} {...props}>
      <IconComponent size={sizePx} />
    </Box>
  );
}
