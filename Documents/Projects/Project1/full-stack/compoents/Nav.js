import Link from "next/link";
import styles from "./nav.module.css";
import {auth} from '../utlis/firebase';
import { useAuthState } from "react-firebase-hooks/auth";

export default function Nav() {
  const [user, loading] = useAuthState(auth);
  return (
    <nav className={styles.nav}>
      <Link href="/" legacyBehavior>
        <div className={styles.navLink}>
          <div>Creative Minds</div>
        </div>
      </Link>
      <ul className={styles.flex}>
        {!user && (
        <Link href="/auth/login" legacyBehavior>
          <a className={styles.navButton}>
            Join Now
          </a>
        </Link>
  )}
  {user && (
    <div className={styles.user}>
      <Link href= '/post'>
      <button className={styles.postbtn}>Post</button>
      </Link>
      <Link href='/dashboard'>
        <img className={styles.img} src={user.photoURL} >

        </img>
      </Link>
    </div>
  )}
      </ul>
    </nav>
  );
}