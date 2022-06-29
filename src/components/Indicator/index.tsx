import styled from 'styled-components'

const IndicatorItem = styled.li`
  font-size: 36px;
  line-height: 1.6;
  strong {
    font-weight: bold;
  }
`

interface Props {
  number: number
  unit: string
  desc: string
}

function Indicator({ number, unit, desc }: Props) {
  const count = number

  return (
    <IndicatorItem>
      <strong>
        {count}
        {unit}
      </strong>
      {desc}
    </IndicatorItem>
  )
}

export default Indicator
