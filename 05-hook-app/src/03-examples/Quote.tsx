import { useLayoutEffect, useRef, useState } from "react";

type Props = {
  author: string;
  quote: string
}

export const Quote = ({author, quote}:Props) => {
  
  const pRef = useRef< HTMLParagraphElement >(null);
  const [boxSize, setBoxSize] = useState({width: 0, height: 0})

  useLayoutEffect(() => {

    const sizes = pRef.current?.getBoundingClientRect()
    console.log(sizes)
    
    const { width, height }:any = sizes

    setBoxSize({width, height})

  }, [quote])

  return (
    <>
      <blockquote
        className="blockquote text-end"
        style={{
          display: "flex"
        }}
      >
        <p ref={ pRef } className="mb-1">{quote}</p>
        <footer className="blockquote-footer mt-1">{author}</footer>
      </blockquote>

      <code>{JSON.stringify(boxSize)}</code>
    </>
  )
}
