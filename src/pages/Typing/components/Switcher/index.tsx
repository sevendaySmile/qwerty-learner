import AnalysisButton from '../AnalysisButton'
import ChangeTransVisibleButton from '../ChangeTransVisibleButton'
import ErrorBookButton from '../ErrorBookButton'
import HandPositionIllustration from '../HandPositionIllustration'
import LoopWordSwitcher from '../LoopWordSwitcher'
import Setting from '../Setting'
import SoundSwitcher from '../SoundSwitcher'
import ToggleDarkButton from '../ToggleDarkButton'
import WordDictationSwitcher from '../WordDictationSwitcher'
import Tooltip from '@/components/Tooltip'
import { CTRL } from '@/utils'

export default function Switcher() {
  return (
    <div className="flex items-center justify-center gap-2">
      <Tooltip content="音效设置">
        <SoundSwitcher />
      </Tooltip>

      <Tooltip className="h-7 w-7" content="设置单个单词循环">
        <LoopWordSwitcher />
      </Tooltip>

      <Tooltip className="h-7 w-7" content={`开关默写模式（${CTRL} + V）`}>
        <WordDictationSwitcher />
      </Tooltip>
      <Tooltip className="h-7 w-7" content={`开关释义显示（${CTRL} + Shift + V）`}>
        <ChangeTransVisibleButton />
      </Tooltip>

      <Tooltip content="错题本">
        <ErrorBookButton />
      </Tooltip>

      <Tooltip className="h-7 w-7" content="查看数据统计">
        <AnalysisButton />
      </Tooltip>

      <Tooltip className="h-7 w-7" content="开关深色模式">
        <ToggleDarkButton />
      </Tooltip>
      <Tooltip className="h-7 w-7" content="指法图示">
        <HandPositionIllustration></HandPositionIllustration>
      </Tooltip>
      <Tooltip content="设置">
        <Setting />
      </Tooltip>
    </div>
  )
}
