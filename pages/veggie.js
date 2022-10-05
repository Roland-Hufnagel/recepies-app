import styled from "styled-components";
import Head from "next/head";
import Image from "next/image";

export default function Veggie() {
  return (
    <>
    <Head><title>Nice Vegies</title></Head> 
    <h1>Veggie recipies</h1>
      <p>more than just food</p>
    
    <Image 
    src="/img/pizza.jpg"
    alt="Pizza"
    layout="responsive"
    width={2400}
    height={1596}
    ></Image>
      
    </>
  );
}
