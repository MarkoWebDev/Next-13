import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const WrapperComponent = ({ children }: Props) => {
  return <div className="border-x mx-28 px-2 mt-4 border-[#222C38]">{children}</div>;
};

export default WrapperComponent;
