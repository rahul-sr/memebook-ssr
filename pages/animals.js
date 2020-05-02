import MemeContainer from '../components/MemeContainer';

export default class Animals extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let subreddits = [
            "AnimalMemes",
            "AdviceAnimals",
        ];
        return (
            <MemeContainer subreddits={subreddits} />
        )
    }
};