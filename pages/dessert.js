import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";

export default function Dessert(){
return(
    <>
    <Head><title>Nice Dessets</title></Head>
    <h1>Dessert recipies</h1>
    <p>mmmh lecker</p>
    <Image
    src="https://unsplash.com/photos/surQ2mkZNxw/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mzd8fGRlc3NlcnR8ZW58MHwwfHx8MTY1OTMzNzk1NQ&force=true&w=2400"
    alt="Cake"
    layout="responsive"
    width={2400}
    height={1599}
    />
    </>
)
}