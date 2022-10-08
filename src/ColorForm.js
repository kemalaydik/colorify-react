import { TextField, Button } from '@mui/material';

export default function ({ handleSubmit, setName, name }) {
	return (
		<form onSubmit={handleSubmit} className='flex flex-col items-center gap-3 mt-3'>
			<TextField id='outlined-basic' label='Color name' variant='outlined' value={name} onChange={e => setName(e.target.value)} required />
			<Button variant='contained' color='primary' type='submit'>
				Add Color
			</Button>
		</form>
	);
}
