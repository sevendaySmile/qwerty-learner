import { TypingContext, TypingStateActionType } from '../../store'
import Hint from '@/components/Hint'
import { randomConfigAtom } from '@/store'
import { autoUpdate, offset, useFloating, useHover, useInteractions } from '@floating-ui/react'
import { useAtomValue } from 'jotai'
import { useCallback, useContext, useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'

export default function StartButton({ isLoading }: { isLoading: boolean }) {
  // eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
  const { state, dispatch } = useContext(TypingContext)!
  const randomConfig = useAtomValue(randomConfigAtom)

  const onToggleIsTyping = useCallback(() => {
    !isLoading && dispatch({ type: TypingStateActionType.TOGGLE_IS_TYPING })
  }, [isLoading, dispatch])

  const onClickRestart = useCallback(() => {
    dispatch({ type: TypingStateActionType.REPEAT_CHAPTER, shouldShuffle: randomConfig.isOpen })
  }, [dispatch, randomConfig.isOpen])

  useHotkeys('enter', onToggleIsTyping, { enableOnFormTags: true, preventDefault: true }, [onToggleIsTyping])

  const [isShowReStartButton, setIsShowReStartButton] = useState(false)
  const { refs, context } = useFloating({
    open: isShowReStartButton,
    onOpenChange: setIsShowReStartButton,
    whileElementsMounted: autoUpdate,
    middleware: [offset(5)],
  })
  const hoverButton = useHover(context)
  const { getReferenceProps, getFloatingProps } = useInteractions([hoverButton])

  return (
    <Hint label={`${state.isTyping ? '暂停' : '开始'} （Enter）`} className="text-xs" containerClassName="relative">
      <div className={`mx-2 h-9 w-20`}></div>
      <div
        ref={refs.setReference}
        {...getReferenceProps()}
        className={`${
          state.isTyping
            ? 'bg-gray-400 shadow-gray-300 dark:bg-gray-600  dark:shadow-none'
            : 'bg-indigo-500 shadow-indigo-300 dark:shadow-indigo-500/60'
        } ${
          isShowReStartButton ? 'h-20' : 'h-auto'
        } absolute left-2 top-0 w-20 flex-col overflow-hidden rounded-lg shadow-lg transition-colors duration-200`}
      >
        <button
          className={`${
            state.isTyping ? 'bg-gray-400  dark:bg-gray-700 dark:hover:bg-gray-500' : 'bg-indigo-500'
          } my-btn-primary w-20 shadow`}
          type="button"
          onClick={onToggleIsTyping}
          aria-label={state.isTyping ? '暂停' : '开始'}
        >
          <span className="font-medium">{state.isTyping ? 'Pause' : 'Start'}</span>
        </button>
        {isShowReStartButton && (
          <div className="absolute top-8 flex w-20 justify-center" ref={refs.setFloating} {...getFloatingProps()}>
            <button
              className={`${
                state.isTyping ? 'bg-gray-500 dark:bg-gray-700 dark:hover:bg-gray-500 ' : 'bg-indigo-400 '
              } my-btn-primary mb-1 mt-1 w-18  transition-colors duration-200`}
              type="button"
              onClick={onClickRestart}
              aria-label={'重新开始'}
            >
              Restart
            </button>
          </div>
        )}
      </div>
    </Hint>
  )
}
