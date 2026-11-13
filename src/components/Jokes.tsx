
type JokeProps = {
    setup: string,
    punchline: string,
}


function Jokes(props: JokeProps) {
    return (
        <div>
            {props.setup && <p className="setup">Setup: {props.setup}</p>}
            <p className="punchline">Punchline: {props.punchline}</p>
        </div>
    )

}

export default Jokes;