import { ReactNode, useContext } from "react";

type Props = {
  children: ReactNode;
};

const MainCard = ({ children }: Props) => {
  return (
    <div className="max-w-custom-mobile max-h-custom-mobile p-6 md:max-w-custom-desktop md:max-h-custom-desktop md:p-0">
      {children}
    </div>
  );
};

export default MainCard;
