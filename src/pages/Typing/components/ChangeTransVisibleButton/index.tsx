import { TypingContext, TypingStateActionType } from '../../store'
import { CTRL } from '@/utils'
import { useContext } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import IconLanguage from '~icons/tabler/language'
import IconLanguageOff from '~icons/tabler/language-off'

const ChangeTransVisibleButton = () => {
  const { state, dispatch } = useContext(TypingContext) ?? {}

  const changeTransVisibleState = () => {
    if (dispatch) {
      dispatch({ type: TypingStateActionType.TOGGLE_TRANS_VISIBLE })
    }
  }

  useHotkeys(
    'ctrl+shift+v',
    () => {
      changeTransVisibleState()
    },
    { enableOnFormTags: true, preventDefault: true },
    [],
  )

  return (
    <button
      className={`p-[2px] ${state?.isTransVisible ? 'text-indigo-500' : 'text-gray-500'} rounded text-lg 
          transition-colors duration-300 ease-in-out hover:bg-indigo-400 hover:text-white focus:outline-none`}
      type="button"
      onClick={(e) => {
        changeTransVisibleState()
        e.currentTarget.blur()
      }}
      aria-label={`开关释义显示（${CTRL} + Shift + V）`}
    >
      {state?.isTransVisible ? <IconLanguage /> : <IconLanguageOff />}
    </button>
  )
}

export default ChangeTransVisibleButton
