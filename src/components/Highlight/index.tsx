import { Container, Subtitle, Title } from "./styles";

Type props = {
    title?: string;
    subtitle?: string;
}


export function Highlight(title, subtitle}: props) {
    return (
        <Container>
          <Title>
            Olá mundo!
          </Title> 

          <Subtitle>
            é a galera do barulho
          </Subtitle>
        </Container>
    )
}