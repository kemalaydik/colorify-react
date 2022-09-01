import { useParams } from 'react-router-dom';
const Dogs = props => {
	const { dogs } = useParams();
	return <>{dogs}</>;
};

export default Dogs;
