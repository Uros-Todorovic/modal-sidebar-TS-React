import { FaBars } from 'react-icons/fa';
import useAppContext from './useContext';

const Home = () => {
	const { openSideBar, openModal } = useAppContext();

	return (
		<main>
			<button onClick={openSideBar} className="sidebar-toggle">
				<FaBars />
			</button>
			<button onClick={openModal} className="btn">
				show modal
			</button>
		</main>
	);
};

export default Home;
