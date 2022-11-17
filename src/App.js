import Btn from "./components/UI/Btn/Btn";
import Card from "./components/UI/Card/Card";
import Grid from "./components/UI/Grid/Grid";
import Header from "./components/UI/Header";
import MainCard from "./components/UI/MainCard/MainCard";

function App() {
    return (
        <MainCard>
            <Header>Calculator</Header>
            <Card>
                <Grid>
                    <Btn>1</Btn>
                    <Btn>2</Btn>
                    <Btn>3</Btn>
                </Grid>
            </Card>
        </MainCard>
    );
}

export default App;
