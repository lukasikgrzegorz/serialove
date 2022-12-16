import { useParams } from "react-router-dom";

const SeriesDetails = () => {
	const { seriesID } = useParams();
	console.log(seriesID);
};

export default SeriesDetails;
