import styles from './style/css/App.module.less';
import DictionaryPanel from './components/dictionary-panel/DictionaryPanel';
import PreviewPanel from './components/preview-panel/PreviewPanel';

function App() {
    return (
        <div className={styles.content}>
            <DictionaryPanel />
            <PreviewPanel />
        </div>
    );
}

export default App;
