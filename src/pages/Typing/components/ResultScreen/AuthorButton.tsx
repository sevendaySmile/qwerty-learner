import kai from '@/assets/kai.jpg'
import Hint from '@/components/Hint'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export const AuthorButton = () => {
  return (
    <Hint label="点击了解作者和更多作品💕">
      <Avatar className="h-8 w-8 shadow-lg" onClick={() => window.open('https://kaiyi.cool', '_blank')}>
        <AvatarImage src={kai} alt="Kai Homepage" />
        <AvatarFallback>Kai</AvatarFallback>
      </Avatar>
    </Hint>
  )
}
