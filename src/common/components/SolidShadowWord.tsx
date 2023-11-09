import styles from './css/SolidShadowWord.module.less';

interface PropsType {
    word: string;
}

const SolidShadowWord = (props: PropsType) => {
    const { word } = props;

    return (
        <div className={styles.main_title} data-word={word}>
            <span>{word}</span>
        </div>
    );
};

export default SolidShadowWord;
