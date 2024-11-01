import { isOpenDarkModeAtom } from '@/store'
import { useAtom } from 'jotai'
import IconMoon from '~icons/heroicons/moon-solid'
import IconSun from '~icons/heroicons/sun-solid'

const ToggleDarkButton = () => {
  const [isOpenDarkMode, setIsOpenDarkModeState] = useAtom(isOpenDarkModeAtom)
  const changeDarkModeState = () => {
    setIsOpenDarkModeState((old: boolean) => !old)
  }
  return (
    <button
      className={`rounded p-[2px] text-lg text-indigo-500
            transition-colors duration-300 ease-in-out hover:bg-indigo-400 hover:text-white focus:outline-none`}
      type="button"
      onClick={(e) => {
        changeDarkModeState()
        e.currentTarget.blur()
      }}
      aria-label="开关深色模式"
    >
      {isOpenDarkMode ? <IconMoon className="icon" /> : <IconSun className="icon" />}
    </button>
  )
}

export default ToggleDarkButton
