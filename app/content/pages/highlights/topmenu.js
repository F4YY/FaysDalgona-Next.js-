import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {
  BottomRow,
  MenuDescription,
  MotorcyleIcon,
  NameAndPrice,
  OrderDelivery,
  TopMenuDesc
} from "./styled_highlight";

const TopMenu = ({ title, price, subtitle, desc }) => {
    return (
    <TopMenuDesc>
      <NameAndPrice>
        <h3>
          {title}
        </h3>
        <h4>
          {price}
        </h4>
      </NameAndPrice>
      <MenuDescription>
        {desc}
      </MenuDescription>
      <BottomRow>
        <OrderDelivery href="https://gofood.link/a/yHFDprE" target="_blank" rel="noreferrer">
          {subtitle}
        </OrderDelivery>
        <MotorcyleIcon href="https://gofood.link/a/yHFDprE" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faMotorcycle} className="faMotorcyle" />
        </MotorcyleIcon>
      </BottomRow>
    </TopMenuDesc>
  )
}

export default TopMenu;