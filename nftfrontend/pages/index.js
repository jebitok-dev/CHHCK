import React, {useState, useEffect} from "react";
import {ethers} from "ethers";
import Head from "next/head";
import {useRouter} from "next/router";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [currentAccount, setCurrentAccount] = useState("");
  const {push} = useRouter();
  // Wallet connection logic
  const isWalletConnected = async () => {
    try {
      const {ethereum} = window;

      const accounts = await ethereum.request({method: "eth_accounts"});
      console.log("accounts: ", accounts);

      if (accounts.length > 0) {
        const account = accounts[0];
        console.log("wallet is connected! " + account);
      } else {
        console.log("make sure MetaMask is connected");
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const connectWallet = async () => {
    try {
      const {ethereum} = window;

      if (!ethereum) {
        console.log("please install MetaMask");
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Wizkid - More Love Less Ego</title>
        <meta name='description' content='Album NFT' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>More Love Less Ego - Wizkid</h1>
        <p className={styles.description}>
          Wizkid is a top African artist that has a wider fanbase commonly known
          as WizkidFC. If you're a Wizkid fan you're welcome to claim NFT of his
          upcoming album, his past albums, and major quotes. This is an
          appreciation for your loyalty and support to Wizkid's music career
          through likes & RTs to new wizkid fans, reposting his IG stories on
          Twitter, sharing his live performance videos, sharing his achievements
          over the past years.🦅🦅❤️
        </p>

        <div className={styles.grid}>
          <button disabled>Connect Wallet to Claim Tokens</button>
        </div>
        <br />
        <button onClick={() => push()} style={{color: "#000"}}>Claim Tokens</button>
      </main>

      <footer className={styles.footer}>
        <a href='' target='_blank' rel='noopener noreferrer'>
          Created by @SharonJebitok in honor of the Wizkid!🦅
        </a>
      </footer>
    </div>
  );
}
