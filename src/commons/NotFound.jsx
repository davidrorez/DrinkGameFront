import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

function NotFound({ user }) {

	const navigate = useNavigate();

	const hangleGoBack = () => {
		return navigate('/');
	}

	/*if (!user) {
		return <Navigate to='/login' />
	}*/

	return (
		<div style={{
			backgroundColor: '#1c3845',
			minHeight: '100vh',
			width: '100%',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
		}}>
			<div className="container py-5 d-flex flex-column justify-content-center align-items-center"
				style={{ flex: '1 0 auto' }}>
				<div className="col-12 col-md-8 col-lg-6 col-xl-5 mt-5">
					<h1 className='d-flex justify-content-center text-white mb-4'>
						¡¡Oops!! Parece que la página que estás buscando no ha sido
						encontrada en nuestro rincón de la web :/
					</h1>
					<div className="d-flex justify-content-center input-group mb-3">
						<Button
							style={{ backgroundColor: '#e24a2b', textTransform: 'none' }}
							onClick={hangleGoBack}
							variant="contained">Volver al inicio
						</Button>
					</div>
				</div>
			</div>
			<footer className="text-center text-lg-start">
				<div className="text-center text-white p-3">
					© 2023 Copyright
				</div>
			</footer>
		</div>
	)
};

export default NotFound;