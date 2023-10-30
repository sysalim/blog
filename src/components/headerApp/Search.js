import { useRouter } from "next/router";
import Input from "../app/Input";
import { useState } from "react";

const Search = ({ className }) => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const handleKeyup = (e) => {
    e.preventDefault();
    if (e.key === "Enter") {
      if (searchValue) {
        router.push(`/search?q=${encodeURIComponent(searchValue.trim())}`);
        setSearchValue("");
      }
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };
  return (
    <div className={className}>
      <Input
        id={"search"}
        name={"search"}
        placeholder={"Search"}
        keyup={handleKeyup.bind(this)}
        change={handleChange.bind(this)}
      />
    </div>
  );
};
export default Search;
