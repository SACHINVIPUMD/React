import { useContext } from "react";
import { ThemeContext } from "./Main";
import { CenterFocusStrong } from "@mui/icons-material";

function InsideHome() {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: theme.bgColor,
     color: theme.textColor,
     textAlign:'center'}}>

      <h1>WELCOME</h1>
      
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tempore facilis rem dolor. Mollitia, omnis! Eligendi, laboriosam ipsa fuga commodi vitae repellendus culpa ad nihil. Sed consequuntur officiis praesentium nulla!</p>
    </div>
  );
}

export default InsideHome;
