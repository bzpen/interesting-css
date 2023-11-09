import SolidShadowWord from '../../common/components/SolidShadowWord';
import styles from '../../style/css/PreviewPanel.module.less';

const PreviewPanel = () => {
    return (
        <div className={styles.panel}>
            <div className={styles.title}>Solid Shadow Word</div>
            <div className={styles.inspiration_origin}>
                <span>Source of inspiration:</span>
                <a href='https://github.com/chokcoco/iCSS/issues/219'>https://github.com/chokcoco/iCSS/issues/219</a>
            </div>
            <div className={styles.preview_box}>
                <SolidShadowWord word={'Solid Shadow Word'} />
            </div>
        </div>
    );
};

export default PreviewPanel;
