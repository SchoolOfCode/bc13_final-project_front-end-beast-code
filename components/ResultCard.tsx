import Image from "next/image"


export type ResultCardProps = {
    name: string,
    cost: number,
    description: string,

} 

export default function ResultCard(props: ResultCardProps){
    
    return <div> 
{/* <Image
            src="https://www.thisisansrc.com"
            alt="put an alt here"
            data-testid="image"
            layout="fill"
        /> */}
        <h3 data-testid="title">{props.name}</h3>
        <p>{props.description}</p>
        <div className="icons-container" data-testid="container">
            <ul data-testid="unordered-list">
                <li data-testid="list-item">
                    <p data-testid="text">Type of bar</p>
                    <div data-testid="icon">Icon 1</div>
                </li>
                <li>
                    <p>{props.cost}</p>
                    <div>Icon 2</div>
                </li>
                <li>
                    <p>Food</p>
                    <div>Icon 3</div>
                </li>
                <li>
                    <p>Rating</p>
                    <div>Icon 4</div>
                </li>
            </ul>
        </div>
    </div>
}