export default function DivisionButton(props: { name: string }) {
    return (
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.name}
        </a>
    );
}