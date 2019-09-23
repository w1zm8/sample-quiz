import React, { useEffect } from "react";
import { connect } from "react-redux";
import NavLink from "./NavLink";
import { fetchCategoriesData } from "./actions/quiz";

type DispatchProps = {
  fetchCategoriesData(count: number): void;
};

type Props = {} & DispatchProps;

const Quiz: React.FC<Props> = ({ fetchCategoriesData }) => {
  useEffect(() => {
    fetchCategoriesData(10);
  });

  return (
    <div>
      <h1>Quiz</h1>

      <NavLink to="/" label="🏠 Home" />
    </div>
  );
};

export default connect<null, DispatchProps>(
  null,
  {
    fetchCategoriesData
  }
)(Quiz);
