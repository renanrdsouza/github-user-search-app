import { useThemeContext } from "../hooks/useThemeContext";

type Props = {
  children: JSX.Element;
};

const Header = ({ children }: Props) => {
  const { theme } = useThemeContext();
  return (
    <div className="flex justify-between mb-9">
      <div>
        <h1
          className={
            theme === "light"
              ? "text-custom-h1 font-bold tracking-normal"
              : "text-custom-h1 font-bold tracking-normal text-light-mode-white"
          }
        >
          devfinder
        </h1>
      </div>
      {children}
    </div>
  );
};

export default Header;
