import React from "react";
import FormField from "./FormField";

class Signup extends React.Component {
  render() {
    return (
      <div class="field">
        <label class={this.props.label}>Name</label>
        <div class="control">
          <input class="input" type={this.props.type} placeholder="e.g Alex Smith" />
        </div>
      </div>
    );
  }
}

export default Signup;
