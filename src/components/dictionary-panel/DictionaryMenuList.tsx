import { ComponentItem } from '../../constants/constantsType';
import classnames from 'classnames';
import styles from './DictionaryMenuList.module.less';

interface PropsType {
    componentList: ComponentItem[];
    curShowComponent: ComponentItem;
    selectComponent: (item: ComponentItem) => void;
}

/**
 * @desc 样式菜单
 */
const DictionaryMenuList = (props: PropsType) => {
    const { componentList, curShowComponent, selectComponent } = props;

    return (
        <div className={styles.list_panel}>
            {componentList.map((item) => (
                <div>
                    <div
                        className={classnames(
                            styles.list_item,
                            item.key === curShowComponent.key && styles.list_item_active,
                        )}
                        onClick={() => selectComponent(item)}
                    >
                        <div className={styles.list_item_name}>{item.name}</div>
                        <div className={styles.list_item_desc}>{item.desc}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DictionaryMenuList;
