import MemeContainer from '../components/MemeContainer';

export default class India extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let subreddits = [
            "IndianMeyMeys",
            "desimemes",
        ];
        return (
            <MemeContainer subreddits={subreddits} />
        )
    }
};