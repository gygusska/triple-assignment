import styled from 'styled-components'

import useCounter from '../../hooks/useCounter'

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
  const count = useCounter(number, 2000, 150)

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
