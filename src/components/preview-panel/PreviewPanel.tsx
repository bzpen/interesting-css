import SolidShadowWord from '../../common/components/SolidShadowWord';
import styles from '../../style/css/PreviewPanel.module.less';

const PreviewPanel = () => {
    return (
        <div className={styles.panel}>
            <div className={styles.title}>Solid Shadow Word</div>
            <div className={styles.preview_box}>
                <SolidShadowWord />
            </div>
        </div>
    );
};

export default PreviewPanel;
