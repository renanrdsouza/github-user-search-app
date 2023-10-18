import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const MainCard = ({ children }: Props) => {
  return (
    <div className="max-w-custom-mobile max-h-custom-mobile p-6 md:max-w-custom-tablet md:p-0 lg:max-w-custom-desktop">
      {children}
    </div>
  );
};

export default MainCard;
