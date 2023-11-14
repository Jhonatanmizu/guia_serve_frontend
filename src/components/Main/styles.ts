'use client'

import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: #ffca17;
  color: #fff;
  width: 100%;
  min-height: 100vh;
  padding: 3rem 6rem;
  max-width: 1440px;
  margin: 0 auto;
  @media screen and (max-width: 1000px) {
    padding: 1.6rem;
  }
`

export const ContentWrapper = styled.section`
  width: 100%;
  margin-bottom: 2rem;
`

export const CenteredWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.img`
  width: 25rem;
  margin-bottom: 2rem;
`

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #1d3966;
  text-align: center;
  margin-bottom: 1rem;
`

export const Subtitle = styled.h2`
  font-size: 2.5rem;
  color: #1d3966;
  text-align: center;
  margin-bottom: 1rem;
`

export const Text = styled.p`
  font-size: 1.5rem;
  color: #1d3966;
  text-align: justify;
  margin-bottom: 1rem;
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #1d3966;
  margin-bottom: 1rem;
`

export const Illustration = styled.img`
  margin-top: 3rem;
  width: min(30rem, 100%);
`
export const List = styled.ul`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
`

export const ListItem = styled.li`
  list-style: none;
  font-size: 1.5rem;
  font-weight: 400;
  color: #1d3966;
  margin-bottom: 1rem;
`
