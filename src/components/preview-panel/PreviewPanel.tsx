import SolidShadowWord from '../../common/components/SolidShadowWord';
import { ComponentItem } from '../../constants/constantsType';
import { COMPONENT_KEY } from '../../constants/constants';
import styles from '../../style/css/PreviewPanel.module.less';

interface PropsType {
    curShowComponent: ComponentItem;
}

const PreviewPanel = (props: PropsType) => {
    const { curShowComponent } = props;
    return (
        <div className={styles.panel}>
            <div className={styles.title}>{curShowComponent.name}</div>
            <div className={styles.inspiration_origin}>
                <span>Source of inspiration:</span>
                <a href={curShowComponent.href} target='_blank'>
                    {curShowComponent.href}
                </a>
            </div>
            <div className={styles.preview_box}>
                {curShowComponent.key === COMPONENT_KEY.SOLID_SHADOW_WORD && <SolidShadowWord />}
            </div>
        </div>
    );
};

export default PreviewPanel;
