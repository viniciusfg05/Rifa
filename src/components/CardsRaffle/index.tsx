import styles from './styles.module.scss';

export function CardsRaffle() {
    return (
        <div className={styles.headerContainer}>
            <section>
                <img className="image"src="/Iphone8PlusRosa.jpg" alt="" />
                <p>Iphone 8 plus - R$ 8,00 cada número</p>
                <div className={styles.buttonContainer}>
                    <button>Adiquirir</button>
                </div>
            </section>
        </div>
    )
}