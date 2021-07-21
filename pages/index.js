import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { connectToDatabase } from '../util/mongodb'
import { useSession } from 'next-auth/client'
import { motion } from 'framer-motion'

import Layout from '../components/Layout'
import CountdownWrapper from '../components/Countdown'
import Faq from '../pages/faq'
import Sponsors from '../pages/sponsors'

import heroLeft from '../public/assets/hero_left.png'
import heroRight from '../public/assets/hero_right.png'
import heroMobile from '../public/assets/hero_mobile.png'
import { FaCircle } from 'react-icons/fa'

import styles from '../styles/Index.module.css'

export default function Home() {
  const [session] = useSession()
  const [checkedIn, setCheckedIn] = React.useState(false)
  const [inGroup, setInGroup] = React.useState(false)

  const constraintsRef = useRef(null)

  const fetchData = async (userId) => {
    const response = await fetch('/api/checkin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: userId }),
    })
    const data = await response.json()
    setCheckedIn(Object.keys(data.checkins).length !== 0)
    if (data.checkins[0]) setInGroup(data.checkins[0].groupId !== '')
  }

  useEffect(() => {
    if (session) fetchData(session.user.id)
  })

  return (
    <>
      <Head>
        <title>Cutie Hack</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Layout>
        <div className={`${styles.bgWrap} ${styles.desktopimage}`}>
          <Image
            src={heroLeft}
            alt="Hero Image"
            objectFit="contain"
            quality={100}
            placeholder="blur"
          />
          <Image
            src={heroRight}
            alt="Hero Image"
            objectFit="contain"
            quality={100}
            placeholder="blur"
          />
        </div>
        <div className={`${styles.bgWrap} ${styles.mobileimage}`}>
          <Image
            src={heroMobile}
            alt="Hero Image"
            objectFit="contain"
            quality={100}
            placeholder="blur"
            className={styles.mobileimage}
          />
        </div>
        <section className={styles.main}>
          <motion.div ref={constraintsRef} className={styles.intro}>
            <motion.div
              drag
              dragConstraints={constraintsRef}
              whileDrag={{ scale: 1.05 }}
              dragMomentum={false}
              className={styles.window}
            >
              <div className={styles.windowHeader}>
                <FaCircle className={styles.windowButton} />
                <FaCircle className={styles.windowButton} />
                <FaCircle className={styles.windowButton} />
              </div>
              <div className={styles.windowContent}>
                {session && (
                  <h1 className={styles.greeting}>
                    Glad to have you, {session.user.name}!
                  </h1>
                )}
                <div>
                  <h1 className={styles.title}>cutie hack</h1>
                  <CountdownWrapper />
                  {session && checkedIn && !inGroup && (
                    <div className={styles.actionwrapper}>
                      <Link passHref href="/groups/create">
                        <motion.a
                          aria-label="Create Group Button"
                          type="button"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.995 }}
                          transition={{ ease: 'easeInOut', duration: 0.015 }}
                          className={styles.primarybutton}
                        >
                          Create a Group
                        </motion.a>
                      </Link>
                      <Link passHref href="/groups/join">
                        <motion.a
                          aria-label="Join Group Button"
                          type="button"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.995 }}
                          transition={{ ease: 'easeInOut', duration: 0.015 }}
                          className={styles.primarybutton}
                        >
                          Join a Group
                        </motion.a>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {!session && <>{/* <h1>You are not signed in</h1> */}</>}
        </section>
        <Faq />
        <Sponsors />
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase()

  return { props: {} }
}
