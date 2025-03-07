"use client"

import { useRouter } from "next/navigation";
import styles from "./item.module.css";

type PageParams = Promise<{ id: string,
    squareImage: string,
    name: string,
    netWorth: number,
    industries: string }>;

export default async function Item({ params }: { params: PageParams }) {
    const { id, squareImage, name, netWorth, industries } = await params;
    const router = useRouter();
    return <div className={styles.item} onClick={() => router.push(`/person/${id}`)}>
        <img className={styles.img} src={squareImage}></img>
        <div className={styles.name}>{name}</div>
        <div className={styles.detail}>{`${Math.round(netWorth / 1000).toString()} Billion`} / {industries}</div>
    </div>;
}