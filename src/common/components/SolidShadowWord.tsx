import styles from './css/SolidShadowWord.module.less';

const SolidShadowWord = () => {
    const word = `大鹏一日同风起，扶摇直上九万里。`;

    return (
        <div className={styles.box}>
            <div className={styles.main_title}>
                <span>{word}</span>
            </div>
            <div className={styles.subtitle}>
                <span>{word}</span>
            </div>
        </div>
    );
};

export default SolidShadowWord;
