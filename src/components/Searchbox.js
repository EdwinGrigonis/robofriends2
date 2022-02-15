import React from "react";

const Searchbox = ({searchfield, searchChange}) => {
  return (<div className="pa2">
    <input
      className="pa3 ba b--purple bg-lightest-blue"
      type="search"
      onChange = {searchChange}
      placeholder="search robots"
      />
    </div>
  );
}

export default Searchbox;