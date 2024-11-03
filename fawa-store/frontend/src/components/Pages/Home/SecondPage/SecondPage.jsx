import React from 'react'
import styles from './SecondPage.module.css'
import SecondPageBlock from '../SecondPageBlock/SecondPageBlock'

const SecondPage = () => {
    return (
        <div>
            <div className={styles.skin} id='sp'>
                <div className={styles.text}>Why Us?</div>
                <div className={styles.blocks}>
                    <SecondPageBlock
                        photoSrc="/svgs/Protect.svg"
                        rtext="Safe"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aliquam debitis omnis doloremque recusandae officiis, doloribus animi a consequatur assumenda autem tempora, nam asperiores aspernatur. Eos velit voluptatum neque vero!"
                    />
                    <SecondPageBlock
                        photoSrc="/svgs/Support.svg"
                        rtext="Support"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aliquam debitis omnis doloremque recusandae officiis, doloribus animi a consequatur assumenda autem tempora, nam asperiores aspernatur. Eos velit voluptatum neque vero!"
                    />
                    <SecondPageBlock
                        photoSrc="/svgs/Free.svg"
                        rtext="Free"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aliquam debitis omnis doloremque recusandae officiis, doloribus animi a consequatur assumenda autem tempora, nam asperiores aspernatur. Eos velit voluptatum neque vero!"
                    />
                    
                </div>
            </div>
        </div>
    )
}

export default SecondPage
