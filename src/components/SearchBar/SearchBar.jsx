import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";
export default function SearchBar({ onSubmit }) {
  function submit(e) {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      console.log("***", e.target.value);
      onSubmit(e.target.value);
    }
  }
  return (
    <>
      <SearchIcon size={27} className={s.icon} />
      <input
        onKeyUp={submit}
        className={s.input}
        type="text"
        placeholder="Recherchez votre serie"
      />
    </>
  );
}
