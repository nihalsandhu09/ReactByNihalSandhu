import User from "./User";
// import UserClass from "./UserClass";
import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>This is About Class component </h2>
        <User name={"Nihal Sandhu (functional)"} />
        {/* <UserClass name={"Nihal Sandhu(Class)"} location={"Una Class"} /> */}
      </div>
    );
  }
}

/**
 * -Parent Constructor
 * - Parent reder
 *
 *  -First Child Constructor
 *  -First Child render
 *
 * - Second Constructor
 *  Secoond Render
 *
 * <Dom Updated -In Single Batch>
 *
 * First ComponentDid Mount
 * Second ComponentDid Mount
 * Parent Componnet Did Mount
 */
export default About;
