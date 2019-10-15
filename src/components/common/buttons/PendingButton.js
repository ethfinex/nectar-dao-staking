import React from 'react'
import styled from 'styled-components'
import Spinner from 'components/common/Spinner'

const Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 34px;
  margin: 0px 24px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  border: 1px solid var(--inactive-border);
  color: var(--inactive-header-text);
  background: none;
`

const PendingButton = () => {
  return (
    <Button>
      <Spinner />
    </Button>
  )
}

export default PendingButton
