import Inferno from "inferno";
import Component from "inferno-component";

import TextInput from "components/atoms/TextInput";

import "./style.scss";

export default class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = { query: props.query || "" };
  }
  render() {
    const { label, onQuery } = this.props;
    const { query } = this.state;
    return (
      <form
        className="SearchInput"
        onSubmit={$event => {
          $event.preventDefault();
          onQuery(query);
        }}
      >
        <TextInput
          className="SearchInput__input"
          type="search"
          label={label}
          defaultValue={query}
          onInput={$event => this.setState({ query: $event.target.value })}
        />
        <button className="SearchInput__button" type="submit">
          🔎
        </button>
      </form>
    );
  }
}
