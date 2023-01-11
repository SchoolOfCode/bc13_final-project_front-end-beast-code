import Image from "next/image"

export default function BarPageInfo () {


    return (
        <div>
            {/* <Image data-testid="bar-page-image" src="https://www.imagesaresocool.com" alt="really cool image" layout="fill"/> */}
                <div>
                    <h2 data-testid="name-of-bar">Name of bar</h2>
                </div>
            <div>
                <p data-testid="bar-description">this bar is a --- description</p>
                <div>
                    <ul>
                        <li>
                            <p data-testid="icon-bar-page">icon goes here</p>
                            <p data-testid="icon-description-bar-page">text next to icon</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
