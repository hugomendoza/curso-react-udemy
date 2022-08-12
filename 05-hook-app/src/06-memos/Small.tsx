import React from "react"

type Props = {
  value: number
}

export const Small = React.memo(({value}:Props) => {

  console.log("Me volví a generar :(")

  return (
    <small>{ value }</small>
  )
})
