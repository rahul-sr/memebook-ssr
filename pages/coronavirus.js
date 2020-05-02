import MemeContainer from '../components/MemeContainer';

export default class CoronaVirus extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let subreddits = [
            "CoronavirusMemes",
            "AnimalMemes",
        ];
        return (
            <MemeContainer subreddits={subreddits} />
        )
    }
};


