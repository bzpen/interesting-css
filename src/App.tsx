import DictionaryPanel from './components/dictionary-panel/DictionaryPanel';
import PreviewPanel from './components/preview-panel/PreviewPanel';
import { COMPONENT_LIST } from './constants/constants';
import { ComponentItem } from './constants/constantsType';
import { useState } from 'react';
import styles from './style/css/App.module.less';

function App() {
    const [curShowComponent, setCurShowComponent] = useState(COMPONENT_LIST[0]);

    const selectComponent = (item: ComponentItem) => {
        setCurShowComponent(item);
    };

    return (
        <div className={styles.content}>
            <DictionaryPanel curShowComponent={curShowComponent} selectComponent={selectComponent} />
            <PreviewPanel curShowComponent={curShowComponent} />
        </div>
    );
}

export default App;
