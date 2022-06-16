import { Container, Content, Button, Logo} from "./style";

export function Header() {
    return (
        <Container>
            <Content>
                <div>
                    <Logo>REPRESENTA</Logo>
                </div>
                <div>
                    <Button type="button">
                        Cadastrar Administrador
                    </Button>
                    <Button type="button">
                        Representantes
                    </Button>
                    <Button type="button">
                        Estoque
                    </Button>
                    <Button type="button">
                        Sair
                    </Button>
                </div>
            </Content>
        </Container>
    )
}