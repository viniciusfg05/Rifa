import styles from './styles.module.scss';

export function Header() {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/logo.svg" alt="Your Reffle" /> 
                <nav>
                    <button>Login</button>
                    <button>Criar Conta</button>
                </nav>
            </div>
        </div>
    )
}