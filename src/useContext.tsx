import { useContext } from 'react';
import { AppContextValue, AppContext } from './context.tsx';

/**
 *
 * Access the context in any component using this hook
 *
 */

const useAppContext = (): AppContextValue => {
	const ctxt = useContext(AppContext);
	if (ctxt === null) throw new Error('AppContext is null - that can not be the case');
	return ctxt;
};

export default useAppContext;
