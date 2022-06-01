import styled from 'styled-components'

const Body = () => {
    return (
        <Container>
            <Category>
                <Text1><Point>Experience.</Point></Text1>
                <ItemTitle>
                    <Text2>아이디어콘서트</Text2>
                    <Text4>ICT Internship<br/>2021-09 ~ 2021-12</Text4>
                </ItemTitle>
                <Items>
                    <Item>
                        <Text2>Damda</Text2>
                        <Text4>2021-12 ~ 2021-12</Text4>
                        <Text3>Description</Text3>
                        <Text4>4컷 사진 제작 웹사이트의 프론트엔드를 구현했습니다.</Text4>
                        <Text3>What did I do</Text3>
                        <Text4>• 설명 페이지 구현</Text4>
                        <Text4>• 모달창, 사이드바 등 기능 구현</Text4>
                        <Text3>Tech Stack</Text3>
                        <Text4>React</Text4>
                    </Item>

                    <Item>
                        <Text2>File Viewer</Text2>
                        <Text4>2021-10 ~ 2021-11</Text4>
                        <Text3>Description</Text3>
                        <Text4>NAS에 저장되어 있는 자료들을 열람할 수 있는 웹사이트 구현 토이프로젝트의 프론트엔드와 백엔드를 구현했습니다.</Text4>
                        <Text3>What did I do</Text3>
                        <Text4>• 트리 구조와 아이콘 방식의 프론트엔드 구현</Text4>
                        <Text4>• 파일 전송, 삭제 등 백엔드 API 구현</Text4>
                        <Text3>Tech Stack</Text3>
                        <Text4>React, Spring</Text4>
                    </Item>
                </Items>
            </Category>
            <Category>
                <Text1><Point>Education.</Point></Text1>
                <ItemTitle>
                    <Text2>프로그래머스<br/>백엔드 데브코스</Text2>
                    <Text4>2022-03 ~ 2022-08</Text4>
                </ItemTitle>
                <Items>

                </Items>
                <ItemTitle>
                    <Text2>세종대학교</Text2>
                    <Text4>디지털콘텐츠학과<br/>2021-12 ~ 2021-12</Text4>
                </ItemTitle>
                <Items>
                    <Item>
                        <Text3>평균 학점</Text3>
                        <Text4>3.7</Text4>
                    </Item>
                    <Item>
                        <Text3>프로젝트</Text3>
                        <Text4>블루투스 기반 체크인 및 역학조사 자동화 시스템 (2021.03 ~2021.06)</Text4>
                        <Text4>퍼스널컬러 분석 및 화장품 추천 어플리케이션 (2020.09 ~ 2020.12)</Text4>
                        <Text4>AI 표정인식 식단추천 시스템 (해커톤)  (2020.07) </Text4>
                    </Item>
                    <Item>
                        <Text3>수상 경력</Text3>
                        <Text4>• 2021/1학기 성적2위</Text4>
                        <Text4>• 2020 제10회 창의설계경진대회 장려상, 인기상</Text4>
                        <Text4>• 2020 제8회 세종대학교 SW·AI 해커톤 금상</Text4>
                        <Text4>• 2019 교내 SW코딩경시대회 4등</Text4>
                    </Item>
                </Items>
            </Category>
        </Container>
    );
}

const Container = styled.div`
    width: 90%;
    margin-top: 30px;
`

const Point = styled.div`
    display: inline-block;
    color: #374D9A;
`

const Category = styled.div`
    margin-bottom: 30px;
    padding-bottom: 30px;
    border-bottom: 1px solid #374D9A;
    display: flex;
    flex-wrap: wrap;
`

const Text1 = styled.div`
    font-size: 48px;
    font-weight: bold;
    margin-bottom: 10px;
    width: 100%;
`

const ItemTitle = styled.div`
    width: 100%;
    display: inline-block;

    @media only screen and (min-width: 960px) {
        width: 30%;
    }
`

const Text2 = styled.div`
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
`

const Text3 = styled.div`
    font-size: 21px;
    font-weight: bold;
    margin-bottom: 10px;
`

const Text4 = styled.div`
    font-size: 18px;
    margin-bottom: 10px;
`

const Items = styled.div`
    width: 100%;
    display: inline-block;
    font-size: 18px;

    @media only screen and (min-width: 960px) {
        width: 70%;
    }
`

const Item = styled.div`
    margin-bottom 30px;
`

export default Body;