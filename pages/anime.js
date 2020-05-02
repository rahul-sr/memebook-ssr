import MemeContainer from '../components/MemeContainer';

export default class Anime extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let subreddits = [
            "animememes",
            "Animemes",
            "MemesOfAnime",
            "AnimemesHQ"
        ];
        return (
            <MemeContainer subreddits={subreddits} />
        )
    }
};


