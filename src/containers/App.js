import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GlobalStyles from './GlobalStyles';
import LoopList from '../components/LoopList';
import Theme from './Theme';

const Container = styled.div`
    height: 100%;
    min-height: 100vh;
`;

const InnerContainer = styled.div`
    margin: 0 auto;
    max-width: 960px;
    padding: 2rem;
    width: 100%;
`;

function App() {
    const [theme, setTheme] = React.useState('dark');
    const nextTheme = theme === 'light' ? 'dark' : 'light';

    React.useEffect(() => {
        document.body.dataset.theme = theme;
    }, [theme]);

    return (
        <Theme>
            <GlobalStyles />
            <Container>
                <Header theme={theme} handleToggleTheme={() => setTheme(nextTheme)} />
                <InnerContainer>
                    <LoopList />
                    <Footer />
                </InnerContainer>
            </Container>
        </Theme>
    );
}

export default App;
