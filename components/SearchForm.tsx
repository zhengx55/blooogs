import { Search } from "lucide-react";
import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        type="text"
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="Search for startups"
      />
      <div className="flex gap-2">
        {query && <SearchFormReset />}
        <button className="search-btn text-white">
          <Search size={24} />
        </button>
      </div>
    </Form>
  );
};

export default SearchForm;
