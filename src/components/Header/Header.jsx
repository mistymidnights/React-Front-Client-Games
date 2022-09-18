import {
	HeaderContainer,
	HeaderElement,
	LogoContainer,
} from './Header.element';
import ButtonStyle from '../UI/ButtonStyle/Button';
import ButtonDespegable from '../UI/ButtonDesplegable/ButtonDespegable';
import { BsFillMusicPlayerFill, BsPlayFill } from 'react-icons/bs';
import H1Custom from '../UI/H1Custom/H1Custom';
import { Link } from 'react-router-dom';
import { MdHelp } from 'react-icons/md';
import { FiRadio } from 'react-icons/fi';

const Header = ({ toggleTheme }) => {
	return (
		<HeaderContainer>
			<HeaderElement>
				<div className='leftHeader'>
					<Link to={'/'}>
						<LogoContainer className='logo'></LogoContainer>
					</Link>
				</div>
				<div className='BtnHeader'>
					<ul className='HeaderList'>
						<li>Home</li>
						<li>Games</li>
						<li>Posts</li>
						<li>Podcast</li>
						<li>Chat</li>
					</ul>
					<ButtonDespegable height={'30px'} width={'40px'}>
						<H1Custom>
							<BsPlayFill />
						</H1Custom>
					</ButtonDespegable>
					<ButtonStyle variant={'small'} height={'30px'} width={'40px'}>
						Log in
					</ButtonStyle>
					<ButtonStyle variant={'smallSecond'} height={'30px'} width={'50px'}>
						Sign up
					</ButtonStyle>
					<ButtonStyle variant={'smallSecond'} height={'50px'} width={'40px'}>
						<div onClick={toggleTheme}>Change Theme</div>
					</ButtonStyle>
					<ButtonDespegable
						className='Help'
						position={'fixed'}
						height={'50px'}
						width={'50px'}
						right={'20px'}
						bottom={'80px'}
					>
						<H1Custom>
							<MdHelp fontSize={'35px'} />
						</H1Custom>
					</ButtonDespegable>
					<ButtonDespegable
						className='Bot'
						position={'fixed'}
						height={'50px'}
						width={'50px'}
						right={'20px'}
						bottom={'140px'}
						padding={'0px 0px 0px 6px'}
					>
						<H1Custom>
							<FiRadio fontSize={'35px'} />
						</H1Custom>
					</ButtonDespegable>
					<ButtonDespegable
						className='Podcast'
						position={'fixed'}
						height={'50px'}
						width={'50px'}
						right={'20px'}
						bottom={'20px'}
						padding={'0px 0px 0px 6px'}
					>
						<H1Custom>
							<BsFillMusicPlayerFill fontSize={'35px'} />
						</H1Custom>
					</ButtonDespegable>
				</div>
			</HeaderElement>
		</HeaderContainer>
	);
};

export default Header;
