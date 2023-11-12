import SolidShadowWord from '../../common/components/SolidShadowWord';
import styles from '../../style/css/PreviewPanel.module.less';

const PreviewPanel = () => {
    return (
        <div className={styles.panel}>
            <div className={styles.title}>Solid Shadow Word</div>
            <div className={styles.inspiration_origin}>
                <span>Source of inspiration:</span>
                <a href='https://csscoco.com/inspiration/#/./shadow/projection-word-solid-shadow-ii' target='_blank'>
                    https://csscoco.com/inspiration/#/./shadow/projection-word-solid-shadow-ii
                </a>
            </div>
            <div className={styles.preview_box}>
                <SolidShadowWord word={'Solid Shadow Word'} />
            </div>
        </div>
    );
};

export default PreviewPanel;
