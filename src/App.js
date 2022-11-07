import Btn from "./components/UI/Btn/Btn";
import Card from "./components/UI/Card/Card";
import Row from "./components/UI/Row/Row";
import Header from "./components/UI/Header";
import MainCard from "./components/UI/MainCard/MainCard";

function App() {
    return (
        <MainCard>
            <Header>Calculator</Header>
            <Card>
                <Row>
                    <Btn>1 of 3</Btn>
                    <Btn>2 of 3</Btn>
                    <Btn>3 of 3</Btn>
                </Row>
            </Card>
        </MainCard>
    );
}

export default App;
