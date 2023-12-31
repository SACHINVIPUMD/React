import { useContext } from "react";
import { ThemeContext } from "./Main";

function Navbar() {
  // Step 3
  const { theme, onClick } = useContext(ThemeContext);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: theme.bgColor,
        color: theme.textColor,
        height: "10vh",
      }}
    >
      <h2>Navbar</h2>
      <button onClick={onClick}>Switch Theme</button>
    </div>
  );
}

export default Navbar;
