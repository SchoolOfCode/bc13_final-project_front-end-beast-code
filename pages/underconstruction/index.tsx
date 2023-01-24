import Image from "next/image";
import BarPageHeader from "../../components/BarPageHeader";
import styles from "../../styles/underconstruct.module.css"

export default function underConstruction() {
    return <>
        <BarPageHeader/>
        <div className={styles.display}>
            <h2 className={styles.text}>Some features are still under construction, check back later! </h2>
            <Image
                src={'/construction-icon.png'}
                alt="Under construction icon"
                width={100}
                height={100}
        ></Image>
        </div>
    </>
}