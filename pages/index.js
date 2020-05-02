import MemeContainer from '../components/MemeContainer';

export default class India extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let subreddits = [
      "dankmemes",
      "MemeEconomy",
      "ComedyCemetery",
      "memes",
      "PrequelMemes",
      "terriblefacebookmemes",
      "PewdiepieSubmissions"
    ];
    return (
      <MemeContainer subreddits={subreddits} />
    )
  }
};