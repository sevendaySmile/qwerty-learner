import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

const Hint = ({ label, children, side, align, sideOffset, alignOffset, className }: HintProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={100} defaultOpen>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent side={side} align={align} sideOffset={sideOffset} alignOffset={alignOffset} className={className}>
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export interface HintProps {
  label: string
  children: React.ReactNode
  side?: 'top' | 'bottom' | 'left' | 'right'
  align?: 'start' | 'center' | 'end'
  sideOffset?: number
  alignOffset?: number
  className?: string
}

export default Hint
