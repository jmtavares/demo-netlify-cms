import styled from '@emotion/styled'
import { Link as GatsbyLink } from 'gatsby'

export const Title = styled.h1`
  font-size: 45px;
  line-height: 45px;
  font-weight: bold;
`

export const Text = styled.div`
  font-size: 20px;
  line-height: 28px;
`

export const Link = styled(GatsbyLink)`
  font-weight: bold;
  font-size: 24px;
  color: #1c1c1c;
  padding-bottom: 5px;
  border-bottom: 5px solid #fbd001;
`
