import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const THEMES = ["light", "dark", "red"];
  const [theme, setTheme] = useTheme();

  const changeTheme = (e) => setTheme(e.target.value);

  return (
    <header className={`content-${theme}`}>
      {THEMES.map((color) => (
        // ラベルの中にinput??
        <label key={color}>
          <input
            type="radio"
            id={color}
            name={color}
            value={color}
            checked={color == theme}
            onChange={changeTheme}
          />
          {color}
        </label>
      ))}
    </header>
  );
};

export default Header;
