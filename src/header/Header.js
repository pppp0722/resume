import styled from 'styled-components';
import githubLogo from '../images/github.jpg';
import velogLogo from '../images/velog.jpg';

const Header = () => {
    return (
        <Container>
            <Top>
                <Text1>반갑습니다<Point>!</Point></Text1>
                <Text1>저는 이일환입니다<Point>.</Point></Text1>
            </Top>
            <Mid>
                <Text2>백엔드 개발자를 희망하고 있으며 주어진 문제를 효율적으로 해결하기 위해 고민하는 과정들을 좋아합니다. 단순 구현만 하는 개발자가 아닌, 사용하는 모든 것들을 이해하며 사용하는 개발자가 되고 싶습니다.</Text2>
            </Mid>
            <Bottom>
                <ImgLink href='https://github.com/pppp0722' target='_blank'>
                    <Image src={githubLogo} href=''/>
                </ImgLink>
                <ImgLink href='https://velog.io/@pppp0722' target='_blank'>
                    <Image src={velogLogo}/>
                </ImgLink>
                <LinkDiv>
                    Email: <Link href='mailto:poj0722@naver.com'><i>poj0722@naver.com</i></Link>
                </LinkDiv>
            </Bottom>
        </Container>
    );
}

const Container = styled.div`
    width: 90%;
    margin-top: 30px;
`

const Top = styled.div`
    margin-bottom: 30px;
`

const Mid = styled.div`
    margin-bottom: 30px;
`

const Bottom = styled.div`
    margin-bottom: 30px;
    display: flex;
    flex-wrap: wrap;
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
    font-size: 24px;
    @media only screen and (max-width: 960px) {
        font-size: 18px;
    }
`



const Image = styled.img`
    width: 80px;
    height: 80px;
    margin: 0 15px 0 15px;
    border-radius: 70%;

    @media only screen and (max-width: 960px) {
        width: 50px;
        height: 50px;
        margin: 0 10px 0 10px;
    }
`

const LinkDiv = styled.div`
    margin: 0 15px 0 15px;
    font-size: 21px;
    height: 80px;
    line-height: 80px;
    @media only screen and (max-width: 960px) {
        margin: 0 10px 0 10px;
        font-size: 18px;
        height: 50px;
        line-height: 40px;
    }
`

const Link = styled.a`
    &:link {
        color : grey;
        text-decoration: none;
    }
    &:visited {
        color : grey;
        text-decoration: none;
    }
    &:hover {
        color : grey;
        text-decoration: underline;
    }
    &:active {
        color : grey;
        text-decoration: none;
    }
`

const ImgLink = styled.a`
    display: inline-block;
    &:link {
    }
    &:visited {
    }
    &:hover {
        transition: 0.5s;

        filter :brightness(1) invert(1);
    }
    &:active {

    }
`

export default Header;