import GithubIcon from '../../assets/icon/github.svg?react';
import MoonIcon from '../../assets/icon/moon.svg?react';
import SanIcon from '../../assets/icon/san.svg?react';
import styles from '../../style/css/HeaderDictionary.module.less';

const HeaderDictionary = () => {
    return (
        <div className={styles.box}>
            <div className={styles.title}>Interesting CSS</div>
            <div className={styles.icon_list}>
                <a href='https://github.com/bzpen/interesting-css' target='_blank'>
                    <GithubIcon className={styles.btu_icon_github} />
                </a>
                <MoonIcon className={styles.btu_icon_moon} />
                <SanIcon className={styles.btu_icon_san} />
            </div>
        </div>
    );
};

export default HeaderDictionary;
