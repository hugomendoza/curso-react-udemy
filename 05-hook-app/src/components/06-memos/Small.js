import React, { memo } from 'react'

export const Small = memo(({ value }) => {

  console.log('Me colví a llamar :(');

  return (
    <small> {value} </small>
  )
});
