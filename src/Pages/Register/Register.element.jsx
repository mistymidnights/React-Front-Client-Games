import styled from '@emotion/styled';

export const RegisterSection = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: var(--secondary-back);
	color: var(--text-color);
	padding-top: 200px;
	padding-bottom: 200px;
	min-height: 809px;
`;

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 342px;
	gap: 23px;
	padding: 60px;
	box-shadow: rgb(0 0 0 / 25%) 4px 3px 10px;
	background-color: #00000099;
	border-radius: 20px;
`;

export const RegisterContainer = styled.div`
	color: #575757;
	text-align: center;
`;

export const FormElement = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 15px;
`;

export const ButtonSubmit = styled.button`
	padding: 0.5em;
	color: #ffffff;
	background: #5d0f71;
	border: none;
	border-radius: 10px;
	width: 30%;
	height: 60px;
	margin-bottom: 0.5em;
	margin-top: 40px;
	&&:hover {
		color: white;
		background-color: #b32222;
	}
`;
