import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const MainCard = ({ children }: Props) => {
  return (
    <div className="max-w-custom-mobile max-h-custom-mobile p-6">
      {children}
    </div>
  );
};

export default MainCard;
