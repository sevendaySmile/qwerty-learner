import { TypingContext, TypingStateActionType } from '../../store'
import WordCard from './WordCard'
import Drawer from '@/components/Drawer'
import Hint from '@/components/Hint'
import { currentChapterAtom, currentDictInfoAtom, isReviewModeAtom } from '@/store'
import { Dialog } from '@headlessui/react'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { atom, useAtomValue } from 'jotai'
import { useContext, useState } from 'react'
import ListIcon from '~icons/tabler/list'
import IconX from '~icons/tabler/x'

const currentDictTitle = atom((get) => {
  const isReviewMode = get(isReviewModeAtom)

  if (isReviewMode) {
    return `${get(currentDictInfoAtom).name} 错题复习`
  } else {
    return `${get(currentDictInfoAtom).name} 第 ${get(currentChapterAtom) + 1} 章`
  }
})

export default function WordList() {
  // eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
  const { state, dispatch } = useContext(TypingContext)!

  const [isOpen, setIsOpen] = useState(false)
  const currentDictTitleValue = useAtomValue(currentDictTitle)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
    dispatch({ type: TypingStateActionType.SET_IS_TYPING, payload: false })
  }

  return (
    <>
      <Hint label="List" side="right" containerClassName="fixed left-0 top-[50%] z-20" className="text-md">
        <button
          type="button"
          onClick={openModal}
          className=" rounded-lg rounded-l-none bg-indigo-50 px-2 py-3 text-lg hover:bg-indigo-200 focus:outline-none dark:bg-indigo-900 dark:hover:bg-indigo-800"
        >
          <ListIcon className="h-6 w-6 text-lg text-indigo-500 dark:text-white" />
        </button>
      </Hint>

      <Drawer open={isOpen} onClose={closeModal} classNames="bg-stone-50 dark:bg-gray-900">
        <Dialog.Title as="h3" className="flex items-center justify-between p-4 text-lg font-medium leading-6 dark:text-gray-50">
          {currentDictTitleValue}
          <IconX onClick={closeModal} className="cursor-pointer" />
        </Dialog.Title>
        <ScrollArea.Root className="flex-1 select-none overflow-y-auto ">
          <ScrollArea.Viewport className="h-full w-full px-3">
            <div className="flex h-full w-full flex-col gap-1">
              {state.chapterData.words?.map((word, index) => {
                return <WordCard word={word} key={`${word.name}_${index}`} isActive={state.chapterData.index === index} />
              })}
            </div>
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar className="flex touch-none select-none bg-transparent " orientation="vertical"></ScrollArea.Scrollbar>
        </ScrollArea.Root>
      </Drawer>
    </>
  )
}
