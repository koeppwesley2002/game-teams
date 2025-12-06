import { BackButton, Backicon, Container, Logo } from "./styles";
import logoGame from '@assets/Logo.png';

type props = {
    showBackButton: boolean;
}

export function Header({showBackButton}: props) {
    return (
        <Container>
            {
            showBackButton &&
            <BackButton>
             <BackIcon />
            </BackButton>
            }
            <Logo source={logoGame} />
        </Container>
    )
}