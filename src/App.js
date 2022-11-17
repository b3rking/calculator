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
                    <Btn> - </Btn>
                </Grid>
                <Grid>
                    <Btn>4</Btn>
                    <Btn>5</Btn>
                    <Btn>6</Btn>
                    <Btn> + </Btn>
                </Grid>
                <Grid>
                    <Btn>7</Btn>
                    <Btn>8</Btn>
                    <Btn>9</Btn>
                    <Btn> * </Btn>
                </Grid>
                <Grid>
                    <Btn> 0 </Btn>
                    <Btn> Clear </Btn>
                    <Btn> = </Btn>
                    <Btn> / </Btn>
                </Grid>
            </Card>
        </MainCard>
    );
}

export default App;
