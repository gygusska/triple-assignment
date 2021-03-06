import styled, { keyframes } from 'styled-components'

import {
  TripleImage,
  PlayStoreImage,
  AppleBadgeImage,
} from '../../assets/images'
import Award from '../../components/Award'
import Indicator from '../../components/Indicator'

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 1200px;

  > div {
    flex: 1;
  }
`
const appear = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const LogoBox = styled.div`
  position: relative;
  text-align: center;
  animation-name: ${appear};
  animation-duration: 700ms;
  img {
    width: 400px;
    height: auto;
  }
  p {
    position: absolute;
    bottom: 47px;
    left: 50%;
    font-size: 15px;
    transform: translateX(-50%);
  }
`

const StatisticBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  animation-name: ${appear};
  animation-duration: 700ms;
`

const IndicatorsList = styled.ul`
  width: 448px;
`

const AwardsList = styled.ul`
  display: flex;
`

const MainPage = () => {
  return (
    <Container>
      <LogoBox>
        <img src={TripleImage} alt="triple-img" />
        <p>2021년 12월 기준</p>
      </LogoBox>
      <StatisticBox>
        <IndicatorsList>
          <Indicator number={350} unit="만 명" desc="의 여행자" />
          <Indicator number={21} unit="만 개" desc="의 여행 리뷰" />
          <Indicator number={650} unit="만 개" desc="의 여행 일정" />
        </IndicatorsList>
        <AwardsList>
          <Award
            imgSrc={PlayStoreImage}
            imgAlt="play-store-img"
            firstLine="2018 구글 플레이스토어"
            secondLine="올해의 앱 최우수상 수상"
          />
          <Award
            imgSrc={AppleBadgeImage}
            imgAlt="apple-badge-img"
            firstLine="2018 애플 앱스토어"
            secondLine="오늘의 여행앱 선정"
          />
        </AwardsList>
      </StatisticBox>
    </Container>
  )
}

export default MainPage
