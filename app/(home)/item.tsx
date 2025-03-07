"use client"

import { useRouter } from "next/navigation";
import styles from "./item.module.css";

// type PageParams = Promise<{ id: string,
//     squareImage: string,
//     name: string,
//     netWorth: number,
//     industries: string }>;

export default function Item({ params }: { params: { id: string, squareImage: string, name: string, netWorth: number, industries: string } }) {
    const router = useRouter();
    return <div className={styles.item} onClick={() => router.push(`/person/${params.id}`)}>
        <img className={styles.img} src={params.squareImage}></img>
        <div className={styles.name}>{params.name}</div>
        <div className={styles.detail}>{`${Math.round(params.netWorth / 1000).toString()} Billion`} / {params.industries}</div>
    </div>;
}