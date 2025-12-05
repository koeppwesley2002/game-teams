import { Container, Logo } from "./styles";
import logoGame from '@assets/Logo.png';

export function Header() {
    return (
        <Container>
            <Logo source={logoGame} />
        </Container>
    )
}