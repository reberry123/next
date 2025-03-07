import Item from "./item";

export const metadata = {
    title: "Home",
}

const URL_ALL = "https://billions-api.nomadcoders.workers.dev/";

async function getBillionaries() {
    const response = await fetch(URL_ALL);
    const json = await response.json();
    return json;
}

export default async function Home() {
    const billionaries = await getBillionaries();
    return <div className="container">{billionaries.map(person => 
    <li key={person.id}>
        <Item params={person}/>
    </li>
    )}</div>;
}