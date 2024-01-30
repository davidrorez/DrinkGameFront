import React from "react";

function LoadingState(Component) {
	return function WithLoadingState({ isLoading, ...props }) {
		if (!isLoading) return <Component {...props} />
		return (
			<p>Cargando información...</p>
		)
	}
}

export default LoadingState;