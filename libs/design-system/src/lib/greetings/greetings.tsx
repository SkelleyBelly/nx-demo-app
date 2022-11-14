export interface GreetingsProps {
    /**
     * The name that will be used in the greeting
     */
    name: String;
}

/**
 * This is a component that does some stuff as well as some things
 */
export const Greetings = ({name}: GreetingsProps) => <div>
    <p>{`Hello there, ${name}`}</p>
</div>