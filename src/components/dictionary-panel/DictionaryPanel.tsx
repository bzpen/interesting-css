import DictionaryMenuList from './DictionaryMenuList';
import HeaderDictionary from './HeaderDictionary';
import { ComponentItem } from '../../constants/constantsType';
import { COMPONENT_LIST } from '../../constants/constants';
import styles from '../../style/css/DictionaryPanel.module.less';

interface PropsType {
    curShowComponent: ComponentItem;
    selectComponent: (item: ComponentItem) => void;
}

const DictionaryPanel = (props: PropsType) => {
    const { curShowComponent, selectComponent } = props;

    return (
        <div className={styles.panel}>
            <HeaderDictionary />
            <DictionaryMenuList
                componentList={COMPONENT_LIST}
                curShowComponent={curShowComponent}
                selectComponent={selectComponent}
            />
        </div>
    );
};

export default DictionaryPanel;
