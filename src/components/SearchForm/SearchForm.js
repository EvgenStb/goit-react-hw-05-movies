export const SearchForm = ({ onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" onChange={onChange}></input>
      <button type="submit">Search</button>
    </form>
  );
};
 
