import styled from 'styled-components'

const AwardItem = styled.li`
  display: flex;
  align-items: center;
  margin-right: 40px;
  img {
    width: 54px;
    height: 54px;
    margin-right: 8px;
  }
  p {
    font-size: 14px;
    font-weight: bold;
    line-height: 22px;
  }
`

interface Props {
  imgSrc: string
  imgAlt: string
  firstLine: string
  secondLine: string
}

const Award = ({ imgSrc, imgAlt, firstLine, secondLine }: Props) => {
  return (
    <AwardItem>
      <img src={imgSrc} alt={imgAlt} />
      <p>
        {firstLine}
        <br />
        {secondLine}
      </p>
    </AwardItem>
  )
}

export default Award
