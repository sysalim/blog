import Input from "../app/Input"

const Search = ({className}) => {
  return (
    <div className={className}>
      <Input id={"search"} name={"search"} placeholder={"Search"}/>
    </div>
  )
}
export default Search