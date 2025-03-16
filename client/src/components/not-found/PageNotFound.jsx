import styles from './PageNotFound.module.css';
import { Link } from 'react-router-dom';
export default function NotFound() {
    return (
        <>
            <main className={styles['main-class']}>
            <Link to={"/"} style={{textDecoration: 'none'}}>
                
                    <div className={styles["text-center"]}>
                        <h1>404</h1>
                        <h1>
                        Page not found
                        </h1>
                        <p>
                        Sorry, we couldn’t find the page you’re looking for.
                        </p>
                        <div className="go-home">
                            Go back home
                        </div>
                    </div>
            </Link>        
                
            </main>
        </>
    )
}
