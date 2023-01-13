import Image from "next/image"
import styles from "../styles/barpage.module.css"

export default function BarPageInfo () {


    return (
        <div>
            <div className={styles.bar_image}>
                <Image src="https://i.postimg.cc/0QwStdyj/14-remini-enhanced.png" alt="Bar image"  layout="fill"
          objectFit="cover"></Image>
                </div>
                <div className={styles.bar_name}>
                    <h2 data-testid="name-of-bar">Patterns</h2>
                </div>
                <div className={styles.main_body}>
            <div className={styles.breakpoints}>
                <div className={styles.bar_description}>
                <p data-testid="bar-description">This place is just so much more than your typical boozer, it just keeps on giving. Not only have they got a HUGE food menu, literally you can eat anything but you can even kick start your day with one of their amazing breakfasts, big up The Brummie, it sorted us right out. On the booze front they’ve got a whole lotta spirits and if it’s quiet (and you flirt shamelessly) they might mix you up a little cocktail, but the deal clincher for most (until you head out back…) are the real ales on tap, so break out the pints.

Sure the pub’s cool, but go in search of the golden goose outside and you’ll find a drinker’s utopia that is screaming out for a Sunday session. This is probably the coolest beer garden you’ll come across, it’s grafittied and is fully kitted out with more booze and a load of retro games, foosball anyone? Kick back and watch a game (they show all sports on the TVs) or partake in one yourself on the ping pong table. It's on.</p>
                </div>
                <div className={styles.bar_features}>
                    <ul>
                        <li>
                            <p data-testid="icon-bar-page">icon goes here</p>
                            <p data-testid="icon-description-bar-page">text next to icon</p>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    )
}
