import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import css from '../styles/footer.module.scss';

library.add(fab, faFacebookF, faTwitter);

export function Footer({ children }) {
    const currentYear = new Date().getFullYear();
    return (
        <footer className={css.footer}>
            &copy; Hacktoolkit 2014-{currentYear}
        </footer>
    );
}
