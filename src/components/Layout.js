import styles from './Layout.module.css';
function Layout() {
    return(
        <div className={styles.header}>
            <h2 className= {styles.port}>Portfolio</h2>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/Projects">Projects</a></li>
                    <li><a href="/Contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    );

}
export default Layout;