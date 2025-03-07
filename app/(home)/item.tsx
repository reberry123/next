"use client"

import { useRouter } from "next/navigation";
import styles from "./item.module.css";

export default function Item({
    person
}: {
    person: {id: string, squareImage: string, name: string, netWorth: number, industries: string}
}) {
    const router = useRouter();
    return <div className={styles.item} onClick={() => router.push(`/person/${person.id}`)}>
        <img className={styles.img} src={person.squareImage}></img>
        <div className={styles.name}>{person.name}</div>
        <div className={styles.detail}>{`${Math.round(person.netWorth / 1000).toString()} Billion`} / {person.industries}</div>
    </div>;
}