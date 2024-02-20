import { type ReactNode, createContext, useState } from 'react';

/**
 *
 * Context for sharing the current modal and sidebar state throughout the app.
 *
 */

type AppState = {
	isSideBarOpen: boolean;
	isModalOpen: boolean;
};

export type AppContextValue = AppState & {
	openSideBar: () => void;
	closeSideBar: () => void;
	openModal: () => void;
	closeModal: () => void;
};

export const AppContext = createContext<AppContextValue | null>(null);

/**
 *
 * Provider component to wrap around your whole application. This provides access to the context values defined above.
 *
 */

type AppProviderProps = {
	children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
	const [isSideBarOpen, setIsSideBarOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openSideBar = () => {
		setIsSideBarOpen(true);
	};

	const closeSideBar = () => {
		setIsSideBarOpen(false);
	};

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const ctx: AppContextValue = {
		isSideBarOpen,
		isModalOpen,
		openModal,
		closeModal,
		openSideBar,
		closeSideBar,
	};

	return <AppContext.Provider value={ctx}>{children}</AppContext.Provider>;
};
