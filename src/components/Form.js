const MainWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  text-align: center;
`;

class Form extends Component {
  state = {
    username: ""
  };

  onTextChange = ({ target }) => this.setState({ username: target.value });

  onSubmit = e => {
    e.preventDefault(); // prevent browser refresh
    console.log(this.state.username);
  };

  isDisabled = () => this.state.username === "";

  render() {
    return (
      <MainWrapper>
        <Heading>
          Choose a username!{" "}
          <span role="emoji" aria-label="emoji wave">
            👋
          </span>
        </Heading>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Choose a username!"
            onChange={this.onTextChange}
          />
          <button type="submit" disabled={this.isDisabled()}>
            submit!
          </button>
        </form>
      </MainWrapper>
    );
  }
} // Form
