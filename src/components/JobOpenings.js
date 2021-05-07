import React from 'react'
import styled from '@emotion/styled'
import { Title, Text, Link } from './Typography'

const JobOpeningsOuterContainer = styled.div`
  background-color: #1d1d1d;
  padding: 20px;
  color: white;
  flex-grow: 1;
  margin: 100px auto;
  position: relative;
  width: auto;
  display: flex;
  justify-content: space-between;
`

const JobOpeningsInnerContainer = styled.div`
  display: flex;
  width: auto;
  flex-grow: 1;
  padding: 100px 0;
  max-width: 1152px;
  margin: 0 auto;
  flex-direction: column;
`

const StyledTitle = styled(Title)`
  color: white;
`

const StyledText = styled(Text)`
  margin-top: 20px;
  max-width: 500px;
`

const StatsContainer = styled.div`
  display: flex;
  margin-top: 80px;
`

const Stat = styled.div`
  min-width: 300px;
`

const Value = styled.div`
  font-size: 100px;
  font-weight: bold;
`
const Description = styled.div`
  font-size: 30px;
  font-weight: bold;
`

const LearnMore = styled(Link)`
  color: white;
  font-size: 16px;
  border: none;
  margin-top: 20px;
`

const JobOpenings = ({ data }) => {
  return (
    <JobOpeningsOuterContainer>
      <JobOpeningsInnerContainer>
        <StyledTitle>Job Openings (57) in Leicester</StyledTitle>
        <StyledText>{data.summary}</StyledText>
        <StatsContainer>
          <Stat>
            <Value>35</Value>
            <Description>Engineering</Description>
            <LearnMore>Learn More →</LearnMore>
          </Stat>
          <Stat>
            <Value>12</Value>
            <Description>Product</Description>
            <LearnMore>Learn More →</LearnMore>
          </Stat>
          <Stat>
            <Value>10</Value>
            <Description>Management</Description>
            <LearnMore>Learn More →</LearnMore>
          </Stat>
        </StatsContainer>
      </JobOpeningsInnerContainer>
    </JobOpeningsOuterContainer>
  )
}

export default JobOpenings
