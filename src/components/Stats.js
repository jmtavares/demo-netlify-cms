import React from 'react'
import styled from '@emotion/styled'

const StatsContainer = styled.div`
  max-width: 1152px;
  padding: 20px;
  color: #1c1c1c;
  flex-grow: 1;
  margin: 80px auto;
  position: relative;
  width: auto;
  display: flex;
  justify-content: space-between;
`

const Stat = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.div`
  font-size: 22px;
  margin-top: 12px;
`
const Value = styled.div`
  font-size: 45px;
  line-height: 45px;
  font-weight: bold;
`

const Stats = ({ data }) => {
  return (
    <StatsContainer>
      {data.map(({ label, value }) => {
        return (
          <Stat key={label}>
            <Value>{value}</Value>
            <Label>{label}</Label>
          </Stat>
        )
      })}
    </StatsContainer>
  )
}

export default Stats
