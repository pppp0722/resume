import styled from 'styled-components';

const Header = () => {
    return (
        <Container>
            <Top>
                <Text1>반갑습니다<Point>!</Point></Text1>
                <Text1>저는 이일환입니다<Point>.</Point></Text1>
            </Top>
            <Bottom>
                <Text2>백엔드 개발자를 희망하고 있으며 주어진 문제를 효율적으로 해결하기 위해 고민하는 과정들을 좋아합니다. 단순 구현만 하는 개발자가 아닌, 사용하는 모든 것들을 이해하며 사용하는 개발자가 되고 싶습니다.</Text2>
            </Bottom>
        </Container>
    );
}

const Container = styled.div`
    width: 90%;
    margin-top: 30px;
`

const Top = styled.div`
`

const Bottom = styled.div`
    margin-top: 30px;
`

const Point = styled.div`
    display: inline-block;
    color: #374D9A;
`

const Text1 = styled.div`
    font-size: 70px;
    font-weight: bold;
    @media only screen and (max-width: 960px) {
        font-size: 40px;
    }
`

const Text2 = styled.div`
    font-size: 30px;
    @media only screen and (max-width: 960px) {
        font-size: 20px;
    }
`

export default Header;