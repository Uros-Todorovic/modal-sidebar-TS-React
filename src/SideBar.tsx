import { FaTimes } from 'react-icons/fa';
import logo from './logo.svg';
import useAppContext from './useContext';
import { social, links } from './data.tsx';

const SideBar = () => {
	const { isSideBarOpen, closeSideBar } = useAppContext();
	return (
		<aside className={isSideBarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
			<div className="sidebar-header">
				<img src={logo} alt="logo" className="logo" />
				<button className="close-btn" onClick={closeSideBar}>
					<FaTimes />
				</button>
			</div>
			<ul className="links">
				{links.map((link) => {
					const { id, url, text, icon } = link;
					return (
						<li key={id}>
							<a href={url}>
								{icon}
								{text}
							</a>
						</li>
					);
				})}
			</ul>
			<ul className="social-links">
				{social.map((link) => {
					const { id, url, icon } = link;
					return (
						<li key={id}>
							<a href={url}>{icon}</a>
						</li>
					);
				})}
			</ul>
		</aside>
	);
};

export default SideBar;
