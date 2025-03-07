import styles from "./page.module.css";

const URL_PERSON = "https://billions-api.nomadcoders.workers.dev/person";

interface IParams {
    params: {
        id: string
    };
}

async function getPerson(id: string) {
    const response = await fetch(`${URL_PERSON}/${id}`);
    return response.json();
}

export default async function PersonDetail({params: {id}}: IParams) {
    const person = await getPerson(id);
    return <div>
        <div className={styles.container}>
            <img src={person.squareImage}></img>
            <div className={styles.name}>{person.name}</div>
            <div className={styles.detail}>Networth: {Math.round(person.netWorth / 1000).toString()} Billion</div>
            <div className={styles.detail}>Country: {person.country}</div>
            <div className={styles.detail}>Industry: {person.industries}</div>
            <div className={styles.description}>{person.bio}</div>
        </div>
        <div className={styles.container}>
            <div className={styles.name}>Financial Assets</div>
            <div className={styles.item_container}>
                {person.financialAssets.map((e, i) => 
                    <li className={styles.item} key={i}>
                        <div>Ticker: {e.ticker}</div>
                        <div>Shares: {e.numberOfShares.toLocaleString()}</div>
                        {e.exerciseOptionPrice ? <div>Exercise Price: ${e.exerciseOptionPrice}</div> : null}
                    </li>
                )}
            </div>
        </div>
    </div>;
}