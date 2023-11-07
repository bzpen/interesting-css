import styles from '../../style/css/DictionaryPanel.module.less';
import HeaderDictionary from './HeaderDictionary';

const DictionaryPanel = () => {
    return (
        <div className={styles.panel}>
            <HeaderDictionary />
        </div>
    );
};

export default DictionaryPanel;
