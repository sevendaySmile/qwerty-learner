import Setting from '../Setting'
import AnalysisButton from './AnalysisButton'
import ChangeTransVisibleButton from './ChangeTransVisibleButton'
import ErrorBookButton from './ErrorBookButton'
import HandPositionIllustration from './HandPositionIllustration'
import LoopWordSwitcher from './LoopWordSwitcher'
import SoundSwitcher from './SoundSwitcher'
import ToggleDarkButton from './ToggleDarkButton'
import WordDictationSwitcher from './WordDictationSwitcher'
import Hint from '@/components/Hint'
import { CTRL } from '@/utils'

export default function Switcher() {
  return (
    <div className="flex items-center justify-center gap-2">
      <Hint label="音效设置">
        <SoundSwitcher />
      </Hint>

      <Hint label="设置单个单词循环">
        <LoopWordSwitcher />
      </Hint>

      <Hint label={`开关默写模式（${CTRL} + V）`}>
        <WordDictationSwitcher />
      </Hint>
      <Hint label={`开关释义显示（${CTRL} + Shift + V）`}>
        <ChangeTransVisibleButton />
      </Hint>

      <Hint label="错题本">
        <ErrorBookButton />
      </Hint>

      <Hint label="查看数据统计">
        <AnalysisButton />
      </Hint>

      <Hint label="开关深色模式">
        <ToggleDarkButton />
      </Hint>
      <Hint label="指法图示">
        <HandPositionIllustration></HandPositionIllustration>
      </Hint>
      <Hint label="设置">
        <Setting />
      </Hint>
    </div>
  )
}
